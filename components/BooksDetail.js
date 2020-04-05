import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import books from "../components/json/books";

const BooksDetail = ({ books, navigation }) => {
    return (
    )
}

const styles = StyleSheet.create({
    cardContainerStyle: {
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 15,
    },
    imageStyle: {
        flexDirection: "row",
        justifyContent: "flex-start",
        borderWidth: 1,
        borderRadius: 2,
        border: "#ddd",
        shadowColor: "#000",
        shadowOffset: {width: 0,height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 5,
    },
    contentStyle: {
        flexDirection: "column",
        marginLeft: 15,
    }
})