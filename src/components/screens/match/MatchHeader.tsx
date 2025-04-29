import CustomText from '@/components/ui/CustomText';
import { matchStyles as styles } from '@/styles/match.style'
import Animated, { SharedValue } from 'react-native-reanimated';

export default function MatchHeader({ height }: {
    height: SharedValue<number>
}) {
    return (
        <Animated.View style={[styles.header, { height }]}>
            <CustomText
                fontFamily='ManropeBold'
                variant='h1'>
                Likes You
            </CustomText>
        </Animated.View>
    )
}