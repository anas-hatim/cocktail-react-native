import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';




export default function CocktailList() {
  const [cocktails, setCocktails] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then(response => {
        setCocktails(response.data.drinks);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log('ICIIIIIIIII')
  console.log(response.data.drinks)

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('CocktailDetails', { id: item.idDrink })}>
    <Image style={styles.image} source={{ uri: item.strDrinkThumb }}/>
    <Text style={styles.title}>{item.strDrink}</Text>
    </TouchableOpacity>
    );

  return (
    <View style={styles.container}>
      <FlatList
        data={cocktails}
        renderItem={renderItem}
        keyExtractor={item => item.idDrink}
        numColumns={2}
      />
    </View>
  );
}

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
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
