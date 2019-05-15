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
import {abc} from '../styles/Met'
import MapView , { AnimatedRegion, Marker,Callout }from 'react-native-maps';

class Contact  extends Component{
   constructor(props){
       super(props)
       this.state={
  
       }
   }
 
   render(){
      return(
          <SafeAreaView style={{flex:1}}>
             <View style={styles.title}>
          <Text style={{fontSize:abc.w*.1,color:abc.themebai,}}>Contact</Text>
          </View>

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
                <Text>JunWei </Text>
             </View>
            </Callout>

          </Marker>

          </MapView>
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

