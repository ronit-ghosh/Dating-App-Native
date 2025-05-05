import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, View } from 'react-native'
import CustomText from '@/components/ui/CustomText'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import NextButton from '@/components/ui/NextButton'
import { UniStyles } from '@/styles/Styles'
import { passwordStyles as styles } from '@/styles/password.styles'
import { useUserStore } from '@/store/create-user'
import { saveToken } from '@/utils/auth-token'

export default function Password() {
    const router = useRouter()
    const { password, setPassword, handleSignup, loading, token } = useUserStore()
    const [error, setError] = useState<string>()

    const handleInputChange = (text: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const value = text.nativeEvent.text
        if (value.length < 8) {
            setError("Password must be 8 character long!")
        } else {
            setError("")
            setPassword(text.nativeEvent.text)
        }
    }

    const signup = async () => {
        const response = await handleSignup()

        if (!response) return

        if (response.token) {
            setError("")
            saveToken(response.token)
            router.dismissAll()
            router.replace("/user/user-details/more-details")
        } else if (response.error) {
            setError(response.error)
            console.log(response.error)
        } else {
            setError("Start Over!")
        }
    }

    return (
        <View style={UniStyles.container}>
            <View style={styles.upper}>
                <CustomText
                    variant='h0'
                    style={styles.title}
                    fontFamily='ManropeBold'>
                    Enter a password {token}
                </CustomText>
                <CustomText
                    variant='h7'
                    fontFamily='PoppinsLight'
                    style={styles.desc}>
                    A strong password helps to secure your account.
                </CustomText>
                <CustomText style={{ color: "red" }}>
                    {error}
                </CustomText>
                <View>
                    <TextInput
                        defaultValue={password}
                        secureTextEntry
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                </View>
            </View>
            <View style={styles.helperContainer}>
                <CustomText
                    variant='h8'
                    fontFamily='PoppinsLight'
                    style={styles.helper}>
                    {loading ? "Validating your details..." : "We hash your password to keep it safe."}
                </CustomText>
                <NextButton
                    disabled={!password || error || loading ? true : false}
                    onpressfn={signup} />
            </View>
        </View>
    )
}