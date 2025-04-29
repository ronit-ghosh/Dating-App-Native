import { View } from 'react-native'
import { homeStyles as styles } from '@/styles/home.styles'
import CustomText from '../../ui/CustomText'
import { UniStyles } from '@/styles/Styles'

export default function PromptCard({ title, desc }: {
    title: string
    desc: string
}) {
    return (
        <View style={[UniStyles.card, styles.promptCard]}>
            <CustomText
                variant='h5'
                fontFamily='PoppinsRegular'>
                {title}
            </CustomText>
            <CustomText
            style={{flexShrink: 1}}
                numberOfLines={8}
                variant='h2'
                fontFamily='ManropeBold'>
                {desc}
            </CustomText>
        </View>
    )
}