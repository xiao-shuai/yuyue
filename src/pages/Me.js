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
import  Ionicons  from 'react-native-vector-icons/Ionicons' 
import {abc} from '../styles/Met'
import { Button } from 'react-native-elements';
import {observer,inject} from 'mobx-react';

@inject('DataStore')
@observer
class Me extends Component{
   constructor(props){
       super(props)
       this.state={

       }
       this.aaa=[
        {
          title:'My booking',
          item_page:'Order'
        }, 
        {
            title:'Feedback',
            item_page:'Fank'
        },
        {
            title:'About us',
            item_page:'About', 
        },
      

        // {
        //     title:'Directions for use',
        //     item_page:''
        // },

       ]
   }
   
  exit=()=>{
      this.props.navigation.navigate('Login')
      AsyncStorage.removeItem('yes')
  } 
   render(){
      return(
          <SafeAreaView style={{flex:1}}>
          <View style={styles.title}>
          <Text style={{fontSize:abc.w*.1,color:abc.themebai,}}>Personal center</Text>
            </View>
          <ScrollView>
         <View style={{width:abc.w,height:abc.h*.2,
            borderBottomColor:abc.themehui,borderBottomWidth:10,
             flexDirection:'row',alignItems:'center',
            }}>
            <Image source={require('../img/person.png')} style={{width:abc.w*.2,
                height:abc.w*.2,marginLeft:'5%'
                }}/> 
          <View style={{marginLeft:'5%',justifyContent:'space-between',height:'40%'}}>
           <Text style={{fontSize:abc.w*.05}}>Personal information</Text>
          <View style={{flexDirection:'row'}}>
           <Text style={{fontSize:abc.w*.05}}>Name:</Text>
           <Text style={{fontSize:abc.w*.05,marginLeft:5,color:abc.themehui2}}>Alice</Text>
          </View>
         </View>
    
         </View>
         {/*  */}
          {
              this.aaa.map((item,index)=>{
               return(
                   <TouchableOpacity style={styles.item} key={index} onPress={()=>{

                       this.props.navigation.navigate(item.item_page)
                   }}>
                       <Text style={{fontSize:abc.w*.05}}>
                       {item.title}
                       </Text>
                   <Ionicons name={'ios-arrow-forward'} style={{fontSize:abc.w*.06,color:abc.themehui}}/>
                   </TouchableOpacity>
               )
              })
          }
          <Button  title={'Exit'} style={{marginTop:20}}buttonStyle={{
              backgroundColor:abc.themeColor
          }} onPress={()=>{
                this.exit()
          }}/>
          </ScrollView>
            
          </SafeAreaView>
      )
   }
}

export default Me

const styles=StyleSheet.create({
    item:{
        width:abc.w,
        marginTop:5,
        borderBottomWidth:2,
        borderBottomColor:abc.themehui,
        flexDirection:'row' ,
        justifyContent:'space-between',
        padding:10,
        alignItems:'center'
    },
    title:{
        width:abc.w,height:abc.h*.1,
        backgroundColor:abc.themeColor,
        alignItems:'center',
        justifyContent:'center'
    }
})

