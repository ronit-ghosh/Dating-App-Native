import { View, StyleSheet } from 'react-native'
import Home from './main/home';
import Signup from '@/components/screens/signup/Signup';

export default function Index() {
    return (
        <View style={styles.container}>
            <Signup />
            {/* <Home/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});