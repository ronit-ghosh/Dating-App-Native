import { View } from 'react-native'
import React from 'react'
import NextButton from '@/components/NextButton'
import { useRouter } from 'expo-router'

export default function Last() {
    const router = useRouter()

    return (
        <View>
            <NextButton onpressfn={() => {
                router.dismissAll()
                router.replace("/main/home")
            }} />
        </View>
    )
}