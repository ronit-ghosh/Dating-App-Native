import { View } from 'react-native'
import CustomText from '@/components/ui/CustomText'
import { RelativePathString } from 'expo-router'
import { Colors } from '@/utils/Constants'
import { useState } from 'react'
import NextButton from '@/components/ui/NextButton'
import { RadioButton, Checkbox } from 'react-native-paper';
import { UniStyles } from '@/styles/Styles'
import { sexualityStyles as styles } from '@/styles/sexuality.styles'

export default function Weed() {
    const [ans, setAns] = useState<string>('');
    const [showOnProfile, setShowOnProfile] = useState(false)

    const ANS = [
        "yes",
        "sometimes",
        "no",
        "prefer not to say"
    ]

    return (
        <View style={UniStyles.container}>
            <View style={styles.upper}>
                <CustomText
                    variant='h0'
                    style={styles.title}
                    fontFamily='ManropeBold'>
                    Do you smoke weed?
                </CustomText>
                <View style={styles.selectSexContainer}>
                    <RadioButton.Group
                        onValueChange={value => setAns(value)}
                        value={ans}>
                        {
                            ANS.map((ans, i) => {
                                return (
                                    <RadioButton.Item
                                        key={i}
                                        labelVariant='bodyMedium'
                                        labelStyle={styles.sexLabel}
                                        color={Colors.primary}
                                        style={styles.sexBlock}
                                        label={ans}
                                        value={ans}
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
                <NextButton path={"/user/user-details/drugs" as RelativePathString} />
            </View>
        </View>
    )
}