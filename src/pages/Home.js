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
    Alert
} from 'react-native'
import {SafeAreaView,NavigationActions} from 'react-navigation'
import {observer,inject} from 'mobx-react';
import {abc} from '../styles/Met'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DatePicker from 'react-native-datepicker';
import {Avatar,Badge} from 'react-native-elements'

@inject('DataStore')
@observer
class Home extends Component{
   constructor(props){
       super(props)
       this.state={
         date:'',
         date2:'',
         color:abc.themeColor,
         color2:abc.themehui2,
         color3:abc.themehui2,
         b_index:0,
         
       }
       this.dalou=[
         {
           name:'A'
         },
         {
          name:'B'
        },
        {
          name:'C'
        },

       ]
   }
   sendCaptcha(callback) {

    const { account } = this.state;

    if (!account) return Alert.alert('', '请输入注册的手机号或邮箱');

    let params = { type: 'forgot' };

    if (account.indexOf('@') != -1) {
      params.email = account;
    } else {
      params.phone = account;
    }

    callback({ args: params });
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
  submit=()=>{
    
    if(this.state.name==undefined){
      return  Alert.alert('prompt','Please enter name')
    }if(this.state.company==undefined){
      return  Alert.alert('prompt','Please enter Company')
    }if(this.state.phone==undefined){
      return  Alert.alert('prompt','Please enter phone')
    }if(this.state.address==undefined){
      return  Alert.alert('prompt','Please enter Address')
    }
    fetch('https://easy-mock.com/mock/5d0106967850e766d04c7898/booking/fankui',{
      method:'POST'
    }).then(res=>res.json()).then(res=>{
      
    }
    ).catch(err=>{

    }) 
    let qwe={
      name:this.state.name,
      company:this.state.company,
      address:this.state.address,
      phone:this.state.phone,
      start_time:this.state.date,
      end_time:this.state.date2,
      build:'A',
      note:'',
    }
    const mbx=this.props.DataStore.order
      mbx.unshift(qwe) 
      Alert.alert('prompt','Reservation successful, go to check?',[
        {'text':'Cancel','onPress':()=>{}},
        {'text':'OK','onPress':()=>{
          this.props.navigation.navigate('Order')
        }}
      ])

  }
   componentDidMount(){
     this.today()
   }
   componentWillMount(){
     AsyncStorage.getItem('yes').then(res=>{
        console.log('yes:',res)
        if(res==null){
          this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0)
        }
     }
     ).catch(errr=>{
       
     })
   }
  //  shouldComponentUpdate(){}
   render(){
      console.log('date!!',this.state.date)
      return(
          <SafeAreaView style={{flex:1}}>
             <View style={styles.title}>
          <Text style={{fontSize:abc.w*.1,color:abc.themebai}}>New booking</Text>
          </View>
          <KeyboardAwareScrollView contentContainerStyle={{alignItems:'center'}}>

           <View style={styles.wai}>
            <View style={styles.nei}>
                <Text style={styles.left_text}>Name</Text>
                {/* <Text style={{fontSize:abc.w*.05,fontWeight:'600'}}>:</Text> */}
            </View> 
            <View style={{ width:'75%'}}>
              <TextInput placeholder="Please enter your name1" style={styles.text}
              onChangeText={(name)=>{
                this.setState({name})
              }}
              />
            </View>
           </View>
           {/*  */}
           <View style={styles.wai}>
            <View style={styles.nei}>

                <Text style={styles.left_text}>Company</Text>
                {/* <Text style={{fontSize:abc.w*.05,fontWeight:'600',}}>:</Text> */}
            </View> 
            <View style={{ width:'75%'}}>
              <TextInput placeholder="Please enter your company" style={styles.text}
              onChangeText={(company)=>{
                this.setState({company})
              }}
              />
            </View>
           </View>
           {/*  */}
           {/*  */}
           <View style={styles.wai}>
            <View style={styles.nei}>

                <Text style={styles.left_text}>Phone</Text>
             
            </View> 
            <View style={{ width:'75%'}}>
              <TextInput placeholder="Please enter your phone" style={styles.text}
              onChangeText={(phone)=>{
                this.setState({phone})
              }}
              />
            </View>
           </View>
           {/*  */}
           <View style={styles.wai}>
            <View style={styles.nei}>

                <Text style={styles.left_text}>Address</Text>
                {/* <Text style={{fontSize:abc.w*.05,fontWeight:'600',}}>:</Text> */}
            </View> 
            <View style={{ width:'75%'}}>
              <TextInput placeholder="Please enter your Address" style={styles.text}
              onChangeText={(address)=>{
                this.setState({address})
              }}
              />
            </View>
           </View>
           {/*  */}
           <View style={styles.wai}>
            <View style={styles.nei}>

                <Text style={styles.left_text}>Start time</Text>
                {/* <Text style={{fontSize:abc.w*.05,fontWeight:'600',}}>:</Text> */}
            </View> 
            <View style={{ width:'75%'}}>
            <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={this.state.date}
        maxDate="2019-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />

            </View>
           </View>
           {/*  */}
           <View style={styles.wai}>
            <View style={styles.nei}>

                <Text style={styles.left_text}>End time</Text>
                {/* <Text style={{fontSize:abc.w*.05,fontWeight:'600',}}>:</Text> */}
            </View> 
            <View style={{ width:'75%'}}>
            <DatePicker
        style={{width: 200}}
        date={this.state.date2}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate={this.state.date2}
        maxDate="2099-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date2: date})}}
      />
            </View>
           </View>
           {/* 大楼选择 */}
           <View style={styles.wai}>
            <View style={styles.nei}>

                <Text style={styles.left_text}>Building</Text>
                {/* <Text style={{fontSize:abc.w*.05,fontWeight:'600',}}>:</Text> */}
            </View> 
            <View style={{ width:'75%',flexDirection:'row',justifyContent:'space-around'}}>
              {
                this.dalou.map((item,index)=>{
                   return(
                    <Avatar title={item.name} key={index} rounded onPress={()=>{
                     this.build(item,index)
                     }} overlayContainerStyle={{
                         backgroundColor: this.state.b_index==index?abc.themeColor:abc.themehui

                    }}/>
                   )

                  })
              }
               
            </View>
           </View>
           {/* 备注 */}
           
           <View style={styles.wai}>
            <View style={styles.nei}>

                <Text style={styles.left_text}>Note</Text>
                {/* <Text style={{fontSize:abc.w*.05,fontWeight:'600',}}>:</Text> */}
            </View> 
            <View style={{ width:'75%'}}>
              <TextInput placeholder="Please enter remarks (optional)" style={{}}
              multiline={true}
              onChangeText={(note)=>{
                this.setState({note})
              }}
              />
            </View>
           </View>
         {/*  */}
         <Badge value={'submit'} badgeStyle={{width:abc.w*.95,height:50,marginTop:10,backgroundColor:abc.themeColor}}
            textStyle={{fontSize:abc.w*.05}}
           onPress={()=>{
             this.submit()
            }}
         />
          </KeyboardAwareScrollView>
          </SafeAreaView>
      )
   }
}

export default Home
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

