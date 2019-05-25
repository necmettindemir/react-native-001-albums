/**
 * @format
 */

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);

//-------------------------

//import lib

import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


//create a comp
const App = () => {

    return (
        <View style={{ flex: 1 }}>
            <Header headetText="Albums" />
            <AlbumList />
        </View>
    );
};


//render it to the device
AppRegistry.registerComponent('prj001_albums', () => App);

