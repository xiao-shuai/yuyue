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
import {Avatar,Badge,Button,Input} from 'react-native-elements'
import Toast from 'react-native-easy-toast'
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

@inject('DataStore')
@observer
class Login extends Component{
   constructor(props){
       super(props)
       this.state={
          text:[]
         
       }
       
   }

  
   componentDidMount(){
     
   }
go_submit=()=>{
  if(this.state.account==undefined||this.state.password==undefined){
    return   this.refs.Toast.show('Please enter the correct information',1000) 
  }
  
 fetch('https://easy-mock.com/mock/5d0106967850e766d04c7898/booking/login',{
   method:'POST',
 }).then(res=>res.json())
 .then(res=>{
    AsyncStorage.setItem('yes','ok')
     console.log('res:',res)
     this.props.navigation.reset([NavigationActions.navigate({ routeName: 'DiBu' })], 0)
 })
 .catch(err=>{
     console.log('err:',err)
 })

  
}
go_submit2=()=>{
    if(this.state.accounts==undefined||this.state.passwords==undefined){
      return   this.refs.Toast.show('Please enter the correct information',1000) 
    }
    if(this.state.passwords!==this.state.password2){
        return   this.refs.Toast.show('Password inconsistency',1000) 
    }

    
   fetch('https://easy-mock.com/mock/5d0106967850e766d04c7898/booking/login',{
     method:'POST',
   }).then(res=>res.json())
   .then(res=>{
       AsyncStorage.setItem('yes','ok')
       console.log('res:',res)
       this.props.navigation.reset([NavigationActions.navigate({ routeName: 'DiBu' })], 0)
   })
   .catch(err=>{
       console.log('err:',err)
   })
  
    
  }

forgot=()=>{
   Alert.alert('Prompt','Please contact customer service 010-89763546',)
}
   render(){
      
      return(
          <SafeAreaView style={{flex:1}}>
<ScrollableTabView
    tabBarActiveTextColor={abc.themeColor}
    tabBarUnderlineStyle={{backgroundColor:abc.themeColor}}
    
    style={{marginTop: 20,alignItems:'center' }}
   
    renderTabBar={() => <DefaultTabBar />}
  >
    <View tabLabel={'Login'} style={{alignItems:'center'}}>
        <Input label={'account'} 
          containerStyle={{marginTop:10,width:abc.w*.9}}
          onChangeText={(account)=>{
              this.setState({account})
          }}
        />
        <Input label={'password'} 
          containerStyle={{marginTop:10,width:abc.w*.9}}
          secureTextEntry={true}
          onChangeText={(password)=>{
           this.setState({password})
          }}
        />
        <Button title={'Login'} style={{width:abc.w*.9,marginTop:20}} 
            onPress={()=>{
                this.go_submit()
            }}
        />
         <Button title={'Forgot password ？'} type={'clear'} titleStyle={{fontSize:16}} 
           onPress={()=>{
             this.forgot()
           }}
         />

    </View>
    <View tabLabel={'Registered'} style={{alignItems:'center'}}>
    

    <Input label={'account'} 
          containerStyle={{marginTop:10,width:abc.w*.9}}
          onChangeText={(accounts)=>{
              this.setState({accounts})
          }}
        />
        <Input label={'password'} 
          containerStyle={{marginTop:10,width:abc.w*.9}}
          secureTextEntry={true}
          onChangeText={(passwords)=>{
           this.setState({passwords})
          }}
        />
         <Input label={'Confirm password'} 
          containerStyle={{marginTop:10,width:abc.w*.9}}
          secureTextEntry={true}
          onChangeText={(password2)=>{
           this.setState({password2})
          }}
        />
        <Button title={'Registered'} style={{width:abc.w*.9,marginTop:20}} 
            onPress={()=>{
                this.go_submit2()
            }}
        />

    </View>

  </ScrollableTabView>
           
     <Toast
ref="Toast"
position='top'
opacity={0.8}
/>
          </SafeAreaView>
      )
   }
}

export default Login
const styles=StyleSheet.create({

  

})

