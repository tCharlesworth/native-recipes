import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class RecipeListItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    text: {
        fontSize: 18
    }
});

export { RecipeListItem };