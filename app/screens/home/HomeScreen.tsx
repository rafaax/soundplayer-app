import styles from '@/assets/styles/screens/homeStyles';
import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import AppHeader from '@/components/AppHeader';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainContent}>
        {/* Header section */}
        <AppHeader />
        {/* Artist grid section */}
 <View style={styles.section}>
 <Text style={styles.sectionTitle}>Followed Artists</Text>
 {/* Placeholder data for FlatList */}
 <FlatList
            data={[1, 2, 3, 4]} // Replace with actual artist data later
            renderItem={({ item }) => (
 <View style={styles.artistItem}>
 {/* Placeholder for artist image */}
 <View style={styles.artistImagePlaceholder} />
 <Text style={styles.artistName}>Artist #{item}</Text>
 </View>
            )}
 horizontal
 />
 </View>
 {/* Recent albums section */}
        <View style={styles.section}>
 <Text style={styles.sectionTitle}>Recent albums from your artists</Text>
 {/* Placeholder data for FlatList */}
 <FlatList
            data={[1, 2]} // Replace with actual album data later
            renderItem={({ item }) => (
 <View style={styles.albumItem}>
 {/* Placeholder for album cover */}
 <View style={styles.albumCoverPlaceholder} />
 <Text style={styles.albumTitle}>Album #{item}</Text>
 <Text style={styles.albumArtist}>ARTIST #{item}</Text>
 </View>
            )}
 horizontal
 />
 </View>
        {/* Time to rewind section */}
        <View style={styles.section}>
 <Text style={styles.sectionTitle}>Time to rewind</Text>
 {/* Placeholder data for FlatList */}
 <FlatList
            data={[1, 2]} // Replace with actual album data later
            renderItem={({ item }) => (
 <View style={styles.albumItem}>
 {/* Placeholder for album cover */}
 <View style={styles.albumCoverPlaceholder} />
 </View>
            )}
 horizontal
 />
 </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;