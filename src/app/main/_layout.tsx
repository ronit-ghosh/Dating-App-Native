import { Tabs } from 'expo-router'
import HomeSvg from '@/components/Icons/HomeSvg';
import HeartSvg from '@/components/Icons/HeartSvg';
import ChatSvg from '@/components/Icons/ChatSvg';
import ProfileSvg from '@/components/Icons/ProfileSvg';
import { Pressable } from 'react-native';

export default function UserDetailsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#282828",
                    padding: 0,
                    height: 40,
                },
                tabBarActiveTintColor: "#eee",
                tabBarShowLabel: false,
                tabBarButton: (props) => <Pressable
                    {...props}
                    android_disableSound={true}
                    android_ripple={{ borderless: false, radius: 0 }}
                />
            }}>
            <Tabs.Screen
                name='home'
                options={{
                    tabBarIcon: ({ color }) => <HomeSvg color={color} />
                }}
            />
            <Tabs.Screen
                name='match'
                options={{
                    tabBarIcon: ({ color }) => <HeartSvg color={color} />
                }}
            />
            <Tabs.Screen
                name='chat'
                options={{
                    tabBarIcon: ({ color }) => <ChatSvg color={color} />
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    tabBarIcon: ({ color }) => <ProfileSvg color={color} />
                }}
            />
        </Tabs>
    )
}