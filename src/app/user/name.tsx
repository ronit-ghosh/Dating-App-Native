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

    const handleFirstnameChange = (text: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setFirstname(text.nativeEvent.text)
    }

    const handleLastnameChange = (text: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setLastname(text.nativeEvent.text)
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
                <View style={styles.nameContainer}>
                    <TextInput
                        value={firstname}
                        placeholder='First name'
                        onChange={handleFirstnameChange}
                        style={styles.input}
                    />
                    <TextInput
                        value={lastname}
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
                <NextButton path={"/user/dob" as RelativePathString} />
            </View>
        </View>
    )
}