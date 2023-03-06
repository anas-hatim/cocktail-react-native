import * as React from 'react';
import { Text, View,StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CocktailList from './components/CocktailList';
import SettingsScreen from './components/SettingsScreen';
import CocktailDetails from './components/CocktailDetails';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    
    <Tab.Navigator>
      <Tab.Screen name="Home" component={CocktailList} />
      <Tab.Screen name="Paramètres" component={SettingsScreen} />
    </Tab.Navigator>
    
  );
}

export default function App() {
  return (
    
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  
  );
}
 
const styles = StyleSheet.create({
  
});

