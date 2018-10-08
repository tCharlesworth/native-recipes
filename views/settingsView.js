import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import { GetSettings } from '../utils/store';

export default class SettingsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preferredRecipeStyle: 'tiles'
        };
    }
    componentDidMount() {
        const SETTINGS = GetSettings();
        this.setState({
            preferredRecipeStyle: SETTINGS.preferredRecipeStyle
        });
    }
    _handlePreferredRecipeStyleChange() {
        if(this.state.preferredRecipeStyle == 'list') {
            
        }
    }
    render() {
        return (
            <View style={styles.viewContainer}>
                <Text style={styles.sectionTitle}>Settings</Text>
                <View style={styles.row}>
                    <TouchableHighlight onPress={this._handlePreferredRecipeStyleChange.bind(this)}>
                        <View>
                            <Text style={styles.label}>Preferred List Style</Text>
                            <Text style={styles.value}>{this.state.preferredRecipeStyle}</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewContainer: {
    },
    sectionTitle: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10
    },
    row: {
        borderColor: 'grey',
        borderBottomWidth: 1,
        padding: 20
    },
    label: {
        fontWeight: 'bold',
    },
    value: {
        color: 'grey'
    }
});