import CustomText from '@/components/ui/CustomText'
import { UniStyles } from '@/styles/Styles'
import { View, Image } from 'react-native'
import { matchStyles as styles } from '@/styles/match.style'

export default function MatchCard() {
  return (
    <View style={[UniStyles.card, styles.card]}>
      <CustomText
      fontFamily='PoppinsSemiBold'
        style={styles.cardTitle}
        variant='h2'>
        Ronit
      </CustomText>
      <Image
        style={styles.img}
        source={require("@/assets/images/bear.png")}
      />
    </View>
  )
}