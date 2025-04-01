import { Tabs } from 'expo-router'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '@/constants/theme'

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.gray,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                elevation: 0,
                backgroundColor: COLORS.background,
                borderTopWidth: 0,
                height: 60,
            }
        }}
    >
        <Tabs.Screen 
            name="index"
            options={{
                title: 'Home',
                tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
        }}
        />
        <Tabs.Screen name="bookmarks" options={{ 
            title: 'Booksmarks',
            tabBarIcon: ({ color }) => <Ionicons name="bookmark" size={24} color={color} />
        }}
        />
        <Tabs.Screen name="create" options={{ 
            title: 'Create',
            tabBarIcon: ({ color }) => <Ionicons name="add-circle" size={24} color={COLORS.primary} />            
        }} 
        />
        <Tabs.Screen name="notifications" options={{ 
            title: 'Notifications', 
            tabBarIcon: ({ color }) => <Ionicons name="notifications" size={24} color={color} /> 
        }}
        />
        <Tabs.Screen name="profile" options={{ 
            title: 'Profile',
            tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />
        }} 
        />
    </Tabs>
  )
}