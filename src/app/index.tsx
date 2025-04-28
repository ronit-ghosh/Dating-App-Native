import Signin from '@/components/Signin'
import { View, StyleSheet } from 'react-native'
import Sexuality from './user/user-details/sexuality';

export default function Index() {
    return (
        <View style={styles.container}>
            {/* <Signin /> */}
            <Sexuality />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});