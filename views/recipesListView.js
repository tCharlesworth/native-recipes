import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import { RecipeListItem } from '../components';

export default class RecipeListView extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _renderItem(data) {
        let recipe = data.item
        return <RecipeListItem 
            title={recipe.name} />
    }
    _keyExtractor(item, idx) {
        return item.uid
    }
    _itemSeperator ({highlighted}) {
        return <View style={[styles.separator, highlighted && {marginLeft: 0}]} />
    }
    render() {
        return (
            <View>
                <FlatList
                    data={this.props.recipeListData}
                    extraData={this.state}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    ItemSeparatorComponent={this._itemSeperator} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    seperator: {
        backgroundColor: 'grey',
        height: 2
    }
});