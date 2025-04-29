import { View, Image, ImageSourcePropType } from 'react-native'
import { homeStyles as styles } from '@/styles/home.styles'
import { UniStyles } from '@/styles/Styles'

export default function ImageCard({ source }: {
    source: ImageSourcePropType
}) {
    return (
        <View style={UniStyles.card}>
            <Image
                source={source}
                style={styles.img}
            />
        </View>
    )
}