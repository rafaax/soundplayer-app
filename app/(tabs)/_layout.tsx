// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import React, { useRef } from 'react';
import { Platform, Animated, ViewStyle, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';

// Criar um valor animado global para controlar a visibilidade da barra de tabs
const tabBarVisibility = new Animated.Value(1);

// Função para esconder a barra de tabs
export function hideTabBar() {
  Animated.timing(tabBarVisibility, {
    toValue: 0,
    duration: 200,
    useNativeDriver: true,
  }).start();
}

// Função para mostrar a barra de tabs
export function showTabBar() {
  Animated.timing(tabBarVisibility, {
    toValue: 1,
    duration: 200,
    useNativeDriver: true,
  }).start();
}

// Hook para usar em componentes com scroll - mais sensível ao scroll para cima
export function useTabBarScroll(threshold = 20, upThreshold = 5) {
  const lastScrollY = useRef(0);
  const isBarHidden = useRef(false);
  
  const handleScroll = (event: any) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;
    
    // Se estiver no topo, sempre mostrar a barra
    if (currentScrollY <= 0) {
      showTabBar();
      lastScrollY.current = 0;
      isBarHidden.current = false;
      return;
    }
    
    // Detectar direção do scroll
    const isScrollingDown = currentScrollY > lastScrollY.current;
    const isScrollingUp = currentScrollY < lastScrollY.current;
    
    // Scrolling down - esconder apenas se a diferença for maior que o threshold
    if (isScrollingDown && (currentScrollY - lastScrollY.current > threshold)) {
      hideTabBar();
      isBarHidden.current = true;
    } 
    // Scrolling up - mostrar com um threshold menor para ser mais sensível
    else if (isScrollingUp && isBarHidden.current && (lastScrollY.current - currentScrollY > upThreshold)) {
      showTabBar();
      isBarHidden.current = false;
    }
    
    lastScrollY.current = currentScrollY;
  };
  
  return { handleScroll };
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const backgroundColor = '#FFFFFF'; // Cor de fundo da barra de tabs

  // Criar o estilo animado para a barra de tabs
  const tabBarStyle = {
    ...Platform.select({
      ios: {
        position: 'absolute',
        elevation: 0,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
        zIndex: 1,
        backgroundColor,
      },
      default: {
        backgroundColor,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
        elevation: 0,
      },
    }),
    transform: [
      {
        translateY: tabBarVisibility.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 0],
        }),
      },
    ],
  } as ViewStyle;

  return (
    <>
      <View 
        style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          height: 100, // Altura suficiente para cobrir a área da tab bar
          backgroundColor: '#F5F5F5', // Mesma cor de fundo da tela
          zIndex: -1 // Garantir que fique atrás de tudo
        }} 
      />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#6200EE',
          tabBarInactiveTintColor: '#888',
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: () => <View style={{ flex: 1, backgroundColor }} />,
          tabBarStyle: tabBarStyle,
        }}
      >
        <Tabs.Screen
          name="index"
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
          name="explore"
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
          name="library"
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
    </>
  );
}