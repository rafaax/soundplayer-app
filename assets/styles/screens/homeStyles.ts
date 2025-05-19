import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 10, // Keep vertical padding if needed
    paddingBottom: 80, // Placeholder for tab bar height
  },
  mainContent: {
  }, // Remove horizontal padding
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
    marginBottom: 20, // Consistent vertical spacing between sections
  },
  artistListContainer: {
    marginBottom: 20,
    // Removed horizontal margin/padding to allow items to spread
    paddingHorizontal: 0, 
  },
  artistItem: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
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
    paddingHorizontal: 0, // Ensure no horizontal padding on the list container
    marginBottom: 20,
  },
  albumItem: {
    width: 160, // Adjusted width
    marginRight: 10, // Adjusted spacing between items
    marginBottom: 10,
  },
  albumImageContainer: {
    width: '100%',
    height: 160, // Adjusted height to be square-like
    backgroundColor: '#E0E0E0', // Placeholder background
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
   marginBottom: 5,
  },
  albumTitle: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold', // Already bold
  },
  albumArtist: {
    fontSize: 12,
    color: '#666',
    marginTop: 2, // Already has margin top
  },
  albumCoverPlaceholder: {
    width: '100%',
    height: 160, // Match the container height
    backgroundColor: '#E0E0E0', // Match the container background
    justifyContent: 'center', // Center placeholder content
    borderRadius: 8,
  },
  placeholderImage: {
    width: 50,
    height: 50,
    tintColor: '#B0B0B0',
  },
});

export default homeStyles;