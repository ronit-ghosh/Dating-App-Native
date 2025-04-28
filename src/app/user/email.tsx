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