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

export default function Sexuality() {
    const [sexuality, setSexuality] = useState<string>('');
    const [showOnProfile, setShowOnProfile] = useState(false)

    const SEXUALITIES = [
        "Prefer not to say",
        "Straight",
        "Gay",
        "Lesbian",
        "Bisexual",
        "Allosexual",
        "Androsexual",
        "Asexual",
        "Autosexual",
        "Bicurious",
        "Demisexual",
        "Fluid",
        "Greysexual",
        "Gynesexual",
        "Monosexual",
        "Omnisexual",
        "Pansexual",
        "Polysexual",
        "Queer",
        "Questioning",
        "Skoliosexual",
        "Spectrasexual",
        "Not listed"
    ]

    return (
        <View style={UniStyles.container}>
            <View style={styles.upper}>
                <CustomText
                    variant='h0'
                    style={styles.title}
                    fontFamily='ManropeBold'>
                    What's your sexuality?
                </CustomText>
                <ScrollView style={styles.selectSexContainer}>
                    <RadioButton.Group
                        onValueChange={value => setSexuality(value)}
                        value={sexuality}>
                        {
                            SEXUALITIES.map((sex, i) => {
                                return (
                                    <RadioButton.Item
                                        key={i}
                                        labelVariant='bodyMedium'
                                        labelStyle={styles.sexLabel}
                                        color={Colors.primary}
                                        style={styles.sexBlock}
                                        label={sex}
                                        value={sex}
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
                <NextButton path={"/user/user-details/date-gender" as RelativePathString} />
            </View>
        </View>
    )
}