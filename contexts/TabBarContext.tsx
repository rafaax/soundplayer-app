// contexts/TabBarContext.tsx
import React, { createContext, useContext } from 'react';
import { useSharedValue, SharedValue } from 'react-native-reanimated';

type TabBarContextType = {
  visible: SharedValue<number>;
};

const TabBarContext = createContext<TabBarContextType | null>(null);

export function TabBarProvider({ children }: { children: React.ReactNode }) {
  const visible = useSharedValue(1); // 1 = visível, 0 = escondido
  
  return (
    <TabBarContext.Provider value={{ visible }}>
      {children}
    </TabBarContext.Provider>
  );
}

export function useTabBar() {
  const context = useContext(TabBarContext);
  if (!context) {
    throw new Error('useTabBar must be used within a TabBarProvider');
  }
  return context;
}