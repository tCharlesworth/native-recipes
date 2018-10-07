import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default class RecipeView extends Component {
    convertUnits(unit, qty) {
        if(qty > 1) {
            return `${unit}s`;
        }
        return unit;
    }
    convertQty(qty) {
        if(qty == 0.33) {
            return '1/3';
        }
        if(qty == 0.5) {
            return '1/2';
        }
        if(!qty) {
            return '';
        }
        return qty;
    }
    renderIngredients() {
        let {ingredients} = this.props.recipeData;
        if(!ingredients || ingredients.length < 1) {
            return <Text>No Ingredients</Text>
        } else {
            return (
                <View style={styles.ingredientContainer}>
                    {
                        ingredients.map((ingredient, idx) => {
                        return (
                                <Text key={idx} style={styles.ingredientText}>{`${this.convertQty(ingredient.qty)} ${this.convertUnits(ingredient.uom, ingredient.qty)} ${ingredient.name}`}</Text>
                            );
                        })
                    }
                </View>
            )
        }
    }
    renderDirections() {
        let { directions } = this.props.recipeData;
        if(!directions || directions.length < 1) {
            return <Text>No Directions</Text>
        } else {
            return (
                <View style={styles.directionsContainer}>
                    {
                        directions.map((direction, idx) => {
                            return (
                                <Text key={idx} style={styles.directionText}>{direction.text}</Text>
                            );
                        })
                    }
                </View>
            )
        }
        return null;
    }
    render() {
        let {name} = this.props.recipeData;
        return (
            <ScrollView>
                <View>
                    <Text style={styles.titleText}>{name}</Text>
                    {this.renderIngredients()}
                    {this.renderDirections()}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 24,
        padding: 10
    },
    ingredientContainer: {
        padding: 10
    },
    ingredientText: {},
    directionsContainer: {
        padding: 10
    },
    directionText: {
        marginBottom: 5
    }
})