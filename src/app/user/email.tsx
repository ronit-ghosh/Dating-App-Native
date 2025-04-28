import { NativeSyntheticEvent, TextInput, TextInputChangeEventData, View } from 'react-native'
import CustomText from '@/components/ui/CustomText'
import { RelativePathString } from 'expo-router'
import { ExternalLink } from '@/components/helper/ExternalLink'
import { useState } from 'react'
import NextButton from '@/components/ui/NextButton'
import { UniStyles } from '@/styles/Styles'
import { emailStyles as styles } from '@/styles/email.styles'

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
                    Provide your email
                </CustomText>
                <CustomText
                    variant='h7'
                    fontFamily='PoppinsLight'
                    style={styles.desc}>
                    Email verification helps us keep{"\n"}your account secure.{" "}
                    <ExternalLink href='https://lume.ronitghosh.site/learn-more'>
                        Learn More
                    </ExternalLink>
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
                    You can use any email, it just have to match proper email format.
                </CustomText>
                <NextButton path={"/user/name" as RelativePathString} />
            </View>
        </View>
    )
}