import  React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

class FooterComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.column}><Image style={styles.image} resizeMode='contain' source={require('../assets/book.png')}/></View>
                <View style={styles.column}><Image style={styles.image} resizeMode='contain' source={require('../assets/recipe.png')} /></View>
                <View style={styles.column}><Image style={styles.image} resizeMode='contain' source={require('../assets/cog.png')} /></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: 'grey',
        borderTopWidth: 2
    },
    column: {
        flex: 1,
        alignItems: 'center',
        height: 80
    },
    image: {
        flex: 1
    }
})

export { FooterComponent };