import CustomButton from '@/components/ui/CustomButton'
import CustomText from '@/components/ui/CustomText'
import { useRouter } from 'expo-router'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function MoreDetails() {
  const router = useRouter()

  return (
    <View style={styles.container}>
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
      <CustomButton onpress={() => router.push("/user/user-details/gender")}>
        Add more details
      </CustomButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    marginHorizontal: 10
  },
  img: {
    width: "100%",
    height: "70%",
    margin: "auto",
    objectFit: "cover"
  }
})
