import React,{Component} from 'react'
import { 
    createBottomTabNavigator,
     createAppContainer,
     createStackNavigator 
    } from 'react-navigation';
 
 import  Ionicons  from 'react-native-vector-icons/Ionicons' 
 import  {Me,Home,Homexq,Contact,Order,
  Fank,Use,About,Login
} from  '../pages/all'
 import {abc} from  '../styles/Met'

 const DiBu=createBottomTabNavigator(
    {
        Home:Home,
        Contact:Contact,
        Me:Me,
      },
      {
       initialRouteName: 'Home',
       defaultNavigationOptions:({ navigation })=>({
           tabBarIcon:({focused, horizontal, tintColor})=>{
          
          const { routeName } = navigation.state;
           let iconName;
           if (routeName === 'Home') {
               iconName ='ios-home';
             } else if (routeName === 'Contact') {
               iconName = 'ios-business';
             }else{
                 iconName='ios-person'
             }
             return  <Ionicons name={iconName} size={horizontal ? 20 : 25} 
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
      },
      Order:{
        screen:Order,
        navigationOptions:()=>({
            title:'Booking List'
        })
      },
      Fank:{
        screen:Fank,
        navigationOptions:()=>({
            title:'Feedback'
        })
      },
      Use:{
        screen:Use,
        navigationOptions:()=>({
            title:'Directions for use'
        })
      },
      About:{
        screen:About,
        navigationOptions:()=>({
            title:'About us'
        })
      },
      Login:{
        screen:Login,
        navigationOptions:()=>({
            // title:'About us'
            header:null
        })
      },

 })

 export default createAppContainer(Route)