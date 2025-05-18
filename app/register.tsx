import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; // Assuming you are using Expo and want to use Ionicons

const RegisterScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleRegister = () => {
    // Add registration logic here
    console.log('Registering with:', { email, password, phone });
  };

  return (
    <View style={styles.container}>
      {/* Placeholder para Imagem */}
      <View style={styles.imagePlaceholder}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Substitua por sua imagem
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.welcomeText}>Welcome!</Text>

        {/* Campo de Email */}
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
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
          {/* Ícone de mostrar/ocultar senha */}
          <TouchableOpacity style={styles.icon} onPress={() => setShowPassword(!showPassword)}>
             <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="gray" />
          </TouchableOpacity>
        </View>


        {/* Campo de Telefone */}
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        {/* Botão de Registro */}
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

        {/* Link "Not a member? Register now" */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Not a member? </Text>
          <TouchableOpacity onPress={() => { /* Add navigation to login screen here */ }}>
            <Text style={styles.registerNowText}>Register now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2F7', // Cor de fundo clara
  },
  imagePlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
  },
  formContainer: {
    backgroundColor: '#fff', // Fundo branco para o formulário
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingRight: 10,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
  },
  icon: {
    padding: 10,
  },
  registerButton: {
    backgroundColor: '#007BFF', // Azul para o botão
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
    color: '#555',
  },
  registerNowText: {
    fontSize: 16,
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;