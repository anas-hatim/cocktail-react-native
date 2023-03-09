import * as React from 'react';
import { Text, View,StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CocktailList from './components/CocktailList';
import SettingsScreen from './components/SettingsScreen';
import CocktailDetails from './components/CocktailDetails';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function CocktailListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CocktailList" component={CocktailList} options={{ title: 'Cocktails' }} />
      <Stack.Screen name="CocktailDetails" component={CocktailDetails} options={{ title: 'Details du cocktail' }} />
      <Stack.Screen name="Paramètres" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={CocktailListStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
