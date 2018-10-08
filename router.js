import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';

import { FooterComponent } from './components';

import BooksView from './views/booksView';
import RecipesView from './views/recipesView';
import RecipeView from './views/recipeView';
import SettingsView from './views/settingsView';
import NewRecipeForm from './views/newRecipeView';

export default class AppRouter extends Component {
    render() {
        return (
            <NativeRouter style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={styles.header}></View>
                    <View style={styles.body}>
                        <Route exact path="/" component={BooksView} />
                        <Route path="/recipes" component={RecipesView} />
                        <Route path="/settings" component={SettingsView} />
                        <Route path="/new-recipe" component={NewRecipeForm} />
                    </View>
                    <View style={styles.footer}>
                        <FooterComponent />
                    </View>
                </View>
            </NativeRouter>
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
  });