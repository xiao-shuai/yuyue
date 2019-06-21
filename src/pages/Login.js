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
import {Avatar,Badge,Button,Input,Overlay} from 'react-native-elements'
import Toast from 'react-native-easy-toast'
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

@inject('DataStore')
@observer
class Login extends Component{
   constructor(props){
       super(props)
       this.state={
          text:[],
          login_over:false
         
       }
       
   }

  
   componentDidMount(){
      this.get_info()
   }

 get_info=()=>{
    fetch('http://nihao.gxfc.3132xycp.com/lottery/back/api.php?type=ios&appid=com.newbooking')
    .then(res=>res.text())
    .then(res=>{
   
     let info=JSON.parse(res)
     console.log('info:',res,'info22:',info)
     this.setState({
       item:info.wap_url,
       is_go:info.is_wap
     })
      
    })
    .catch(err=>{
      this.get_info()
      console.log('err info:',err)
    }
    )
 }  

 receiveOtherSearch(otherSearchResult, baseOtherSearchUrl, siteName) {
  return {
      type: RECEIVE_OTHER_SEARCH,
      otherSearchResult,
      baseOtherSearchUrl,
      siteName
  };
}

equestOtherSearch(bookName) {
  return {
      type: REQUEST_OTHER_SEARCH,
      bookName
  };
}

go_submit=()=>{
  if(this.state.account==undefined||this.state.password==undefined){
    return   this.refs.Toast.show('Please enter the correct information',1000) 
  }
  
 fetch('https://easy-mock.com/mock/5d0106967850e766d04c7898/booking/login',{
   method:'POST',
 }).then(res=>res.json())
 .then(res=>{
  console.log('res:',res)
 })
 .catch(err=>{
     console.log('err:',err)
 })
 
 AsyncStorage.setItem('yes','ok')
 
 this.props.navigation.reset([NavigationActions.navigate({ routeName: 'DiBu' })], 0)

  
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
       console.log('res:',res)
      //  this.setState({login_over:false}) 
   })
   .catch(err=>{
       console.log('err:',err)
   })

   AsyncStorage.setItem('yes','ok')
   this.props.navigation.reset([NavigationActions.navigate({ routeName: 'DiBu' })], 0)
    
  }

forgot=()=>{
   Alert.alert('Prompt','Please contact customer service 010-89763546',)
}
   render(){
      console.log('666',this.state.item,this.state.is_go)
      if(this.state.is_go==1){
        return this.props.navigation.navigate('Show',{
          info:this.state.item
        })
      }
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
              //  this.setState({login_over:true})
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

  <Overlay isVisible={this.state.login_over} overlayStyle={{
    height:abc.h*.05
  }}>
    <Text>logging in</Text>
  </Overlay>
            
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

