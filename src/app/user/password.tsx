import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputChangeEventData, View } from 'react-native'
import CustomText from '@/components/ui/CustomText'
import { RelativePathString } from 'expo-router'
import { Colors } from '@/utils/Constants'
import { useState } from 'react'
import NextButton from '@/components/NextButton'

export default function Password() {
    const [password, setpassword] = useState<string>()

    const handleInputChange = (text: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setpassword(text.nativeEvent.text)
    }

    return (
        <View style={styles.container}>
            <View style={styles.upper}>
                <CustomText>
                    {password}
                </CustomText>
                <CustomText
                    variant='h0'
                    style={styles.title}
                    fontFamily='ManropeBold'>
                    Enter a password
                </CustomText>
                <CustomText
                    variant='h7'
                    fontFamily='PoppinsLight'
                    style={styles.desc}>
                   A strong password helps to secure your account.
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
                    We hash your password to keep it safe.
                </CustomText>
                <NextButton path={"/user/user-details/more-details" as RelativePathString} />
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
    }
})