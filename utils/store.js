import DATA from './data.json';
import SETTINGS from './settings.json';

var userData = {};
var recipes = DATA.recipes;


export const GetRecipes = () => {
    return recipes;
}

export const GetSettings = () => {
    return SETTINGS;
}