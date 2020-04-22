import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,}
  from '@react-navigation/drawer';
// import Animated from 'react-native-reanimationed';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Tile} from 'react-native-elements';

import HomeScreen from "./components/HomeScreen";
import DrawerScreen from "./components/DrawerScreen";
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';
import BooksDetail from './components/BooksDetail';
import { color } from 'react-native-reanimated';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = ({navigation}) => {
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // headerShown: false
          title: 'My Book',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            color:'#fff'
          },
          headerStyle:{
            backgroundColor: "#00b49f"
          },
          headerLeft: () => (
            <View style={{marginLeft: 20}}>
              <Ionicons
                name={'ios-menu'}
                color={'#fff'}
                size={30}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 20}}>
              <Ionicons
                name={'ios-search'}
                color={'#fff'}
                size={30}
                // onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
        }}
      />
      {/* <Stack.Screen
        name="DrawerPage"
        component={DrawerScreen}
        options={({ route }) => ({
          title: 'drawer',
          headerStyle: {
            backgroundColor: '#4F9DEB',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        })}
      /> */}
    </Stack.Navigator>
  );
}

// const CustomDrawerAnimatedContent = ({ progress, ...rest}) => {
//   const translateX = Animated.interpolate(progress, {
//     inputRange: [0,1],
//     outputRange: [-100,0],
//   });

//   return(
//     <DrawerContentScrollView {...rest}>
//       <Animated.View style={{ transform: [{ translateX }] }}>
//         <DrawerItemList {...rest} />
//       </Animated.View>
//     </DrawerContentScrollView>
//   );
// }

const CustomDrawerContent = ({...rest}) => {
  return (
    <DrawerContentScrollView {...rest}>
      <Tile
        containerStyle={{ 
          height: 200 ,
          backgroundColor:'#00b49f',
          marginTop:-40,
          paddingTop:40,
        }}
        imageContainerStyle={{ 
          height:200 ,
          width:80 , 
          marginLeft:10,
          marginTop:15, 
        }}
        imageSrc={require('./components/Asset/img_user_photo.png')}
        // titleStyle={{ fontSize:1,fontWeight:'bold', color: '#fff' }}
        // featured
        // caption="GamexHCl"
        // caption="gdlab2017@gmail.com"
        // captionStyle={{ color: '#fff',marginTop:-50 }}
      >
        <View style={{ marginTop:-25,paddingBottom:10,flexDirection: 'row' }}>
          <View>
            <Text style={{ fontWeight: 'bold',color: '#fff', fontSize:20}}>GamexHCl</Text>
            <Text style={{ color: '#fff', fontSize:20}}>gdlab2017@gmail.com</Text>
          </View>
          <Image 
            style={{ height:40,width:40,marginLeft:40}}
            source={require('./components/Asset/btn_down_arrow.png')} 
          />
        </View>
      </Tile>
      <DrawerItemList {...rest} />
    </DrawerContentScrollView>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{width: 320 }}
        drawerContentOptions={{
          activeBackgroundColor: '#00b49f',
          activeTintColor:'#fff',
          itemStyle: { marginLeft: 0, marginRight: 0 },
          labelStyle: { fontSize: 20 },
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeStack} 
          options={
            {
              drawerIcon:({ tintColor }) =>(
                <Image
                  style={{height:50,width:50}}
                  source={require('./components/Asset/icon_drawer_home.png')}
                />
              ),
            }
          }
        />
        <Drawer.Screen 
          name="My Book" 
          component={HomeStack}
          options={
            {
              drawerIcon:({ tintColor }) =>(
                <Image
                  style={{height:50,width:50}}
                  source={require('./components/Asset/icon_drawer_mybook.png')}
                />
              ),
            }
          }
        />
        <Drawer.Screen 
          name="Favorites" 
          component={HomeStack}
          options={
            {
              drawerIcon:({ tintColor }) =>(
                <Image
                  style={{height:50,width:50}}
                  source={require('./components/Asset/icon_drawer_favorites.png')}
                />
              ),
            }
          }
           />
           <Drawer.Screen 
          name="Settings" 
          component={HomeStack}
          options={
            {
              drawerIcon:({ tintColor }) =>(
                <Image
                  style={{height:50,width:50}}
                  source={require('./components/Asset/icon_drawer_setting.png')}
                />
              ),
            }
          }
           />
            <Drawer.Screen 
          name="Aboutus" 
          component={HomeStack}
          options={
            {
              drawerIcon:({ tintColor }) =>(
                <Image
                  style={{height:50,width:50}}
                  source={require('./components/Asset/icon_drawer_aboutus.png')}
                />
              ),
            }
          }
           />
      </Drawer.Navigator>
      </NavigationContainer>
  );
}

export default App;