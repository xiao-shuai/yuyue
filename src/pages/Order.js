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
import {} from 'react-navigation'
import {observer,inject} from 'mobx-react';
import {abc} from '../styles/Met'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DatePicker from 'react-native-datepicker';
import {Avatar,Badge, Button} from 'react-native-elements'

@inject('DataStore')
@observer
class Order extends Component{
   constructor(props){
       super(props)
       this.state={
        
         
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
    fetch('https://easy-mock.com/mock/5d0106967850e766d04c7898/booking/fankui',{
      method:'POST'
    }).then(res=>res.json()).then(res=>{
      
    }
    ).catch(err=>{

    }) 
     this.today()
     console.log('aa',this.props.DataStore.order)
   }

   render(){
     const list=this.props.DataStore.order
      
      return(
          <SafeAreaView style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'#F5F5F5',
            alignItems:'center',
            // marginTop:10
            }}>
              <ScrollView contentContainerStyle={{
                marginTop:10
              }}>
                {
                  list.map((item,index)=>{
                    return (
                      <View style={{
                        width:abc.w*.95,
                        padding:10,
                        shadowColor:abc.themeColor,
                        // shadowOffset:{width:5,height:5},
                        shadowOpacity:.8,
                        backgroundColor:'white'
                        
                        }}>
                        <Text style={styles.text2}>Name: {item.name}</Text>
                        <Text style={styles.text2}>Company: {item.company}</Text>
                        <Text style={styles.text2}>Address: {item.address}</Text>
                        <Text style={styles.text2}>Phone: {item.phone}</Text>
                        <Text style={styles.text2}>StartTime: {item.start_time}</Text>
                        <Text style={styles.text2}>EndTime: {item.end_time}</Text>
                      </View>
                    )
                  })
                  
                }

           

            </ScrollView>
            </View>
          </SafeAreaView>
      )
   }
}

export default Order
const styles=StyleSheet.create({
  text2:{
    fontSize:abc.w*.05,marginTop:5,color:abc.themehui2
  },
  left_text:{
    fontSize:abc.w*.04,fontWeight:'600',marginLeft:5
  },
    text:{
        height:'100%',
        marginLeft:'5%',
        
        
    },
    nei:{
        width:'20%',
        height:abc.h*.04,
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

