import React,{Component} from 'react'
import {View,
    Text,
    TouchableOpacity,
    Image,
    AsyncStorage,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    RefreshControl,
    ProgressViewIOS
} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import {abc} from '../styles/Met'
class Me extends Component{
   constructor(props){
       super(props)
       this.state={

       }
   }
   
   render(){
      return(
          <SafeAreaView style={{flex:1}}>
          <View style={{width:abc.w,height:abc.h*.1,backgroundColor:abc.themeColor}}>
          <Text>New booking</Text>
          </View>
          <ScrollView>

          </ScrollView>
            
          </SafeAreaView>
      )
   }
}

export default Me

