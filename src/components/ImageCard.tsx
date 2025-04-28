import { View, Image, ImageSourcePropType } from 'react-native'
import { homeStyles as styles } from '@/styles/home.styles'

export default function ImageCard({ source }: {
    source: ImageSourcePropType
}) {
    return (
        <View style={styles.card}>
            <Image
                source={source}
                style={styles.img}
            />
        </View>
    )
}