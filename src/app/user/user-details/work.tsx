import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, View } from 'react-native'
import CustomText from '@/components/ui/CustomText'
import { RelativePathString } from 'expo-router'
import { useState } from 'react'
import NextButton from '@/components/NextButton'
import { UniStyles } from '@/styles/Styles'
import { emailStyles as styles } from '@/styles/email.styles'
import { Checkbox } from 'react-native-paper'

export default function JobTitle() {
    const [work, setWork] = useState<string>()
    const [showOnProfile, setShowOnProfile] = useState(false)

    const handleInputChange = (text: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setWork(text.nativeEvent.text)
    }

    return (
        <View style={UniStyles.container}>
            <View style={styles.upper}>
                <CustomText
                    variant='h0'
                    style={styles.title}
                    fontFamily='ManropeBold'>
                    Where do you work?
                </CustomText>
                <View>
                    <TextInput
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                </View>
            </View>
            <View style={styles.helperContainer}>
            <Checkbox.Item
                    labelVariant='bodyMedium'
                    // @ts-ignore
                    background=""
                    labelStyle={UniStyles.showOnProfile}
                    onPress={() => setShowOnProfile(!showOnProfile)}
                    label="Visible on your profile."
                    status={showOnProfile ? "checked" : "unchecked"}
                />
                <NextButton path={"/user/user-details/job-title" as RelativePathString} />
            </View>
        </View>
    )
}