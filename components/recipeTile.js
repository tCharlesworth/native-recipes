import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

class RecipeTile extends Component {
    renderImage() {
        if(this.props.image) {
            return <Image source={this.props.image} />
        } else {
            return null;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderImage()}
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'grey',
        borderWidth: 1,
        width: '40%'
    },
    text: {
        padding: 5
    }
});

export { RecipeTile };