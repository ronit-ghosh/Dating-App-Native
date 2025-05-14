import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, View } from 'react-native'
import CustomText from '@/components/ui/CustomText'
import { RelativePathString } from 'expo-router'
import { useState } from 'react'
import NextButton from '@/components/ui/NextButton'
import { UniStyles } from '@/styles/Styles'
import { emailStyles as styles } from '@/styles/email.styles'
import { Checkbox } from 'react-native-paper'
import { useUserDetailsStore } from '@/store/create-user-details'

export default function JobTitle() {
    const { jobTitle, setJobTitle } = useUserDetailsStore()
    const [showOnProfile, setShowOnProfile] = useState(false)

    const handleInputChange = (text: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setJobTitle(text.nativeEvent.text)
    }

    return (
        <View style={UniStyles.container}>
            <View style={styles.upper}>
                <CustomText
                    variant='h0'
                    style={styles.title}
                    fontFamily='ManropeBold'>
                    What's you job title?
                </CustomText>
                <View>
                    <TextInput
                        defaultValue={jobTitle}
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
                <NextButton
                    disabled={jobTitle.length === 0 ? true : false}
                    path={"/user/user-details/college" as RelativePathString}
                />
            </View>
        </View>
    )
}