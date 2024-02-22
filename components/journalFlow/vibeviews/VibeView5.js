import React from 'react'
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const { height, width } = Dimensions.get("window")

const HEPF = require("../../../assets/All_Images/HEPFullscreen_3x.png")




function VibeView5() {
  return (
    <View style={{ height:height, width: width, overflow: "hidden",borderRadius:24/924*height,alignSelf:'center',backgroundColor:'red' }} >
        <ImageBackground source={HEPF} style={{height:height, width:width , overflow: "hidden", alignItems: "center", }} >
        <View style={{width:width-100,marginTop:92/924*height}} >
            <Text style={{color:"#121212",fontSize:34/924*height,fontWeight:"500"}} >You’re all caught up!</Text>
            <View style={{flexDirection:"row",marginTop:85/924*height,justifyContent:"space-between"}}>
            <View>
            <Text style={{fontSize:34/924*height,color:"#22211f",}} >High Energy</Text>
            <Text style={{fontSize:34/924*height,color:"#22211f",}} >Pleasant</Text>
            </View>
            <Image source={require('../../../assets/All_Images/ArtImage_3x.png')} style={{ height: 61 / 924 * height, width: 61 / 924 * height, resizeMode:"cover",overflow:"hidden", marginTop:50/924*height, marginRight:25/924*height }} />
            </View>
            </View>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:width-17,marginTop:-10/924*height}} >
          <View style={{height:100/924*height,width:28/426*width,backgroundColor:"#a19a7a",borderRadius:50/924*height,alignItems:"center",justifyContent:"center",marginTop:-20/924*height}} >
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#fff",marginTop:8/924*height}} ></View>
            </View>
            <View style={{borderRadius:173/924*height,overflow:"hidden"}} >
            <Image source={require('../../../assets/All_Images/Gif/ladyDanceGif.gif')} style={{ height: 203 / 924 * height, width: 206 / 924 * height, resizeMode:"cover",overflow:"hidden" }} />
            </View>
          <View ></View>
          </View>
          <View style={{flexDirection:"row",marginTop:-80/924*height,justifyContent:"space-between",width:width-90}} > 
              <Image source={require("../../../assets/All_Images/ArtIcon2_3x.png")} style={{ height: 78 / 924 * height, width: 78 / 924 * height, resizeMode:"cover",overflow:"hidden",marginLeft:10/924*height }}  />
              <Image source={require('../../../assets/All_Images/ArtImage_3x.png')} style={{ height: 110 / 924 * height, width: 110 / 924 * height, resizeMode:"cover",overflow:"hidden",  }} /> 
            </View>
              
              <View style={{marginRight:60/924*height,marginTop:60/924*height}} > 
              <Image source={require("../../../assets/All_Images/ArtIcon3_3x.png")} style={{height:68/924*height,width:67/924*height,}} />
              </View>
              
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: 5 / 426 * width, marginTop: 130 / 924 * height,backgroundColor:"#25252560",height:60/924*height,width:381/426*width,borderRadius:80/924*height,alignItems:"center",justifyContent:"center" }} >
              <Image source={require("../../../assets/All_Images/ShareIcon_3x.png")} style={{ height: 24 / 924 * height, width: 24 / 924 * height }} />
              <Text style={{ color: "#F8EDDA", fontSize: 17, fontWeight: "800" }} >Share vibe</Text>
            </TouchableOpacity>
        </ImageBackground>
      </View>
  )
}

export default VibeView5