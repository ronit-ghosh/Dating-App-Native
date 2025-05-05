import { StyleSheet, View, Image } from 'react-native';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/utils/constants';
import { useRouter } from 'expo-router';
import CustomText from '@/components/ui/CustomText';
import { ExternalLink } from '@/components/helper/ExternalLink';
import CustomButton from '@/components/ui/CustomButton';

export default function Signup() {
    const videoSource = require("@/assets/videos/lume.mp4");
    const router = useRouter()
    return (
        <View style={styles.container}>
            <Video
                source={videoSource}
                style={styles.video}
                // @ts-ignore
                resizeMode="cover"
                shouldPlay
                isLooping
            />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)']}
                style={styles.gradient}
                locations={[0, 0.7, 1]}
            />
            <View style={styles.contentContainer}>
                <View style={styles.imgContainer}>
                    <Image
                        style={styles.img}
                        source={require("@/assets/images/lume-light.png")}
                    />
                    <CustomText
                        variant='h5'
                        style={styles.imgText}
                        fontFamily='PoppinsSemiBold'>
                        Designed to be simple.
                    </CustomText>
                </View>
                <View style={styles.btnContainer}>
                    <CustomText
                        fontFamily='PoppinsLight'
                        fontSize={11}
                        style={styles.terms}>
                        By tapping Sign in or Create account, you agree to our{" "}
                        <ExternalLink href='https://lume.ronitghosh.site/terms'>
                            Terms of Service.
                        </ExternalLink>
                        {" "}Learn how we process your data in our{" "}
                        <ExternalLink href='https://lume.ronitghosh.site/privacy-policy'>
                            Privacy Policy
                        </ExternalLink>
                        {" "}and{" "}
                        <ExternalLink href='https://lume.ronitghosh.site/cookies-policy'>
                            Cookies Policy.
                        </ExternalLink>
                    </CustomText>
                    <CustomButton
                        onpress={() => router.push('/user/email')}
                        style={styles.btn}>
                        Sign up with your email
                    </CustomButton>
                    <CustomButton
                        textColor='#eee'
                        onpress={() => router.push('/signin/signin-page')}
                        style={styles.btn2}>
                        Sign in
                    </CustomButton>
                    <CustomButton
                        textColor='#eee'
                        onpress={() => router.push('/main/home')}
                        style={styles.btn2}>
                        Home
                    </CustomButton>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        justifyContent: "flex-end",
        alignItems: "center",
        paddingVertical: 26
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        zIndex: 1,
    },
    text: {
        fontSize: 48,
        color: 'white',
        fontFamily: "Giarek"
    },
    contentContainer: {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80%"
    },
    btnContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        width: "90%",
        zIndex: 10
    },
    btn2: {
        width: "90%",
        zIndex: 10,
        backgroundColor: "transparent",
    },
    imgContainer: {
        width: "100%",
        height: 170,
        zIndex: 10,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        width: "50%",
        height: "50%",
        objectFit: "contain",
    },
    imgText: {
        marginTop: 5,
        color: "#eee"
    },
    terms: {
        color: Colors.background,
        zIndex: 10,
        marginHorizontal: 18,
        textAlign: "center",
        marginBottom: 10
    }
});