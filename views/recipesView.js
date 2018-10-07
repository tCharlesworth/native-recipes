import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import RecipeListView from './recipesListView';
import RecipeTileView from './recipesTileView';

import { GetRecipes, GetSettings } from '../utils/store';

export default class RecipesView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        }
    }
    componentDidMount() {
        this.setState({
            recipes: GetRecipes()
        });
    }
    renderView() {
        let {preferredRecipeStyle} = GetSettings()
        if(preferredRecipeStyle == 'tiles') {
            return <RecipeTileView recipeListData={this.state.recipes} />
        } else {
            return <RecipeListView recipeListData={this.state.recipes} />
        }
    }
    renderNewButton() {
        return (
            <View style={styles.newButton}>
                <Text style={styles.newButtonText}>+</Text>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.viewContainer}>
                {this.renderView()}
                {this.renderNewButton()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    newButton: {
        backgroundColor: 'orange',
        width: 70,
        height: 70,
        borderRadius: 40,
        justifyContent: 'center',
        position: 'absolute',
        right: 20,
        bottom: 20
    },
    newButtonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold'
    },
    viewContainer: {
        height: '100%'
    }
})