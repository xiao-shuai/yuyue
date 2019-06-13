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
    ProgressViewIOS,
    TextInput,
    SafeAreaView
} from 'react-native'
import {observer,inject} from 'mobx-react';
import {abc} from '../styles/Met'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DatePicker from 'react-native-datepicker';
import {Avatar,Badge} from 'react-native-elements'

@inject('DataStore')
@observer
class About extends Component{
   constructor(props){
       super(props)
       this.state={
        
         
       }
       
   }

  
   componentDidMount(){
     
   }

   render(){
      
      return(
          <SafeAreaView style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'#F5F5F5'}}>
              <View style={{width:abc.w,height:abc.h*.3,
                backgroundColor:'white',
                alignItems:'center',
                justifyContent:'center'
                }}>
               <Image source={require('../img/logo.png')} style={{
                 width:abc.w*.3,
                 height:abc.w*.3
               }}/>
               <Text style={{marginTop:5}}>v1.1</Text>
               </View>
             
             <View style={{
               padding:10,height:abc.h*.6,
              backgroundColor:'white',marginTop:abc.w*.06}}>
               <Text style={{color:abc.themehui2,fontSize:abc.w*.05,
               lineHeight:abc.w*.07,letterSpacing:1
              }}>
               Our APP is developed by changsheng company, which is used to facilitate customers to reserve company venues and meetings. If you have any questions, please contact the company at 010-56789763
               </Text>
              </View> 


            </View>
          </SafeAreaView>
      )
   }
}

export default About
const styles=StyleSheet.create({
  left_text:{
    fontSize:abc.w*.04,fontWeight:'600',marginLeft:5
  },
   
})

