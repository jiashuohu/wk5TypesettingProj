import React from 'react';
import { StyleSheet, Text, View ,FlatList,Image} from 'react-native';
import Header from "../components/Header";
import BooksDetail from "../components/BooksDetail"/*import進去的排版設定元件(component)*/
import booksData from "../components/json/books.json";/*import進去的jason檔案*/
import Bottom from "../components/Bottom";
import drawercontents from "./json/drawercontent.json"

const DrawerScreen = () => {
    return (
        <View style={{flex: 1,width: 340}}>
            <View style={styles.personalContainerStyle}>
                <View>
                    <Image
                        style={styles.personalImageStyle}
                        source={require('./Asset/img_user_photo.png')}
                    />
                    <Text style={styles.nameTextStyle}>{drawercontents[0].title}</Text>
                    <Text style={styles.emailTextStyle}>{drawercontents[0].email}</Text>
                </View>
                <Image
                    style={styles.arrowIconStyle}
                    source={{uri: drawercontents[0].arrow_icon}}
                />
            </View>
            <View style={styles.buttonContainerStyle}>
                <View style={styles.allButtonContainerStyle}>
                    <Image
                        style={styles.buttonImageStyle}
                        source={{uri:drawercontents[0].home_icon}}
                    />
                    <Text style={styles.buttonTextStyle}>Home</Text>
                </View>
                <View style={styles.allButtonContainerStyle}>
                    <Image
                        style={styles.buttonImageStyle}
                        source={{uri:drawercontents[0].books_icon}}
                    />
                    <Text style={styles.buttonTextStyle}>My Book</Text>
                </View>
                <View style={styles.allButtonContainerStyle}>
                    <Image
                        style={styles.buttonImageStyle}
                        source={{uri:drawercontents[0].favorite_icon}}
                    />
                    <Text style={styles.buttonTextStyle}>Favorites</Text>
                </View>
                <View style={styles.allButtonContainerStyle}>
                    <Image
                        style={styles.buttonImageStyle}
                        source={{uri:drawercontents[0].setting_icon}}
                    />
                    <Text style={styles.buttonTextStyle}>Settings</Text>
                </View>
                <View style={styles.allButtonContainerStyle}>
                    <Image
                        style={styles.buttonImageStyle}
                        source={{uri:drawercontents[0].about_icon}}
                    />
                    <Text style={styles.buttonTextStyle}>About us</Text>
                </View>
            </View>
        </View>
    );
};

const styles=StyleSheet.create({
    personalContainerStyle: {
        height: 200,
        backgroundColor: "#00b49f",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    personalImageStyle: {
        marginTop: 40,
        marginLeft: 10,
        height: 80,
        width: 80,
    },
    nameTextStyle: {
        marginTop: 10,
        marginLeft: 10,
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    emailTextStyle: {
        marginLeft: 10,
        color: "#FFF",
        fontSize: 18,
    },
    arrowIconStyle: {
        marginTop: 140,
        marginRight: 20,
        height: 30,
        width:30,
    },
    buttonContainerStyle: {
        backgroundColor: "#F5F5F5",
        height: 600,
    },
    allButtonContainerStyle:{
        marginTop: 10,
        flexDirection: "row",
    },
    buttonImageStyle: {
        marginTop: 20,
        marginLeft: 20,
        height: 50,
        width:50,
    },
    buttonTextStyle: {
        marginTop: 35,
        marginLeft: 25,
        fontSize: 20,
        color: "#808080",
        fontWeight: "bold",
    }
})
export default DrawerScreen;