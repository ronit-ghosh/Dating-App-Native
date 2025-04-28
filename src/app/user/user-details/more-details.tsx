import CustomButton from '@/components/ui/CustomButton'
import CustomText from '@/components/ui/CustomText'
import { UniStyles } from '@/styles/Styles'
import { useRouter } from 'expo-router'
import { View, Image, StyleSheet } from 'react-native'

export default function MoreDetails() {
  const router = useRouter()

  return (
    <View style={UniStyles.container}>
      <CustomText
        variant='h0'>
        The more you share,{"\n"}
        the better your{"\n"}
        matches will be.
      </CustomText>
      <Image
        style={styles.img}
        source={require("@/assets/images/bear.png")}
      />
      <CustomButton onpress={() => {
        router.dismissAll()
        router.replace("/user/user-details/gender")
      }}>
        Add more details
      </CustomButton>
    </View >
  )
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: "70%",
    objectFit: "cover"
  }
})
