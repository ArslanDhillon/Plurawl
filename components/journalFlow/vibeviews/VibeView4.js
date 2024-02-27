import React from 'react'
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const { height, width } = Dimensions.get("window")

const HEPF = require("../../../assets/All_Images/HEPFullscreen_3x.png")
const SongIcon1 =require("../../../assets/All_Images/ArtIcon3_3x.png")
const SongIcon2=require("../../../assets/All_Images/ArtIcon3_3x.png")
const SongIcon3=require("../../../assets/All_Images/ArtIcon2_3x.png")

const Data = [
  {
    id:1,
    Name:"Who Am I (What’s My Name)?",
    Tital:"Snoop Dogg",
    SongImage:SongIcon1,

  },
  {
    id:2,
    Name:"Easter in Miami",
    Tital:"Kodak Black",
    SongImage:SongIcon2,

  },
  {
    id:3,
    Name:" FE!N Am I (feat. Playboi Carti)",
    Tital:"Travis Scott",
    SongImage:SongIcon3,

  },
]




function VibeView4() {
  return (
    <View style={{ height:height, width: width, overflow: "hidden",borderRadius:24/924*height,alignSelf:'center',backgroundColor:'red' }} >
        <ImageBackground source={HEPF} style={{height:height, width:width , overflow: "hidden", alignItems: "center", }} >
        <View style={{flexDirection:"row",alignItems:"center",width:width-100,gap:5/426*width,marginTop:60/924*height}} >
            <Image source={require("../../../assets/All_Images/HeadPhoneIcon_3x.png")} style={{height:24/924*height,width:24/924*height}} />
            <Text style={{color:"#12121250",fontSize:17,fontWeight:"800"}} >Your Soundtrack</Text>
          </View>
          <View style={{width:width-100,marginTop:24/924*height}} >
            <Text style={{color:"#121212",fontSize:34/924*height,fontWeight:"500"}} >There was an earful of songs you came back to again & again</Text>
            </View>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:width-17,marginTop:32/924*height}} >
          <View style={{height:100/924*height,width:28/426*width,backgroundColor:"#a19a7a",borderRadius:50/924*height,alignItems:"center",justifyContent:"center"}} >
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#fff",marginTop:8/924*height}} ></View>
              <View style={{height:8/924*height,width:8/924*height,borderRadius:4/924*height,backgroundColor:"#bdb8a1",marginTop:8/924*height}} ></View>
            </View>
            <View style={{borderRadius:173/924*height,overflow:"hidden"}} >
            <Image source={require('../../../assets/All_Images/ArtImage_3x.png')} style={{ height: 346 / 924 * height, width: 346 / 924 * height, resizeMode:"cover",overflow:"hidden" }} />
            </View>
          <View ></View>
          </View>
          <View style={{alignItems:"center",marginTop:24/924*height}} >
           <Text style={{color:"#121212",fontSize:34/924*height,fontWeight:"500"}} >Lite Spots</Text>
           <Text style={{color:"#12121250",fontSize:17,fontWeight:"700"}} >KAYTRANADA</Text>
          </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}  style={{}} >
          {
            Data.map((item)=>
            <View key={item.id} style={{height:77/924*height,width:325/426*width,flexDirection:"row",backgroundColor:"#FFFFFF20",gap:10/924*height,borderRadius:200/924*height,alignItems:"center",padding:15/924*height,marginTop:70/924*height,marginLeft:5/426*height}}>
              
              <Image source={item.SongImage} style={{height:61/924*height,width:61/924*height}} />
              <View  >
                  <Text style={{fontSize:24,color:"#121212",fontWeight:"600",width:200}} numberOfLines={1} ellipsizeMode="tail" >{item.Name}</Text>
                  <Text style={{fontSize:22,color:"#12121290",fontWeight:"400"}} numberOfLines={1} ellipsizeMode='tail' >{item.Tital}</Text>
            </View>
            </View>
            )
          }
          </ScrollView>

        </ImageBackground>
      </View>
  )
}

export default VibeView4