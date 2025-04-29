import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function UserDetailsLayout() {
    return (
        <>
            <StatusBar
                backgroundColor='#282828'
                style='light'
            />
            <Stack screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: "#fff"
                }
            }} />
        </>
    )
}