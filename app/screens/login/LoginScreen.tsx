import styles from '@/assets/styles/screens/loginStyles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();

  const handleLogin = () => {
    console.log('Logging in with:', { email, password });
    router.push('/')
    // Add actual login logic here
  };

  const navigateToRegister = () => {
    router.push('/screens/register/RegisterScreen');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
            <View style={styles.imagePlaceholder}>
                <Image
                source={require('@/assets/images/logo-app.png')}
                style={styles.image}
                resizeMode="contain"
                />
            </View>
            <Text style={styles.welcomeText}>Welcome!</Text>
        
            <View style={styles.inputContainer}>
                {/* Campo de Email */}
                <TextInput
                style={styles.input}
                placeholder="Email Address"
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
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
                </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>Não tem uma conta?</Text>
                <TouchableOpacity onPress={navigateToRegister}>
                    <Text style={styles.registerNowText}> Se registre agora!</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;