import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  mainContent: {
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
   icon: {
    width: 24,
    height: 24,
    tintColor: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 16, // Added padding for consistency
  },
  artistListContainer: {
    marginBottom: 20,
  },
  artistItem: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
 flexDirection: 'row',
  },
  artistImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artistImagePlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
  },
  artistName: {
    fontSize: 14,
    color: '#333', fontWeight: 'bold',
  },
  albumListContainer: {
    marginBottom: 20,
  },
  albumItem: {
    width: 150,
    marginRight: 15,
    marginBottom: 10,
  },
  albumImageContainer: {
    width: '100%',
   height: 150, // Adjust as needed
    backgroundColor: '#E0E0E0', // Placeholder background
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
   marginBottom: 5,
  },
  albumTitle: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  albumArtist: {
    fontSize: 12,
    color: '#666', marginTop: 2,
  },
  albumCoverPlaceholder: {
    width: '100%',
    height: 150,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
  },
  placeholderImage: {
    width: 50,
    height: 50,
    tintColor: '#B0B0B0',
  },
});

export default homeStyles;