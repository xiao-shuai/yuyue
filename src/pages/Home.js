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
import {observer,inject} from 'mobx-react';
@inject('DataStore')
@observer
class Home extends Component{
   constructor(props){
       super(props)
       this.state={

       }
   }

   render(){
    
      return(
          <SafeAreaView>
              <Text>Home111</Text>
              <Text>{this.props.DataStore.text}</Text>
          </SafeAreaView>
      )
   }
}

export default Home

