import { View } from 'react-native'
import CustomText from '@/components/ui/CustomText'
import { RelativePathString } from 'expo-router'
import { Colors } from '@/utils/constants'
import { useState } from 'react'
import NextButton from '@/components/ui/NextButton'
import { RadioButton, Checkbox } from 'react-native-paper';
import { UniStyles } from '@/styles/Styles'
import { sexualityStyles as styles } from '@/styles/sexuality.styles'
import { useUserDetailsStore } from '@/store/create-user-details'

export default function Degree() {
    const { highestDegree, setHighestDegree } = useUserDetailsStore()
    const [showOnProfile, setShowOnProfile] = useState(false)

    const DEGREES = [
        "secondary school",
        "undergrad",
        "postgrad",
        "prefer not to say"
    ]

    return (
        <View style={UniStyles.container}>
            <View style={styles.upper}>
                <CustomText
                    variant='h0'
                    style={styles.title}
                    fontFamily='ManropeBold'>
                    What's the highest level you attained?
                </CustomText>
                <View style={styles.selectSexContainer}>
                    <RadioButton.Group
                        onValueChange={value => setHighestDegree(value)}
                        value={highestDegree}>
                        {
                            DEGREES.map((degree, i) => {
                                return (
                                    <RadioButton.Item
                                        key={i}
                                        labelVariant='bodyMedium'
                                        labelStyle={styles.sexLabel}
                                        color={Colors.primary}
                                        style={styles.sexBlock}
                                        label={degree}
                                        value={degree}
                                    />
                                );
                            })
                        }
                    </RadioButton.Group>
                </View>
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
                    disabled={!highestDegree}
                    path={"/user/user-details/drink" as RelativePathString}
                />
            </View>
        </View>
    )
}