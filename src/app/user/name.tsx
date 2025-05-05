import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, View } from 'react-native'
import CustomText from '@/components/ui/CustomText'
import { RelativePathString } from 'expo-router'
import { useState } from 'react'
import NextButton from '@/components/ui/NextButton'
import { UniStyles } from '@/styles/Styles'
import { nameStyles as styles } from '@/styles/name.styles'
import { useUserStore } from '@/store/create-user'

export default function Email() {
    const { firstname, lastname, setFirstname, setLastname } = useUserStore()
    const [error, setError] = useState<string>()

    const handleFirstnameChange = (text: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const value = text.nativeEvent.text
        if (value.length < 3) {
            setError("Firstname has to be 3 charcter long!")
        } else {
            setError("")
            setFirstname(text.nativeEvent.text)
        }
    }

    const handleLastnameChange = (text: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const value = text.nativeEvent.text
        if (value.length < 3) {
            setError("Lastname has to be 3 charcter long!")
        } else {
            setError("")
            setLastname(text.nativeEvent.text)
        }
    }

    return (
        <View style={UniStyles.container}>
            <View style={styles.upper}>
                <CustomText
                    variant='h0'
                    style={styles.title}
                    fontFamily='ManropeBold'>
                    Enter your name
                </CustomText>
                <CustomText style={{ color: "red" }}>
                    {error}
                </CustomText>
                <View style={styles.nameContainer}>
                    <TextInput
                        defaultValue={firstname}
                        placeholder='First name'
                        onChange={handleFirstnameChange}
                        style={styles.input}
                    />
                    <TextInput
                        defaultValue={lastname}
                        placeholder='Last name'
                        onChange={handleLastnameChange}
                        style={styles.input}
                    />
                </View>
            </View>
            <View style={styles.helperContainer}>
                <CustomText
                    variant='h8'
                    fontFamily='PoppinsLight'
                    style={styles.helper}>
                    Only matches can see your last name.
                </CustomText>
                <NextButton
                    disabled={!firstname || !lastname || error ? true : false}
                    path={"/user/dob" as RelativePathString}
                />
            </View>
        </View>
    )
}