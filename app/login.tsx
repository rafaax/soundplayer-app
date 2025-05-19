import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = () => {
    console.log('Logging in with:', { email, password });
  };

  const handleForgotPassword = () => {
    console.log('Forgot password');
  };

  const handleGoogleLogin = () => {
    console.log('Login with Google');
  };

  const handleAppleLogin = () => {
    console.log('Login with Apple');
  };

  const handleFacebookLogin = () => {
    console.log('Login with Facebook');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          {/* Placeholder for Image */}
          <View style={styles.imagePlaceholder}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }} // Replace with your image source
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.welcomeText}>Welcome back!</Text>

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            {/* Email Field */}
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#888"
            />

            {/* Password Field */}
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#888"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Forgot Password Link */}
          <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          {/* Or continue with */}
          <View style={styles.socialLoginTextContainer}>
            <Text style={styles.socialLoginText}>Or continue with</Text>
          </View>

          {/* Social Login Buttons */}
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
                <FontAwesome name="google" size={24} color="#4285F4" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={handleAppleLogin}>
                <FontAwesome name="apple" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={handleFacebookLogin}>
                <FontAwesome name="facebook" size={24} color="#1877F2" />
            </TouchableOpacity>
          </View>


          {/* Not a member? Register now link */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Not a member? </Text>
            <TouchableOpacity onPress={() => { /* Add navigation to register screen here */ }}>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff', // White background for the form section
  },
  imagePlaceholder: {
    width: '100%',
    height: 200, // Adjust height as needed
    backgroundColor: '#E0F2F7', // Light blue background for the image area
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomLeftRadius: 30, // Rounded bottom corners
    borderBottomRightRadius: 30,
  },
  image: {
    width: 100, // Adjust size as needed
    height: 100,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start', // Align to the left
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 50,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end', // Align to the right
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#007BFF', // Blue color
    fontSize: 14,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF', // Blue color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialLoginTextContainer: {
    marginVertical: 20,
  },
  socialLoginText: {
    fontSize: 16,
    color: '#888',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 30,
  },
  socialButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25, // Make it a circle
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  registerText: {
    fontSize: 16,
    color: '#888',
  },
  registerNowText: {
    fontSize: 16,
    color: '#007BFF', // Blue color
    fontWeight: 'bold',
  },
});

export default LoginScreen;