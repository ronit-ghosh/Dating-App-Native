import NextButton from '@/components/ui/NextButton';
import CustomText from '@/components/ui/CustomText';
import { RelativePathString } from 'expo-router';
import { View, TextInput } from 'react-native'
import MapView from 'react-native-maps';
import { locationStyles as styles } from '@/styles/location.styles';
import { UniStyles } from '@/styles/Styles';

export default function Location() {
    return (
        <View style={UniStyles.container}>
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