import homeStyles from '@/assets/styles/screens/homeStyles';
import AppHeader from '@/components/AppHeader';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { useTabBarScroll } from './_layout'; // Importar o hook do arquivo de layout

export default function HomeScreen() {
  // Usar o hook para controlar a visibilidade da tab bar
  const { handleScroll } = useTabBarScroll();
  
  const artists = [{ key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }];
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
                <View style={homeStyles.artistItem}>
                  {/* Placeholder for artist image */}
                  <View style={homeStyles.artistImageContainer}>
                     <Ionicons name="person" size={24} color="#B0B0B0" />
                  </View>
                  <Text style={homeStyles.artistName}>Artist #{item.key}</Text>
                </View>
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