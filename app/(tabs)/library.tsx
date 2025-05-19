import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AppHeader from '@/components/AppHeader'; 
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  { id: '1', type: 'Playlist', title: 'Playlist #1', subtitle: 'User #1' },
  { id: '2', type: 'Album', title: 'Album #4', subtitle: 'Artist #1' },
  { id: '3', type: 'Album', title: 'Album #5', subtitle: 'Artist #3' },
  { id: '4', type: 'Album', title: 'Album #7', subtitle: 'Artist #4' },
  { id: '5', type: 'Playlist', title: 'Playlist #4', subtitle: 'User #2' },
  { id: '6', type: 'Album', title: 'Album #2', subtitle: 'Artist #2' },
  { id: '7', type: 'Album', title: 'Album #9', subtitle: 'Artist #1' },
];


interface ListItem {
  id: string;
  type: string;
  title: string;
  subtitle: string;
}

const LibraryScreen = () => {
  const renderItem = ({ item }: { item: ListItem }) => (
    <View style={styles.listItem}>
      <View style={styles.imagePlaceholder}>
        <Ionicons name="image" size={40} color="#B0B0B0" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <AppHeader />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContentContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 10, // Ajuste o padding superior se necessário
    paddingBottom: 80, 
  },
  listContentContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  imagePlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});

export default LibraryScreen;