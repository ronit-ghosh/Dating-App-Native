import { View, StyleSheet, Image } from 'react-native'
import { useRouter } from 'expo-router';
import { useEffect } from "react"
import { getToken } from '@/utils/auth-token';

export default function Index() {
    const router = useRouter()
    useEffect(() => {
        getToken().then(res => {
            if (res) {
                router.replace("/main/home")
            } else {
                router.replace("/user/user-details/more-details")
            }
        })
    }, [])

    return (
        <View style={[styles.container]}>
            <Image
                style={{ objectFit: "contain", width: 160, height: 160 }}
                source={require("@/assets/images/lume-dark.png")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});