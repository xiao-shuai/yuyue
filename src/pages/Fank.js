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
    TextInput
} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import {observer,inject} from 'mobx-react';
import {abc} from '../styles/Met'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DatePicker from 'react-native-datepicker';
import {Avatar,Badge,Button} from 'react-native-elements'
import Toast from 'react-native-easy-toast'

@inject('DataStore')
@observer
class Fank extends Component{
   constructor(props){
       super(props)
       this.state={
          text:[]
         
       }
       
   }

  
   componentDidMount(){
     
   }
go_submit=()=>{
  if(this.state.text.length!==0){
      fetch('https://easy-mock.com/mock/5d0106967850e766d04c7898/booking/fankui',{
        method:'POST'
      })
      .then(res=>res.json())
      .then(res=>{
        console.log('res!',res)
        this.refs.Toast.show('Thank you for your feedback. We will deal with it as soon as possible',1000) 
      })
      .catch(err=>{
        console.log('err:',err)
      })

  }else{
    this.refs.Toast.show('The content cannot be empty',1000) 
  }
  
}
   render(){
      
      return(
          <SafeAreaView style={{flex:1}}>
           <ScrollView contentContainerStyle={{alignItems:'center'}}>
               <View style={{width:abc.w*.95,height:abc.h*.3,marginTop:10,
                backgroundColor:'#F5F5F5',borderRadius:5,padding:10
                }}>
               <TextInput style={{height:'100%'}} multiline={true}  onChangeText={(text)=>{
                  this.setState({text})
               }}/>
               </View>

             <Button  buttonStyle={{width:abc.w*.9,marginTop:10,
             backgroundColor:this.state.text.length>=1?
             abc.themeColor
             :
             abc.themehui
            }} 
             title={'Submit'} titleStyle={{}}
              onPress={()=>{
               this.go_submit()

             }}/>
          </ScrollView> 
     <Toast
ref="Toast"
position='top'
opacity={0.8}
/>
          </SafeAreaView>
      )
   }
}

export default Fank
const styles=StyleSheet.create({

  left_text:{
    fontSize:abc.w*.04,fontWeight:'600',marginLeft:5
  },
    text:{
        height:'100%',
        // height:abc.w*.04,
        marginLeft:'5%',
        
        
    },
    nei:{
        width:'20%',
        height:abc.h*.04,
        // justifyContent:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
        
    },
    wai:{
        width:abc.w,
        flexDirection:'row',
        height:abc.h*.08,
        // backgroundColor:abc.themehui,
        // padding:10,
        alignItems:'center',
        // width:abc.w*.95,
        borderBottomColor:abc.themehui,
        borderBottomWidth:1

        
    },
    title:{
        width:abc.w,height:abc.h*.1,
        backgroundColor:abc.themeColor,
        alignItems:'center',
        justifyContent:'center'
    }
})

