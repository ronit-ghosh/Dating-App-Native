import { ScrollView, StyleSheet, View } from 'react-native'
import CustomText from '@/components/ui/CustomText'
import { RelativePathString } from 'expo-router'
import { Colors } from '@/utils/Constants'
import { useState } from 'react'
import NextButton from '@/components/NextButton'
import { RadioButton, Checkbox } from 'react-native-paper';

export default function DateGender() {
    const [sexuality, setSexuality] = useState<string>('');
    const [showOnProfile, setShowOnProfile] = useState(false)

    const SEXUALITIES = [
        "man",
        "woman",
        "non-binary-people",
        "everyone"
    ]

    return (
        <View style={styles.container}>
            <View style={styles.upper}>
                <CustomText
                    variant='h0'
                    style={styles.title}
                    fontFamily='ManropeBold'>
                   Who would you like to date?
                </CustomText>
                <ScrollView style={styles.selectSexContainer}>
                    <RadioButton.Group
                        onValueChange={value => setSexuality(value)}
                        value={sexuality}>
                        {
                            SEXUALITIES.map((sex, i) => {
                                return (
                                    <View key={i} style={styles.genderListContainer}>
                                        <Checkbox.Item
                                            labelVariant='bodyLarge'
                                            // @ts-ignore
                                            background=""
                                            labelStyle={styles.gendeList}
                                            label={sex}
                                            
                                        />
                                    </View>
                                );
                            })
                        }
                    </RadioButton.Group>
                </ScrollView>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        paddingVertical: 40,
        marginHorizontal: 10,
        margin: "auto",
    },
    upper: {
        alignSelf: "auto",
        marginTop: 40
    },
    title: {
        color: Colors.text
    },
    selectSexContainer: {
        marginTop: 20
    },
    helperContainer: {
        alignSelf: "auto",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    helper: {
        color: Colors.text,
        opacity: 0.5,
        width: "70%",
    },
    gendeList: {
        textTransform: "capitalize",
        fontFamily: "PoppinsMedium"
    },
    genderListContainer: {
        borderBottomWidth: 1
    },
    showOnProfile: {
        fontFamily: "PoppinsLight"
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 60,
        zIndex: 1,
        pointerEvents: 'none',
    }
})