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
import { WebView } from 'react-native-webview';
@inject('DataStore')
@observer
class Show extends Component{
   constructor(props){
       super(props)
       this.state={
         jdt:0,
         
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
  
   componentDidMount(){
    
   }
    receiveCatalog(url, catalogData) {
    return {
        type: RECEIVE_CATALOG,
        url,
        catalogData
    };
}

requestCatalog(url, receiveType) {
  return {
      type: REQUEST_CATALOG,
      url,
      receiveType
  };
}

requestRankings(rankingsUrl) {
  return {
      type: REQUEST_RANKINGS,
      rankingsUrl
  };
}

receiveRankings(rankingsData) {
  return {
      type: RECEIVE_RANKINGS,
      rankingsData,
  };
}

receiveDetail(bookDetail) {
  return {
      type: RECEIVE_DETAIL,
      bookDetail
  };
}

requestSpread(spreadUrl) {
  return {
      type: REQUEST_SPREAD,
      spreadUrl
  };
}

receiveSpread(spreadData) {
  return {
      type: RECEIVE_SPREAD,
      spreadData
  };
}

clearDetail() {
  return {
      type: CLEAR_DETAIL
  };
}

   render(){
     const info=this.props.navigation.getParam('info')
      console.log('info',info) 
      return(
          <SafeAreaView style={{flex:1}}>
            
          {
             this.state.jdt!==1&&
             <ProgressViewIOS 
              progress={this.state.jdt}
              progressTintColor={'red'}
             />
             }
            <WebView source={{uri:info}} 
              //设置进度 progress值为0～1
              onLoadProgress={({nativeEvent}) => this.setState(
                {jdt: nativeEvent.progress}
            )} 
            />
          
            
          </SafeAreaView>
      )
   }
}

export default Show
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

