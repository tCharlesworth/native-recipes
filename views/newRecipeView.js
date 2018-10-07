import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default class NewRecipeView extends Component {
    render() {
        return (
            <View>
                <Text>New Recipe Form</Text>
                <View>
                    <Text>Recipe Title</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>Ingredients</Text>
                </View>
            </View>
        )
    }
}