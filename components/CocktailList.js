import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import CocktailDetails from './CocktailDetails';
import { Ionicons } from '@expo/vector-icons';

// Composant qui affiche la liste des cocktails
export default function CocktailList({}) {

  // Crée un état pour stocker les cocktails récupérés depuis l'API
  const [cocktails, setCocktails] = useState([]);

  // Récupère la navigation pour pouvoir naviguer vers la page de détails d'un cocktail
  const navigation = useNavigation();

  // Récupère la liste des cocktails depuis l'API au chargement du composant
  useEffect(() => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then((response) => {
        // Met à jour l'état avec les cocktails récupérés
        setCocktails(response.data.drinks);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // Fonction qui affiche un élément de la liste des cocktails
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handlePress(item.idDrink)}>
        <View style={styles.itemContainer}>
          <Image style={styles.image} source={{ uri: item.strDrinkThumb }} />
          <Text style={styles.title}>{item.strDrink}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handlePress = (id) => {
    navigation.navigate('CocktailDetails', { id });
  }

  // Affiche la liste des cocktails
  return (
    <View style={styles.container}>
      <FlatList
        data={cocktails}
        keyExtractor={(item) => item.idDrink}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

// Définit le style du composant
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  itemContainer: {
    width: '48%',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    width:180,
    marginLeft:10, 
    borderRadius:15,
    
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // listContainer: {
  //   justifyContent: 'space-between',
  // },
});
