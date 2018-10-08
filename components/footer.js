import  React, { Component } from 'react';
import { Link } from 'react-router-native';
import { StyleSheet, View, Image } from 'react-native';

class FooterComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Link style={styles.column} to="/"><Image style={styles.image} resizeMode='contain' source={require('../assets/book.png')}/></Link>
                <Link style={styles.column} to="/recipes"><Image style={styles.image} resizeMode='contain' source={require('../assets/recipe.png')} /></Link>
                <Link style={styles.column} to="/settings"><Image style={styles.image} resizeMode='contain' source={require('../assets/cog.png')} /></Link>
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