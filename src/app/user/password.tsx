import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, View } from 'react-native'
import CustomText from '@/components/ui/CustomText'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import NextButton from '@/components/ui/NextButton'
import { UniStyles } from '@/styles/Styles'
import { passwordStyles as styles } from '@/styles/password.styles'

export default function Password() {
    const router = useRouter()
    const [password, setpassword] = useState<string>()

    const handleInputChange = (text: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setpassword(text.nativeEvent.text)
    }

    return (
        <View style={UniStyles.container}>
            <View style={styles.upper}>
                <CustomText>
                    {password}
                </CustomText>
                <CustomText
                    variant='h0'
                    style={styles.title}
                    fontFamily='ManropeBold'>
                    Enter a password
                </CustomText>
                <CustomText
                    variant='h7'
                    fontFamily='PoppinsLight'
                    style={styles.desc}>
                    A strong password helps to secure your account.
                </CustomText>
                <View>
                    <TextInput
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
                    We hash your password to keep it safe.
                </CustomText>
                <NextButton onpressfn={() => {
                    router.dismissAll()
                    router.replace("/user/user-details/more-details")
                }} />
            </View>
        </View>
    )
}