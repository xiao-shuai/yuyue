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
    ProgressViewIOS,Linking

} from 'react-native'
import {SafeAreaView} from 'react-navigation'
import {abc} from '../styles/Met'
import MapView , { AnimatedRegion, Marker,Callout }from 'react-native-maps';

class Contact  extends Component{
   constructor(props){
       super(props)
       this.state={
  
       }
       this.qwr=[
           {
               title:'Address',
               content:'41 kexing west road, huilongguan street, Beijing'
           },
           {
               title:'Telephone',
               content:'+8613478654675',
           },
           {
               title:'Email',
               content:'13478654675@makepolo.com',
           },
           {
               title:'Open time',
               content:'Monday to Friday,9:00-6:00'
           }
       ]
   }
 
   render(){
      return(
          <SafeAreaView style={{flex:1}}>
             <View style={styles.title}>
          <Text style={{fontSize:abc.w*.1,color:abc.themebai,}}>Contact</Text>
            </View>
         <ScrollView> 
          <MapView 
          style={styles.dt}
          initialRegion={{
            latitude: 39.9863275788,
            longitude:116.3544845581,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          >
          <Marker coordinate={{
             latitude: 39.9853275788,
             longitude:116.3644845581,
            }}>
            <Callout style={styles.aacallout} >
             <View style={{}}>
                <Text>Beijing HuiLongGuan street </Text>
             </View>
            </Callout>
          </Marker>
          </MapView>
          {
            this.qwr.map((item,index)=>{
              return(
                  <View style={{marginTop:10}}>
                 <View style={{width:'100%',height:abc.h*.05,backgroundColor:abc.themeColor,justifyContent:'center'}}>
                     <Text style={{color:'white',fontSize:abc.w*.05,fontWeight:'600',marginLeft:'5%'}}>{item.title}</Text>
                 </View>
                 {
                     index==1?
                     <TouchableOpacity style={{padding:abc.w*.05}} onPress={()=>{
                        Linking.openURL('tel:+8613478654675')
                     }}>
                     <Text style={{fontSize:abc.w*.04,fontWeight:'500'}}>{item.content}</Text>
                    
                     </TouchableOpacity>
                  :
                  <View style={{padding:abc.w*.05}}>
                  <Text style={{fontSize:abc.w*.04,fontWeight:'500'}}>{item.content}</Text>
                 </View>
                 }
                
                  </View>
              )
            })
          }
           </ScrollView>
          
          </SafeAreaView>
      )
   }
}

const styles= StyleSheet.create({
    aacallout:{
        width:abc.w*.5,
        // backgroundColor:abc.themehui2,
        padding:6,
        opacity:.7
    },

    dt:{
       width:abc.w,
       height:abc.h*.2,
       marginTop:5
    },
    title:{
        width:abc.w,height:abc.h*.1,
        backgroundColor:abc.themeColor,
        alignItems:'center',
        justifyContent:'center'
    }

})
export default Contact

