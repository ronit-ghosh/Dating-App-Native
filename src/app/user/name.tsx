import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, View } from 'react-native'
import CustomText from '@/components/ui/CustomText'
import { RelativePathString } from 'expo-router'
import { useState } from 'react'
import NextButton from '@/components/ui/NextButton'
import { UniStyles } from '@/styles/Styles'
import { nameStyles as styles } from '@/styles/name.styles'

export default function Email() {
    const [email, setEmail] = useState<string>()

    const handleInputChange = (text: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setEmail(text.nativeEvent.text)
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
                        placeholder='First name'
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Last name'
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
                    Only matches can see your last name.
                </CustomText>
                <NextButton path={"/user/dob" as RelativePathString} />
            </View>
        </View>
    )
}