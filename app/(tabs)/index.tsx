import homeStyles from '@/assets/styles/screens/homeStyles';
import AppHeader from '@/components/AppHeader';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useTabBarScroll } from './_layout';

export default function HomeScreen() {
  
  const { handleScroll } = useTabBarScroll();
  
  const artists = [
    { key: '1', name: 'Artist #1' },
    { key: '2', name: 'Artist #2' },
    { key: '3', name: 'Artist #3' },
    { key: '4', name: 'Artist #4' }
  ];
  
  const albums = [{ key: 'a1' }, { key: 'a2' }, { key: 'a3' }, { key: 'a4' }];
  
  return (
    <View style={homeStyles.container}>
      <AppHeader />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={homeStyles.mainContent}>
          {/* Artist grid section */}
          <View style={homeStyles.section}>
            <Text style={homeStyles.sectionTitle}></Text>
            <FlatList
              data={artists}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.genreItem}>
                  <View style={styles.genreImageContainer}>
                    <Ionicons name="person" size={24} color="#B0B0B0" />
                  </View>
                  <Text style={styles.genreName}>{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.key}
              numColumns={2}
              scrollEnabled={false} // Disable scroll for grid
              contentContainerStyle={homeStyles.artistListContainer}
            />
          </View>

          {/* Recent albums section */}
          <View style={homeStyles.section}>
            <Text style={homeStyles.sectionTitle}>Recent albums from your artists</Text>
            <FlatList
              data={albums}
              renderItem={({ item }) => (
                <View style={homeStyles.albumItem}>
                  {/* Placeholder for album cover */}
                  <View style={homeStyles.albumImageContainer}>
                    <Ionicons name="image" size={50} color="#B0B0B0" />
                  </View>
                  <Text style={homeStyles.albumTitle}>Album #{item.key.replace('a', '')}</Text>
                  <Text style={homeStyles.albumArtist}>ARTIST #{item.key.replace('a', '')}</Text>
                </View>
              )}
              keyExtractor={(item) => item.key}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={homeStyles.albumListContainer}
            />
          </View>

          {/* Time to rewind section */}
          <View style={homeStyles.section}>
            <Text style={homeStyles.sectionTitle}>Time to rewind</Text>
            <FlatList
              data={albums} // Using the same placeholder data for now
              renderItem={({ item }) => (
                <View style={homeStyles.albumItem}>
                  {/* Placeholder for album cover */}
                  <View style={homeStyles.albumImageContainer}>
                     <Ionicons name="image" size={50} color="#B0B0B0" />
                  </View>
                  <Text style={homeStyles.albumTitle}>Album #{item.key.replace('a', '')}</Text>
                  <Text style={homeStyles.albumArtist}>ARTIST #{item.key.replace('a', '')}</Text>
                </View>
              )}
              keyExtractor={(item) => item.key + '_rewind'} // Unique key for this list
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={homeStyles.albumListContainer}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

// Estilos para os cards de gêneros/artistas
const styles = StyleSheet.create({
  genreItem: {
    alignItems: 'center',
    backgroundColor: '#F0F7FF',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  genreImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#DEEAFF',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genreName: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
});