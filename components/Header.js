import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Header = () => {
    return(
        <View style={styles.headerStyle}>
            <Text style={styles.textStyle}>My Book</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#00b49f",
        justifyContent: "center",
        alignItems: "center",
        height: 90,
        paddingTop: 30,
        elevation: 2
    },
    textStyle: {
        fontSize: 25,
        color: "#FFFFFF"
    },
});

export default Header;