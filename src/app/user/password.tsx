import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, View } from 'react-native'
import CustomText from '@/components/ui/CustomText'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import NextButton from '@/components/ui/NextButton'
import { UniStyles } from '@/styles/Styles'
import { passwordStyles as styles } from '@/styles/password.styles'
import { useUserStore } from '@/store/create-user'

export default function Password() {
    const router = useRouter()
    const { password, setPassword } = useUserStore()

    const handleInputChange = (text: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setPassword(text.nativeEvent.text)
    }

    return (
        <View style={UniStyles.container}>
            <View style={styles.upper}>
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
                        value={password}
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