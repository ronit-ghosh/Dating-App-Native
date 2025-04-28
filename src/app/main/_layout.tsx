import { Stack } from 'expo-router'

export default function UserDetailsLayout() {
    return <Stack screenOptions={{
        headerShown: false,
        contentStyle: {
            backgroundColor: "#fff"
        }
    }} />
}