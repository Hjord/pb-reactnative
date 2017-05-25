import React from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';
import MainPage from './app/pages/main';
import DetailsPage from './app/pages/details';
import {StackNavigator} from 'react-navigation';

const DasApp = StackNavigator({
    Main: { screen: MainPage },
    Details: { screen: DetailsPage },
});

AppRegistry.registerComponent('pbReactNative', () => DasApp);
