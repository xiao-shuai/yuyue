import React,{Component} from 'react'
import { 
    createBottomTabNavigator,
     createAppContainer,
     createStackNavigator 
    } from 'react-navigation';
 
 import  Ionicons  from 'react-native-vector-icons/Ionicons' 
 import  {Me,Home,Homexq} from  '../pages/all'
 import {abc} from  '../styles/Met'

 const DiBu=createBottomTabNavigator(
    {
        Home:Home,
        Me:Me,
        
      },
      {
       initialRouteName: 'Home',
       defaultNavigationOptions:({ navigation })=>({
           tabBarIcon:({focused, horizontal, tintColor})=>{
              const { errrrouteName } = navigation.state;
              let aaaiconName;
              if (errrrouteName === 'Home') {
                aaaiconName ='ios-home';
                } else{
                    aaaiconName='ios-person'
                }
                return <Ionicons name={aaaiconName} size={horizontal ? 20 : 25} 
            color={focused?abc.themeColor:abc.themehui} />;
           }
       }),
       tabBarOptions: {
          activeTintColor:abc.themeColor,
          inactiveTintColor:abc.themehui,
        },
      }
 )

 const Route =createStackNavigator({
      DiBu:{
        screen:DiBu,
        navigationOptions:()=>({
            header:null,
            headerBackTitle:null,
        })
      },
      Homexq:{
        screen:Homexq,
        navigationOptions:()=>({
            title:'Detail'
        })
      }
 })

 export default createAppContainer(Route)