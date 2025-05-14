import { View, Image } from 'react-native';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import CustomText from '@/components/ui/CustomText';
import { ExternalLink } from '@/components/helper/ExternalLink';
import CustomButton from '@/components/ui/CustomButton';
import { signupStyles as styles } from '@/styles/signup.styles';

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
                        onpress={() => router.push('/user/user-details/more-details')}
                        style={styles.btn2}>
                        Home
                    </CustomButton>
                </View>
            </View>
        </View>
    );
}