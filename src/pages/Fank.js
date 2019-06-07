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

@inject('DataStore')
@observer
class Fank extends Component{
   constructor(props){
       super(props)
       this.state={
          text:[]
         
       }
       
   }

  today=()=>{
    const date = new Date();
    
    const fyear = date.getFullYear().toString();
    const fmonth = (date.getMonth()+1).toString();
    const fday = date.getDate().toString();
    const aaafinal=fyear+'-'+fmonth+'-'+fday
    this.setState({date:aaafinal,date2:aaafinal})
  } 
  build=(item,index)=>{
       this.setState({b_index:index})
  }
   componentDidMount(){
     this.today()
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

             }}/>
          </ScrollView> 
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

