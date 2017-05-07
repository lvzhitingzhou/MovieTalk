"use strict";

import {StyleSheet} from 'react-native'

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'rgba(100,53,201,0.1)',
        paddingBottom: 6,
        paddingTop: 6,
        flex: 1,
    },
    itemText: {
        fontSize: 16,
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        color: 'rgba(0,0,0,0.8)',
        lineHeight: 26,
    },
    image: {
        height: 138,
        width: 99,
        margin: 6,
    },
    itemHeader: {
        fontSize: 18,
        fontFamily: 'Helvetica Neue',
        fontWeight: '300',
        color: '#6435c9',
        marginBottom: 6,
    },
    itemContent: {
        flex: 2,
        marginLeft: 13,
        marginTop: 6,
    },
    itemImage: {
        flex: 1,
        marginLeft: 10,
        marginTop: 6
    },
    itemMeta: {
        fontSize: 16,
        color: 'rgba(0,0,0,0.6)',
        marginBottom: 6,
    },
    redText: {
        color: '#db2828',
        fontSize: 15,
    },
    loading: {
        justifyContent: 'center',
        alignItems:'center',
        flex: 1
    }
});

export {styles as default}