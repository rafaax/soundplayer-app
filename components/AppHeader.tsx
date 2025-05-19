import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Or 'react-native-vector-icons/Ionicons' depending on your setup

const AppHeader: React.FC = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Ionicons name="notifications-outline" size={24} color="#333" />
      </View>
      <View style={styles.headerRight}>
        <View style={styles.userIconContainer}>
          <Ionicons name="person-outline" size={24} color="#333" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerLeft: {
    // Add any specific styling for the left side if needed
  },
  headerRight: {
    // Add any specific styling for the right side if needed
  },
  userIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#B0B0B0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppHeader;