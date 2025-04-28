import NextButton from '@/components/NextButton';
import CustomText from '@/components/ui/CustomText';
import { RelativePathString } from 'expo-router';
import { View, StyleSheet, TextInput } from 'react-native'
import MapView from 'react-native-maps';

export default function Location() {
    return (
        <View style={styles.container}>
            <View>
                <CustomText
                    fontFamily='ManropeBold'
                    variant='h0'>
                    Where do you leave?
                </CustomText>
                <CustomText
                    fontFamily='PoppinsRegular'
                    style={styles.desc}
                    variant='h6'>
                    Only the neighbourhood name will appear on your profile.
                </CustomText>
            </View>
            <View style={styles.mapContainer}>
                <MapView style={styles.map} />
            </View>
            <TextInput
                style={styles.input}
                placeholder='Enter your address, area or postcode'
            />
            <View style={{ alignItems: "flex-end" }}>
                <NextButton path={"/user/password" as RelativePathString} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 30,
        paddingVertical: 40,
        marginHorizontal: 10
    },
    mapContainer: {
        width: "90%",
        height: "50%",
        marginHorizontal: "auto"
    },
    map: {
        width: '100%',
        height: '100%',
    },
    desc: {
        opacity: 0.6
    },
    input: {
        width: "95%",
        marginHorizontal: "auto",
        borderBottomColor: "#111",
        borderBottomWidth: 1,
        fontFamily: "PoppinsMedium",
        fontSize: 12
    }
})
