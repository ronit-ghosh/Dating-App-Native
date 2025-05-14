import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function SignupLayout() {
    return (
        <>
            <StatusBar
                translucent
                style='inverted'
            />
            <Stack screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: "#fff"
                },
            }} />
        </>
    )
}