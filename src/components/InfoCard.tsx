import { ScrollView, View } from 'react-native'
import CustomText from './ui/CustomText'
import { homeStyles as styles } from '@/styles/home.styles'

export interface InfoTypes {
    icon: React.ReactNode
    text: string
}

export default function InfoCard({ items, topbarInfo }: {
    items: InfoTypes[]
    topbarInfo: InfoTypes[]
}) {
    return (
        <View style={[styles.card, styles.infoCard]}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                style={styles.topbarContainer}>
                {
                    topbarInfo.map((info, i) => {
                        return (
                            <View key={i} style={[
                                i === topbarInfo.length - 1 ?
                                    { borderRightWidth: 0 } :
                                    { borderRightWidth: 1 },
                                styles.topbarItems
                            ]}>
                                {info.icon}
                                <CustomText
                                    style={styles.topbarText}
                                    fontFamily='PoppinsMedium'
                                    variant='h5'>{info.text}</CustomText>
                            </View>
                        )
                    })
                }
            </ScrollView>
            {
                items.map((item, i) => {
                    return (
                        <View key={i} style={styles.infoCardItem}>
                            {item.icon}
                            <CustomText
                                variant='h5'
                                fontFamily='PoppinsMedium'
                                style={styles.infoText}>
                                {item.text}
                            </CustomText>
                        </View>
                    )
                })
            }
        </View>
    )
}