import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

    const [loaded, error] = useFonts({
        "ManropeBold": require("../assets/fonts/Manrope-Bold.ttf"),
        "ManropeLight": require("../assets/fonts/Manrope-Light.ttf"),
        "ManropeMedium": require("../assets/fonts/Manrope-Medium.ttf"),
        "ManropeRegular": require("../assets/fonts/Manrope-Regular.ttf"),
        "ManropeSemiBold": require("../assets/fonts/Manrope-SemiBold.ttf"),
        "PoppinsBold": require("../assets/fonts/Poppins-Bold.ttf"),
        "PoppinsLight": require("../assets/fonts/Poppins-Light.ttf"),
        "PoppinsMedium": require("../assets/fonts/Poppins-Medium.ttf"),
        "PoppinsRegular": require("../assets/fonts/Poppins-Regular.ttf"),
        "PoppinsSemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    })

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }

    return (
        <>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#282828"
            />
            <Stack screenOptions={{ headerShown: false }} />
        </>
    )
}
