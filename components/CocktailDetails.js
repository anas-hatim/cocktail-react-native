import React, { useState, useEffect } from 'react'; // Importe les modules nécessaires pour la création d'un composant React
import { Text, View, StyleSheet, Image } from 'react-native'; // Importe des composants React Native utiles pour la création d'une interface utilisateur
import axios from 'axios'; // Importe la librairie axios pour effectuer des requêtes HTTP
import { Ionicons } from '@expo/vector-icons'; // Importe les icones Ionicons

const CocktailDetails = ({ route }) => { // Crée un composant fonctionnel CocktailDetails prenant en argument un objet route
  const [cocktail, setCocktail] = useState(null); // Initialise le state cocktail à null et la fonction setCocktail pour mettre à jour ce state

  useEffect(() => { // Utilise l'hook useEffect pour exécuter une fonction lorsque le composant est monté
    const { id } = route.params; // Récupère l'identifiant de la boisson depuis les paramètres de la route
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`) // Effectue une requête HTTP GET pour récupérer les informations de la boisson à partir de l'API de CocktailDB
      .then((response) => {
        setCocktail(response.data.drinks[0]); // Met à jour le state cocktail avec les informations de la boisson récupérée
      })
      .catch((error) => {
        console.log(error); // Affiche une erreur dans la console en cas de problème lors de la requête HTTP
      });
  }, []); // La fonction est exécutée une seule fois au montage du composant, donc la dépendance est vide

  if (!cocktail) { // Si le state cocktail n'est pas initialisé, retourne null pour ne rien afficher
    return null;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: cocktail.strDrinkThumb }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{cocktail.strDrink}</Text>
        <View style={styles.ingredientsContainer}>
          <Text style={styles.subtitle}>Ingrédients :</Text>
          <View style={styles.ingredientsList}>
            {Array.from(Array(15), (_, i) => i + 1).map((index) => {
              const ingredient = cocktail[`strIngredient${index}`];
              const measure = cocktail[`strMeasure${index}`];

              return ingredient ? (
                <Text key={index} style={styles.ingredient}>
                  {`${measure ? measure + ' de ' : ''}${ingredient}`}
                </Text>
              ) : null;
            })}
          </View>
        </View>
        <View style={styles.instructionsContainer}>
          <Text style={styles.subtitle}>Instructions :</Text>
          <Text style={styles.instructions}>{cocktail.strInstructions}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F6F7',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#9B4DCA',
  },
  ingredientsContainer: {
    width: '100%',
  },
  ingredientsList: {
    marginTop: 5,
  },
  ingredient: {
    fontSize: 18,
    marginBottom: 5,
    color: '#4A4A4A',
  },
  instructionsContainer: {
    width: '100%',
  },
  instructions: {
    fontSize: 18,
    textAlign: 'justify',
    color: '#4A4A4A',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#9B4DCA',
  },
});

export default CocktailDetails;
