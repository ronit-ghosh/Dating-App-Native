import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputChangeEventData, View } from 'react-native'
import CustomText from '@/components/ui/CustomText'
import { RelativePathString } from 'expo-router'
import { Colors } from '@/utils/Constants'
import { ExternalLink } from '@/components/helper/ExternalLink'
import { useState } from 'react'
import NextButton from '@/components/NextButton'

export default function Email() {
    const [email, setEmail] = useState<string>()

    const handleInputChange = (text: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setEmail(text.nativeEvent.text)
    }

    return (
        <View style={styles.container}>
            <View style={styles.upper}>
                <CustomText>
                    {email}
                </CustomText>
                <CustomText
                    variant='h0'
                    style={styles.title}
                    fontFamily='ManropeBold'>
                    Enter your name
                </CustomText>
                <View style={styles.nameContainer}>
                    <TextInput
                    placeholder='First name'
                        onChange={handleInputChange}
                        style={styles.input}
                    />
                    <TextInput
                    placeholder='Last name'
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
                    Only matches can see your last name.
                </CustomText>
                <NextButton path={"/user/dob" as RelativePathString} />
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
    nameContainer: {
        flexDirection: "row",
        gap: "1%"
    },
    input: {
        width: "49%",
        height: 65,
        margin: "auto",
        fontSize: 18,
        fontFamily: "PoppinsRegular",
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