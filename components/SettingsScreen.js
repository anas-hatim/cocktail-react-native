import React, { useState } from 'react'; // Importation de React et de useState depuis la bibliothèque react
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native'; // Importation de différents composants depuis la bibliothèque react-native

export default function SignInScreen() { // Définition d'un composant fonctionnel SignInScreen qui sera exporté en tant que composant par défaut
  const [email, setEmail] = useState(''); // Définition d'un état local email et setEmail pour modifier cet état. La valeur initiale est une chaîne vide.
  const [password, setPassword] = useState(''); // Définition d'un état local password et setPassword pour modifier cet état. La valeur initiale est une chaîne vide.

  const handleSignIn = () => { // Fonction qui sera appelée lorsqu'on cliquera sur le bouton de connexion
    // TODO: handle sign in logic (logique de connexion à venir)
  };

  return ( // Renvoie le contenu JSX qui sera rendu à l'écran
    <ImageBackground source={require('../assets/fond.jpg')} style={styles.backgroundImage}>
      {/* Utilisation du composant ImageBackground pour définir une image de fond */}
      <View style={styles.container}>
        {/* Utilisation du composant View pour définir une vue */}
        <View style={styles.dashboard}>
          {/* Utilisation du composant View pour définir une vue */}
          <TouchableOpacity style={styles.dashboardItem}>
            {/* Utilisation du composant TouchableOpacity pour définir un bouton qui peut être pressé */}
            <Text style={styles.dashboardItemText}>Profil</Text>
            {/* Utilisation du composant Text pour définir un texte */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.dashboardItem}>
            {/* Utilisation du composant TouchableOpacity pour définir un bouton qui peut être pressé */}
            <Text style={styles.dashboardItemText}>Favoris</Text>
            {/* Utilisation du composant Text pour définir un texte */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.dashboardItem}>
            {/* Utilisation du composant TouchableOpacity pour définir un bouton qui peut être pressé */}
            <Text style={styles.dashboardItemText}>Drogue Dur</Text>
            {/* Utilisation du composant Text pour définir un texte */}
          </TouchableOpacity>
        </View>
     
        <View style={styles.form}>
          {/* Utilisation du composant View pour définir une vue */}
          <Text style={styles.title}>Se connecter</Text>
          {/* Utilisation du composant Text pour définir un texte */}
          <TextInput
            style={styles.input}
            placeholder="Adresse e-mail"
            onChangeText={setEmail}
            value={email}
          />
          {/* Utilisation du composant TextInput pour définir un champ de texte où l'utilisateur peut entrer une adresse e-mail */}
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
