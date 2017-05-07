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
    ActivityIndicator
} from 'react-native';

import styles from '../style/main'

const REQUEST_URL = 'http://api.douban.com/v2/movie/in_theaters';

export default class MovieList extends Component {
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
            .done();
        // .catch(error => {
        //     console.log(error);
        // });
    }

    renderMovieList(movie) {
        return (
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
        )
    }

    render() {
        if (!this.state.loaded) {
            return (
                <View style={styles.loading}>
                    <Text >
                        加载中。。。
                    </Text>
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
