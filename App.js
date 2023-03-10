import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importer les icônes de Ionicons
import { Fontisto } from '@expo/vector-icons';

import CocktailList from './components/CocktailList';
import SettingsScreen from './components/SettingsScreen';
import CocktailDetails from './components/CocktailDetails';

// Créer une pile de navigation qui contient les écrans de l'application
const Stack = createStackNavigator();
function CocktailListStack() {
  return (
    <Stack.Navigator>
      {/* Affiche la liste de cocktails */}
      <Stack.Screen name="CocktailList" component={CocktailList} options={{ title: 'Cocktails' }} />
      {/* Affiche les détails d'un cocktail sélectionné */}
      <Stack.Screen name="CocktailDetails" component={CocktailDetails} options={{ title: 'Details du cocktail' }} />
    </Stack.Navigator>
  );
}

// Créer un onglet qui affiche la pile de navigation CocktailListStack
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={CocktailListStack}
          options={{
            // Définir l'icône pour l'onglet Home en utilisant Ionicons
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Paramètres"
          component={SettingsScreen}
          options={{
            // Définir l'icône pour l'onglet Paramètres en utilisant Ionicons
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="laboratory" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Crée un objet StyleSheet vide qui peut être utilisé pour définir des styles
const styles = StyleSheet.create({});
