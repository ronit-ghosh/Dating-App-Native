import { UniStyles } from '@/styles/Styles'
import { View } from 'react-native'
import { homeStyles as styles } from "@/styles/home.styles"
import ImageCard from '@/components/ImageCard'
import PromptCard from '@/components/PromptCard'
import InfoCard, { InfoTypes } from '@/components/InfoCard'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeHeader from '@/components/HomeHeader'
import Animated, { interpolate, useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated"

const HEADER_HEIGHT = 70

export default function Home() {

  const height = useSharedValue(HEADER_HEIGHT)
  const translateY = useSharedValue(0)
  const paddingTop = useSharedValue(0)
  const opacity = useSharedValue(1)

  const handleHeightAnimation = useAnimatedScrollHandler({
    onScroll: (event) => {
      const offsetY = event.contentOffset.y
      height.value = interpolate(
        offsetY,
        [0, 50],
        [HEADER_HEIGHT, 40],
        "clamp"
      )

      opacity.value = interpolate(
        offsetY,
        [0, 50],
        [1, 0],
        "clamp"
      )

      paddingTop.value = interpolate(
        offsetY,
        [0, 50],
        [0, 10],
        "clamp"
      )
    }
  })

  const InfoArr: InfoTypes[] = [{
    icon: <FontAwesome5 name="graduation-cap" size={26} color="black" />,
    text: 'University of Loda'
  }, {
    icon: <AntDesign name="search1" size={26} color="black" />,
    text: 'Figuring out my dating goals'
  }]

  const topbarInfo: InfoTypes[] = [{
    icon: <Ionicons name="magnet-outline" size={24} color="black" />,
    text: 'Bisexual'
  }, {
    icon: <Ionicons name="magnet-outline" size={24} color="black" />,
    text: 'Bisexual'
  },]

  return (
    <>
      <HomeHeader
        height={height}
        translateY={translateY}
        opacity={opacity}
        paddingTop={paddingTop}
      />
      <View style={[UniStyles.container, styles.container]}>
        <Animated.ScrollView
          onScroll={handleHeightAnimation}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <ImageCard
            source={require("@/assets/images/bear.png")}
          />
          <PromptCard
            title='First round is on me if'
            desc='you bring the best dad jokes to the table'
          />

          <InfoCard
            topbarInfo={topbarInfo}
            items={InfoArr}
          />
        </Animated.ScrollView>
      </View>
    </>
  )
}