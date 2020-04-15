import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

const Header = () => {
    return(
        <View style={styles.headerStyle}>
            <Image 
                style={styles.buttonImageStyle}
                source={require('./Asset/btn_navbar_mobile.png')}
            />
            <Text style={styles.textStyle}>My Book</Text>
            <Image 
                style={styles.buttonImageStyle}
                source={require('./Asset/btn_search.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: "row",
        backgroundColor: "#00b49f",
        justifyContent: "space-between",
        alignItems: "center",
        height: 90,
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
        elevation: 2
    },
    textStyle: {
        fontSize: 25,
        color: "#FFFFFF"
    },
    buttonImageStyle: {
        height: 50,
        width: 50,
        color: "#FFFFFF"
    },
});

export default Header;