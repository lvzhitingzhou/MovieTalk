/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    ListView,
    Image
} from 'react-native';

import MovieList from './app/Component/MovieList'

export default class MovieTalk extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MovieList/>
        );
    }
}


AppRegistry.registerComponent('MovieTalk', () => MovieTalk);
