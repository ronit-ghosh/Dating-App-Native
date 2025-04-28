import { Colors } from '@/utils/Constants'
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import CustomText from './CustomText'

export default function CustomButton({ children, style, onpress, isCircle, textColor }: {
    children: string | React.ReactNode
    style?: ViewStyle | ViewStyle[]
    onpress?: () => void
    isCircle?: boolean
    textColor?: string
}) {
    return (
        <TouchableOpacity
            onPress={onpress}
            activeOpacity={0.95}
            style={[styles.btn, style, isCircle && {
                paddingVertical: 0,
                paddingHorizontal: 0
            }]}>
            <CustomText style={{
                color: textColor ? textColor : Colors.background
            }} variant='h5'>
                {children}
            </CustomText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        paddingVertical: 16,
        paddingHorizontal: 10,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    }
})
