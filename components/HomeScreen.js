import React from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import Header from "../components/Header";
import BooksDetail from "../components/BooksDetail"/*import進去的排版設定元件(component)*/
import booksData from "../components/json/books.json";/*import進去的jason檔案*/
import Bottom from "../components/Bottom";

const HomeScreen = () => {
    return (
        <View style={{flex: 1}}>
            <Header />
            <FlatList
            data={booksData /*import進去的jason檔案*/}
            renderItem={({item}) => <BooksDetail/*import進去的排版設定元件(component)*/ books/*變數名稱*/={item} />}
            keyExtractor={item => item.title}
            />
            <Bottom />
        </View>
    );
};

export default HomeScreen;