/**
 * Created by liumin on 2017/5/7.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    ListView,
    Image,
    ActivityIndicator,
    TouchableHighlight
} from 'react-native';

import styles from '../style/main'

const REQUEST_URL = 'http://api.douban.com/v2/movie/in_theaters';

export default class USBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            loaded: false
        };

        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    movies: this.state.movies.cloneWithRows(responseData.subjects),
                    loaded: true
                })
            })
            // .done()
            .catch(error => {
                console.log(error);
                this.setState({
                    loaded: true
                })
            });
    }

    renderMovieList(movie) {
        return (
        <TouchableHighlight underlayColor='#cdeda1' onPress={() => {
            console.log(`《${movie.title} 被点了`);
        }}>
            <View style={styles.item}>
                <View style={styles.itemImage}>
                    <Image source={{uri: movie.images.large}}
                           style={styles.image}/>
                </View>
                <View style={styles.itemContent}>
                    <Text style={styles.itemHeader}>
                        {movie.title}
                    </Text>
                    <Text style={styles.itemMeta}>
                        {movie.original_title}
                    </Text>
                    <Text style={styles.redText}>
                        {movie.rating.average}
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
        )
    }

    render() {
        if (!this.state.loaded) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator color='#a1c471' size='large'/>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <ListView dataSource={this.state.movies}
                          renderRow={this.renderMovieList}/>
            </View>
        );
    }
}
