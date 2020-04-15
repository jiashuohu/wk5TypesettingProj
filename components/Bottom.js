import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Bottom = () => {
    return(
        <View style={styles.headerStyle}>
            <View style={styles.buttonIconContainerStyle}>
                <Image
                    style={styles.buttonImageStyle}
                    source={require('./Asset/icon_bottomnav_home.png')}
                />
                <Text style={styles.buttonTextStyle}>Home</Text>
            </View>
            <View style={styles.buttonIconContainerStyle}>
                <Image
                    style={styles.buttonImageStyle}
                    source={require('./Asset/icon_bottomnav_mybook_selected.png')}
                />
                <Text style={styles.buttonTextStyle}>My Book</Text>
            </View>
            <View style={styles.buttonIconContainerStyle}>
                <Image
                    style={styles.buttonImageStyle}
                    source={require('./Asset/icon_drawer_favorites.png')}
                />
                <Text style={styles.buttonTextStyle}>Favorites</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        flexDirection: 'row',
        backgroundColor: "#FFFFFF",
        justifyContent: "space-between",
        alignItems: "flex-start",
        paddingTop: 5,
        paddingLeft: 60,
        paddingRight: 60,
        height: 70,
        elevation: 2
    },
    buttonImageStyle: {
        height: 40,
        width: 40,
        color: "#FFFFFF"
    },
    buttonIconContainerStyle: {
        alignItems: "center",
        justifyContent: "center",
    },
    buttonTextStyle: {
        color: "#808080",
    }
});

export default Bottom;