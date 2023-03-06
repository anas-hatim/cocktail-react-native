import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // TODO: handle sign in logic
  };

  return (
    <ImageBackground source={require('../assets/fond.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.dashboard}>
          <TouchableOpacity style={styles.dashboardItem}>
            <Text style={styles.dashboardItemText}>Profil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dashboardItem}>
            <Text style={styles.dashboardItemText}>Favoris</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dashboardItem}>
            <Text style={styles.dashboardItemText}>Drogue Dur</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <Text style={styles.title}>Se connecter</Text>
          <TextInput
            style={styles.input}
            placeholder="Adresse e-mail"
            onChangeText={setEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Connexion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  dashboard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dashboardItem: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
    flex: 1,
    margin: 5,
  },
  dashboardItemText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#0066cc',
    borderRadius: 15,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
