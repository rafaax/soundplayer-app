import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6200EE', // A shade of purple for active tabs
        tabBarInactiveTintColor: '#888', // A light grey for inactive tabs
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            backgroundColor: '#fff', // White background for the tab bar
            borderTopWidth: 0, // Remove the default top border
            elevation: 0, // Remove shadow on Android
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        // @ts-ignore - This is a valid route for the Home screen
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}
      />
      <Tabs.Screen
        name="explore" // Assuming 'explore' is the correct file name for the explore screen
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}
      />
 <Tabs.Screen
 name="library" // You'll need to create a 'library.tsx' file for this tab
 options={{
 title: 'Library',
 tabBarIcon: ({ color }) => <IconSymbol size={28} name="book.closed.fill" color={color} />,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
 }}
 />
    </Tabs>
  );
}
