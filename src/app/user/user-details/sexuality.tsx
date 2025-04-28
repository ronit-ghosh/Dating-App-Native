import { StyleSheet, View } from 'react-native'
import CustomText from '@/components/ui/CustomText'
import { RelativePathString } from 'expo-router'
import { Colors } from '@/utils/Constants'
import { useState } from 'react'
import NextButton from '@/components/NextButton'
import { RadioButton, Checkbox } from 'react-native-paper';

export default function Gender() {
    const [sexuality, setSexuality] = useState<string>('');
    const [showOnProfile, setShowOnProfile] = useState(false)

    const SEXUALITIES = ['man', 'woman', 'non-binary'];

    return (
        <View style={styles.container}>
            <View style={styles.upper}>
                <CustomText
                    variant='h0'
                    style={styles.title}
                    fontFamily='ManropeBold'>
                    Which gender best describes you?
                </CustomText>
                <CustomText
                    variant='h7'
                    fontFamily='PoppinsLight'
                    style={styles.desc}>
                    We match daters using three broad gender groups.
                </CustomText>
                <View style={styles.selectSexContainer}>
                    <RadioButton.Group
                        onValueChange={value => setSexuality(value)}
                        value={sexuality}>
                        {
                            SEXUALITIES.map((sex, i) => {
                                return (
                                    <RadioButton.Item
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
                </View>
            </View>
            <View style={styles.helperContainer}>
                <Checkbox.Item
                    
                    onPress={() => setShowOnProfile(!showOnProfile)}
                    label="Visible on your profile."
                    status={showOnProfile ? "checked" : "unchecked"}
                />
                <NextButton path={"/user/user-details/sexuality" as RelativePathString} />
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
        margin: "auto"
    },
    upper: {
        alignSelf: "auto",
        marginTop: 40
    },
    title: {
        color: Colors.text
    },
    desc: {
        color: Colors.text,
        opacity: 0.5
    },
    input: {
        width: "100%",
        height: 65,
        margin: "auto",
        fontSize: 18,
        fontFamily: "PoppinsSemiBold",
        paddingTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.text
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
        width: "70%"
    },
    selectSexContainer: {
        marginTop: 20
    },
    sexBlock: {
        borderBottomWidth: 1,
        borderBottomColor: "#999",
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: "PoppinsRegular"
    },
    sexLabel: {
        // fontSize: 14,
        fontFamily: "PoppinsMedium",
        textTransform: "capitalize"
    }
})