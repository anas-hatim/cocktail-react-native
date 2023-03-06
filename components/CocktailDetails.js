import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const CocktailDetails = ({ route }) => {
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const { cocktailId } = route.params;
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
      .then(response => {
        setCocktail(response.data.drinks[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!cocktail) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: cocktail.strDrinkThumb }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{cocktail.strDrink}</Text>
        <Text style={styles.subtitle}>Ingredients:</Text>
        <View style={styles.ingredientsList}>
          {Array.from(Array(15), (_, i) => i + 1).map(index => {
            const ingredient = cocktail[`strIngredient${index}`];
            const measure = cocktail[`strMeasure${index}`];
            if (!ingredient) {
              return null;
            }
            return (
              <Text key={index} style={styles.ingredient}>
                {`${measure ? measure + ' of ' : ''}${ingredient}`}
              </Text>
            );
          })}
        </View>
        <Text style={styles.subtitle}>Instructions:</Text>
        <Text style={styles.instructions}>{cocktail.strInstructions}</Text>
      </View>
    </View>
  );
};


