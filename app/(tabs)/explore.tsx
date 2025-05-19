import React from 'react';
import { View, Text, FlatList, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTabBarScroll } from './_layout'; // Importar o hook do arquivo de layout
import AppHeader from '@/components/AppHeader';
import homeStyles from '@/assets/styles/screens/homeStyles';

export default function ExploreScreen() {
  const { handleScroll } = useTabBarScroll();
  
  // Dados de exemplo para gêneros
  const genres = [
    { key: 'g1', name: 'Pop' },
    { key: 'g2', name: 'Rock' },
    { key: 'g3', name: 'Hip Hop' },
    { key: 'g4', name: 'Electronic' },
  ];
  
  // Dados de exemplo para artistas recomendados
  const recommendedArtists = [
    { key: 'r1', name: 'Artist #1' },
    { key: 'r2', name: 'Artist #2' },
    { key: 'r3', name: 'Artist #3' },
    { key: 'r4', name: 'Artist #4' },
  ];
  
  // Dados de exemplo para playlists
  const playlists = [
    { key: 'p1', name: 'Playlist #1', creator: 'User #1' },
    { key: 'p2', name: 'Playlist #2', creator: 'User #2' },
    { key: 'p3', name: 'Playlist #3', creator: 'User #3' },
    { key: 'p4', name: 'Playlist #4', creator: 'User #4' },
  ];
  
  return (
    <View style={homeStyles.container}>
      <AppHeader />
      
      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search a song, artist, album or playlist."
          placeholderTextColor="#888"
        />
      </View>
      
      <ScrollView 
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={homeStyles.mainContent}>
          {/* Seção de recomendações */}
          <View style={homeStyles.section}>
            <Text style={homeStyles.sectionTitle}>Recommendations based on your experience</Text>
            
            {/* Grid de gêneros */}
            <FlatList
              data={genres}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.genreItem}>
                  <View style={styles.genreImageContainer}>
                    <Ionicons name="musical-notes" size={24} color="#B0B0B0" />
                  </View>
                  <Text style={styles.genreName}>{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.key}
              numColumns={2}
              scrollEnabled={false}
              contentContainerStyle={homeStyles.artistListContainer}
            />
          </View>

          {/* Seção de artistas recomendados */}
          <View style={homeStyles.section}>
            <Text style={homeStyles.sectionTitle}>Artists you might like</Text>
            <FlatList
              data={recommendedArtists}
              renderItem={({ item }) => (
                <View style={styles.recommendedArtistItem}>
                  <View style={styles.artistImageContainer}>
                    <Ionicons name="person" size={40} color="#B0B0B0" />
                  </View>
                  <Text style={styles.artistName}>{item.name}</Text>
                </View>
              )}
              keyExtractor={(item) => item.key}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={homeStyles.albumListContainer}
            />
          </View>

          {/* Seção de playlists populares */}
          <View style={homeStyles.section}>
            <Text style={homeStyles.sectionTitle}>Popular playlists</Text>
            <FlatList
              data={playlists}
              renderItem={({ item }) => (
                <View style={homeStyles.albumItem}>
                  <View style={homeStyles.albumImageContainer}>
                     <Ionicons name="list" size={50} color="#B0B0B0" />
                  </View>
                  <Text style={homeStyles.albumTitle}>{item.name}</Text>
                  <Text style={homeStyles.albumArtist}>By {item.creator}</Text>
                </View>
              )}
              keyExtractor={(item) => item.key}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={homeStyles.albumListContainer}
            />
          </View>
          
          {/* Seção de novos lançamentos */}
          <View style={homeStyles.section}>
            <Text style={homeStyles.sectionTitle}>New releases</Text>
            <FlatList
              data={playlists} // Usando os mesmos dados como exemplo
              renderItem={({ item }) => (
                <View style={homeStyles.albumItem}>
                  <View style={homeStyles.albumImageContainer}>
                     <Ionicons name="disc" size={50} color="#B0B0B0" />
                  </View>
                  <Text style={homeStyles.albumTitle}>New Album #{item.key.replace('p', '')}</Text>
                  <Text style={homeStyles.albumArtist}>ARTIST #{item.key.replace('p', '')}</Text>
                </View>
              )}
              keyExtractor={(item) => item.key + '_new'}
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

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 10,
    paddingHorizontal: 12,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#333',
  },
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
  recommendedArtistItem: {
    width: 120,
    marginRight: 10,
    alignItems: 'center',
  },
  artistImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  artistName: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});