import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 10,
    paddingBottom: 80,
  },
  mainContent: {
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
  },
  artistListContainer: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  artistItem: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10,
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
    marginRight: 10,
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
    width: 160,
    marginRight: 10,
    marginBottom: 10,
  },
  albumImageContainer: {
    width: '100%',
    height: 160, 
    backgroundColor: '#E0E0E0',
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
    color: '#666',
    marginTop: 2,
  },
  albumCoverPlaceholder: {
    width: '100%',
    height: 160,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    borderRadius: 8,
  },
  placeholderImage: {
    width: 50,
    height: 50,
    tintColor: '#B0B0B0',
  },
});

export default homeStyles;