import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import booksData from "../components/json/books.json";

const BooksDetail = props => {
    let { books/*renderItem傳遞的變數名稱*/ } = props;
    return (
            <View style={styles.containerStyle}>
                <Image
                    style={styles.imageStyle}
                    source={{uri: books/*注意 這裡是renderItem傳遞的變數名稱，所有json陣列的資料都是用renderItem的變數名稱*/.image}}
                />
                <View style={styles.textContainerStyle}>
                    <Text style={styles.titleTextStyle}>{/*注意*/books.title}</Text>
                    <Text style={styles.artistTextStyle}>{/*注意*/books.artist}</Text>
                    <Text style={styles.contentTextStyle}>{books.content}</Text>
                    <View style={styles.loadingStyle}></View>
                    <Text style={styles.loadingTextStyle}>{books.loading}</Text>
                    <Image
                        style={styles.readImageStyle}
                        source={{uri: books.read_image}}
                    />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: "row",
        justifyContent: "flex-start",
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
        paddingBottom: 20,
        backgroundColor: "#F5F5F5"
    },
    imageStyle:{
        height: 220,
        width: 130,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#ddd",
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginLeft: 20,
        marginRight: 5,
        marginTop: 20,
        marginBottom: 5,
    },
    contentStyle: {
        flexDirection: "column",
        marginLeft: 15,
    },
    textContainerStyle: {
        marginTop: 40,
        marginLeft: 20,
    },
    titleTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    artistTextStyle: {
        marginTop: 15,
        marginBottom: 15,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#808080'
    },
    contentTextStyle: {
        width: 200,
        fontSize: 12,
        color: "#808080"
    },
    loadingStyle: {
        borderBottomWidth: 4,
        borderBottomColor: "#ddd",
        paddingBottom: 20,
        backgroundColor: "#F5F5F5"
    },
    loadingTextStyle: {
        paddingTop: 20,
        width: 200,
        fontSize: 12,
        color: "#808080"
    },
    readImageStyle: {
        width: 90,
        height: 25,
    }
})

export default BooksDetail;