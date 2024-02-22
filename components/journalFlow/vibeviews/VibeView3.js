import React from 'react'
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const { height, width } = Dimensions.get("window")

const HEPF = require("../../../assets/All_Images/HEPFullscreen_3x.png")




function VibeView3() {
  return (
    <View style={{ height:height, width: width, overflow: "hidden",borderRadius:24/924*height,alignSelf:'center',backgroundColor:'red' }} >
        <ImageBackground source={HEPF} style={{height:height, width: width , overflow: "hidden", alignItems: "center", }} >
    <View style={{flexDirection:"row",alignItems:"center",width:width-100,gap:5/426*width,marginTop:60/924*height}} >
        <Image source={require("../../../assets/All_Images/Dummy_Circle_Small_3x.png")} style={{height:24/924*height,width:24/924*height}} />
        <Text style={{color:"#12121250",fontSize:17,fontWeight:"800"}} >Let’s Reflect</Text>
      </View>
      <View style={{width:width-100,marginTop:26/924*height}} >
        <Text style={{color:"#121212",fontSize:34/924*height,fontWeight:"500"}} >What do you think helped contribute to your vibe this past week?</Text>
        </View>
      
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:width-17,marginTop:50/924*height}} >
      <View style={{height:100/924*height,width:28/426*width,backgroundColor:"#a19a7a",borderRadius:50/924*height,alignItems:"center",justifyContent:"center"}} >
          <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",}} ></View>
          <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
          <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#fff",marginTop:8/924*height}} ></View>
          <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
          <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
        </View>
        <TextInput
      
        placeholder='Type Here....'
        numberOfLines={5}
        textAlignVertical='top'
        maxLength={1500}
        multiline={true}
        
        style={{padding:10/924*height,height:147/924*height,width:310/426*width,backgroundColor:"#ffffff50",borderRadius:16/924*height}}></TextInput>
        

      <View ></View>
      </View>
    </ImageBackground>
  </View>
  )
}

export default VibeView3