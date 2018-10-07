import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

import { RecipeTile } from '../components';

export default class RecipeTileView extends Component {
    renderTiles() {
        let recipes = this.props.recipeListData;
        if(!recipes || recipes.length < 1) {
            return <Text>No Recipes</Text>
        } else {
            return recipes.map((recipe, idx) => {
                return (
                    <RecipeTile 
                        key={idx}
                        title={recipe.name} />
                )
            })
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.viewContainer}>
                    {this.renderTiles()}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingTop: 20
    }
});