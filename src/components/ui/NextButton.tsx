import { ExternalPathString, RelativePathString, useRouter } from 'expo-router'
import CustomButton from './CustomButton'
import { StyleSheet, ViewStyle } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'

interface NextButtonTypes {
    path?: RelativePathString | ExternalPathString | "/"
    style?: ViewStyle
    onpressfn?: () => void
    disabled?: boolean
}

export default function NextButton(props: NextButtonTypes) {
    const router = useRouter()
    const { path, style, onpressfn, disabled } = props

    return (
        <CustomButton
            disabled={disabled ? true : false}
            onpress={
                onpressfn ? onpressfn :
                    () => router.push(path as RelativePathString)
            }
            isCircle
            style={[styles.btn, style!]}>
            <AntDesign name="arrowright" size={24} color="#eee" />
        </CustomButton>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 50,
        height: 50
    }
})
