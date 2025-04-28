import { View } from 'react-native'
import CustomText from './ui/CustomText'
import { homeStyles as styles } from '@/styles/home.styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import Animated, { SharedValue } from "react-native-reanimated"

export default function HomeHeader({ height, translateY, paddingTop, opacity }: {
    height: SharedValue<number>
    translateY: SharedValue<number>
    paddingTop: SharedValue<number>
    opacity: SharedValue<number>
}) {
    return (
        <Animated.View style={[styles.header, {
            height,
            transform: [{ translateY }],
            paddingTop
        }]}>
            <View>
                    <CustomText
                        fontFamily='ManropeBold'
                        variant='h2'>
                        Ronit
                    </CustomText>
                <Animated.View style={{ opacity }}>
                    <CustomText
                        fontFamily='PoppinsLight'
                        variant='h7'>
                        He/Him
                    </CustomText>
                </Animated.View>
            </View>
            <View style={styles.headerIcons}>
                <Animated.View style={{ opacity }}>
                    <Ionicons name="return-down-back-outline" size={20} color="black" />
                </Animated.View>
                <Entypo name="dots-three-horizontal" size={20} color="black" />
            </View>
        </Animated.View>
    )
}