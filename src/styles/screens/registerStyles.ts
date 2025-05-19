import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f2f5', // Light background color
  },
  imagePlaceholder: {
    width: '100%',
    height: 200, // Adjust height as needed
    backgroundColor: '#e0e0e0', // Placeholder background color
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  placeholderBox: {
    width: 80,
    height: 80,
    backgroundColor: '#cccccc', // Lighter placeholder box color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5, // Optional: add some border radius
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    alignSelf: 'flex-start', // Align to the left
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#dcdcdc', // Light border color
    borderWidth: 1,
    borderRadius: 8, // More rounded corners
    paddingHorizontal: 15,
    marginBottom: 15, // Increased spacing
    backgroundColor: '#ffffff', // White background
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderColor: '#dcdcdc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15, // Increased spacing
    backgroundColor: '#ffffff',
  },
  passwordInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff', // Blue button color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8, // More rounded corners
    marginTop: 10, // Adjusted margin
  },
  registerButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
    color: '#333333', // Darker text color
  },
  registerNowText: {
    fontSize: 16,
    color: '#007bff', // Blue link color
    fontWeight: 'bold',
  },
});

export default styles;