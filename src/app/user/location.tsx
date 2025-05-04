import { View, TextInput, Alert } from 'react-native';
import MapView, { Marker, MapPressEvent, Region } from 'react-native-maps';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import CustomText from '@/components/ui/CustomText';
import NextButton from '@/components/ui/NextButton';
import { locationStyles as styles } from '@/styles/location.styles';
import { UniStyles } from '@/styles/Styles';
import { RelativePathString } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUserStore } from '@/store/create-user';

export default function LocationScreen() {
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const { setLat, setLng } = useUserStore()
    const [region, setRegion] = useState<Region | null>(null);
    const [geoData, setGeoData] = useState<Location.LocationGeocodedAddress>()

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permission denied', 'Allow Lume to use your location to continue.');
                return;
            }

            let loc = await Location.getCurrentPositionAsync({});

            const coords = {
                latitude: loc.coords.latitude,
                longitude: loc.coords.longitude
            };
            setLocation(coords);
            setLng(coords.longitude)
            setLat(coords.latitude)
            setRegion({
                ...coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            });
        })();
    }, []);

    const handleMapPress = async (e: MapPressEvent) => {
        const coords = e.nativeEvent.coordinate;
        setLocation(coords);
        setLng(coords.longitude)
        setLat(coords.latitude)
        const geoData: Location.LocationGeocodedAddress[] = await Location.reverseGeocodeAsync({
            latitude: coords.latitude,
            longitude: coords.longitude
        })

        setGeoData(geoData[0])
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={UniStyles.container}>
                <View>
                    <CustomText fontFamily='ManropeBold' variant='h0'>
                        Where do you live?
                    </CustomText>
                    <CustomText fontFamily='PoppinsRegular' style={styles.desc} variant='h6'>
                        Only the neighbourhood name will appear on your profile.
                    </CustomText>
                </View>
                <View style={styles.mapContainer}>
                    {region && (
                        <MapView
                            style={styles.map}
                            initialRegion={region}
                            onPress={handleMapPress}
                        >
                            {location && (
                                <Marker
                                    draggable
                                    coordinate={location}
                                    onDragEnd={e => setLocation(e.nativeEvent.coordinate)}
                                />
                            )}
                        </MapView>
                    )}
                </View>

                <TextInput
                    style={styles.input}
                    placeholder='Enter your address, area or postcode'
                    defaultValue={geoData && `${geoData.city}, ${geoData.district}, ${geoData.postalCode}`}
                />

                <View style={{ alignItems: "flex-end" }}>
                    <NextButton
                        path={"/user/password" as RelativePathString}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
