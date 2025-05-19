import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router'; // Import useRouter

const RegisterScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter(); // Initialize useRouter

  const handleRegister = () => {
    console.log('Registering with:', { email, password, phone });
    // Add registration logic here
  };

  const navigateToLogin = () => {
    router.push('/login'); // Navigate to the /login route
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {/* Placeholder para Imagem */}
          <View style={styles.imagePlaceholder}>
            <Image source={require('../assets/images/logo-app.png')} resizeMode="contain" />
            <View style={styles.placeholderBox} />
          </View>

          <Text style={styles.welcomeText}>Welcome!</Text>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            {/* Campo de Email */}
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="#8e8e93"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            {/* Campo de Senha */}
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                placeholderTextColor="#8e8e93"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="#8e8e93" />
              </TouchableOpacity>
            </View>

            {/* Campo de Telefone */}
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              placeholderTextColor="#8e8e93"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
          </View>

          {/* Botão de Registro */}
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>

          {/* Link "Not a member? Register now" */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Not a member? </Text>
            <TouchableOpacity onPress={navigateToLogin}> {/* Call navigateToLogin */}
              <Text style={styles.registerNowText}>Register now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

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

export default RegisterScreen;