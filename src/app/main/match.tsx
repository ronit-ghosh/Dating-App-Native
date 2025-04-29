import { View, Image } from 'react-native'
import { UniStyles } from '@/styles/Styles'
import { matchStyles as styles } from '@/styles/match.style'
import Animated, { interpolate, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import MatchHeader from '@/components/screens/match/MatchHeader'
import MatchCard from '@/components/screens/match/MatchCard'

const HEADER_HEIGHT = 75

export default function Match() {
  const height = useSharedValue(HEADER_HEIGHT)

  const handleHeaderHeight = useAnimatedScrollHandler({
    onScroll: (event) => {
      const offsetY = event.contentOffset.y

      height.value = interpolate(
        offsetY,
        [0, 40],
        [HEADER_HEIGHT, 35],
        "clamp"
      )
    }
  })


  return (
    <View style={[UniStyles.container, styles.container]}>
      <MatchHeader height={height} />
      <Animated.ScrollView onScroll={handleHeaderHeight}>
        <MatchCard />
      </Animated.ScrollView>
    </View>
  )
}