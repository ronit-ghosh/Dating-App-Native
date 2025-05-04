import { Colors } from '@/utils/Constants'
import { Pressable, StyleSheet, ViewStyle } from 'react-native'
import CustomText from './CustomText'

interface CustomButtonTypes {
    children: string | React.ReactNode
    style?: ViewStyle | ViewStyle[]
    onpress?: () => void
    isCircle?: boolean
    textColor?: string
    variant?: 'h0' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8';
    disabled?: boolean
}

export default function CustomButton({
    children,
    style,
    onpress,
    isCircle,
    textColor,
    variant,
    disabled
}: CustomButtonTypes
) {
    return (
        <Pressable
            disabled={disabled ? true : false}
            android_disableSound
            onPress={onpress}
            style={[styles.btn, style, isCircle && {
                paddingVertical: 0,
                paddingHorizontal: 0
            }, disabled &&{
                opacity: 0.85
            }]}>
            <CustomText fontFamily='PoppinsMedium' style={{
                color: textColor ? textColor : Colors.background
            }} variant={variant ? variant : 'h5'}>
                {children}
            </CustomText>
        </Pressable >
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
