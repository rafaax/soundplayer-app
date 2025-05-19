// hooks/useScrollTabBar.ts
import { useTabBar } from '@/contexts/TabBarContext';
import { useRef } from 'react';
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

export function useScrollTabBar(threshold = 20) {
  const { visible } = useTabBar();
  const lastScrollY = useRef(0);
  
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;
    
    if (currentScrollY <= 0) {
      // No topo, mostrar a tab bar
      visible.value = 1;
      lastScrollY.current = 0;
      return;
    }
    
    // Determinar direção do scroll
    if (currentScrollY > lastScrollY.current + threshold) {
      // Scrolling down - esconder
      visible.value = 0;
    } else if (currentScrollY < lastScrollY.current - threshold) {
      // Scrolling up - mostrar
      visible.value = 1;
    }
    
    lastScrollY.current = currentScrollY;
  };
  
  return { handleScroll };
}