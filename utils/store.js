import DATA from './data.json';
import SETTINGS from './settings.json';

var userData = {};
var recipes = DATA.recipes;


export const GetRecipes = () => {
    return recipes;
};

export const GetSettings = () => {
    return SETTINGS;
};

export const SetSingleSetting = (prop, value) => {
    let newSettings = {...SETTINGS, [prop]: value };
    SETTINGS = newSettings; // ???
};


function WriteSettingsFile() {

}