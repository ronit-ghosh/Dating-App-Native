import { ScrollView, View } from 'react-native'
import CustomText from '@/components/ui/CustomText'
import { RelativePathString } from 'expo-router'
import { Colors } from '@/utils/constants'
import { useState } from 'react'
import NextButton from '@/components/ui/NextButton'
import { RadioButton, Checkbox } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { UniStyles } from '@/styles/Styles'
import { sexualityStyles as styles } from '@/styles/sexuality.styles'
import { useUserDetailsStore } from '@/store/create-user-details'

export default function Sexuality() {
    const { datingIntention, setDatingIntention } = useUserDetailsStore()
    const [showOnProfile, setShowOnProfile] = useState(false)

    const DATING_INTENTIONS = [
        "life partner",
        "long-term relationship",
        "long-term relationship, open to short",
        "short-term relationship, open to long",
        "short-term relationship",
        "figuring out my dating goals",
        "prefer not to say"
    ]

    return (
        <View style={UniStyles.container}>
            <View style={styles.upper}>
                <CustomText
                    variant='h0'
                    style={styles.title}
                    fontFamily='ManropeBold'>
                    What's your dating intention?
                </CustomText>
                <ScrollView style={styles.selectSexContainer}>
                    <RadioButton.Group
                        onValueChange={value => setDatingIntention(value)}
                        value={datingIntention}>
                        {
                            DATING_INTENTIONS.map((date, i) => {
                                return (
                                    <RadioButton.Item
                                        key={i}
                                        labelVariant='bodyMedium'
                                        labelStyle={styles.sexLabel}
                                        color={Colors.primary}
                                        style={styles.sexBlock}
                                        label={date}
                                        value={date}
                                    />
                                );
                            })
                        }
                    </RadioButton.Group>
                </ScrollView>
                <LinearGradient
                    colors={['rgba(255, 255, 255, 0)', '#fff']}
                    style={styles.gradient}
                    pointerEvents="none"
                />
            </View>
            <View style={styles.helperContainer}>
                <Checkbox.Item
                    labelVariant='bodyMedium'
                    // @ts-ignore
                    background=""
                    labelStyle={styles.showOnProfile}
                    onPress={() => setShowOnProfile(!showOnProfile)}
                    label="Visible on your profile."
                    status={showOnProfile ? "checked" : "unchecked"}
                />
                <NextButton
                    disabled={!datingIntention}
                    path={"/user/user-details/relationship-types" as RelativePathString}
                />
            </View>
        </View>
    )
}