import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SetupView from './views/setupView';
import RecipesView from './views/recipesView';
import RecipeView from './views/recipeView';

import { FooterComponent } from './components';
import { GetRecipes } from './utils/store';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.body} >
          <RecipeView recipeData={GetRecipes()[0]}/>
          {/* <RecipesView /> */}
        </View>
        <View style={styles.footer}>
          <FooterComponent />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 30,
    backgroundColor: 'powderblue'
  },
  body: {
    flex: 1
  },
  footer: {
    height: 80
  }
})