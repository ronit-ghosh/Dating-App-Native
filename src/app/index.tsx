import Signin from '@/components/Signin'
import { View, StyleSheet } from 'react-native'
import Sexuality from './user/user-details/sexuality';
import DateGender from './user/user-details/date-gender';

export default function Index() {
    return (
        <View style={styles.container}>
            {/* <Signin /> */}
            <DateGender />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});