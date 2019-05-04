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
class Me extends Component{
   constructor(props){
       super(props)
       this.state={

       }
   }

   render(){
      return(
          <SafeAreaView>
              <Text>Me33</Text>
          </SafeAreaView>
      )
   }
}

export default Me

