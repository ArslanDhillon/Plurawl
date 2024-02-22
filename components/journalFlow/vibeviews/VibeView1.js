import React from 'react'
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const { height, width } = Dimensions.get("window")

const HEPF = require("../../../assets/All_Images/HEPFullscreen_3x.png")




function VibeView1() {
  return (
    <View style={{ height: height, width: width, overflow: "hidden", borderRadius: 24 / 924 * height, alignSelf: 'center', backgroundColor: 'red' }} >
      <ImageBackground source={HEPF} style={{ height: height, width: width, overflow: "hidden", alignItems: "center", }} >
        <Text style={{ fontSize: 34, fontWeight: "500", marginTop: 90 / 924 * height }} > Last Week's Vibe </Text>
        <Text style={{ fontSize: 22, color: "#12121290" }} >December 17 - 23</Text>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: width - 17, marginTop: 27 / 924 * height }} >
          <View style={{ height: 100 / 924 * height, width: 28 / 426 * width, backgroundColor: "#a19a7a", borderRadius: 50 / 924 * height, alignItems: "center", justifyContent: "center" }} >
            <View style={{ height: 8 / 924 * height, width: 8 / 924 * height, borderRadius: 4 / 924 * height, backgroundColor: "#fff", }} ></View>
            <View style={{ height: 8 / 924 * height, width: 8 / 924 * height, borderRadius: 4 / 924 * height, backgroundColor: "#bdb8a1", marginTop: 8 / 924 * height }} ></View>
            <View style={{ height: 8 / 924 * height, width: 8 / 924 * height, borderRadius: 4 / 924 * height, backgroundColor: "#bdb8a1", marginTop: 8 / 924 * height }} ></View>
            <View style={{ height: 8 / 924 * height, width: 8 / 924 * height, borderRadius: 4 / 924 * height, backgroundColor: "#bdb8a1", marginTop: 8 / 924 * height }} ></View>
            <View style={{ height: 8 / 924 * height, width: 8 / 924 * height, borderRadius: 4 / 924 * height, backgroundColor: "#bdb8a1", marginTop: 8 / 924 * height }} ></View>
          </View>
          <View style={{ borderRadius: 173 / 924 * height, overflow: "hidden" }} >
            <Image source={require('../../../assets/All_Images/Gif/ladyDanceGif.gif')} style={{ height: 346 / 924 * height, width: 346 / 924 * height, resizeMode: "cover", overflow: "hidden" }} />
          </View>
          <View ></View>
        </View>
        <View style={{ alignItems: "center" }} >
          <Text style={{ marginTop: 22 / 924 * height, color: "#121212", fontSize: 13, fontWeight: "400" }} >High Energy </Text>
          <Text style={{ color: "#121212", fontSize: 34, marginTop: 8 / 924 * height, fontWeight: "500" }} >Pleasant </Text>
          <View style={{justifyContent:'flex-end',alignItems:'center',}}>
            <Text style={{ color: "#121212", fontSize: 22, marginTop: 105 / 924 * height, fontWeight: "400", }} >Explore your mood</Text>
            <Text style={{ color: "#12121270", fontSize: 17, marginTop: 16 / 924 * height, fontWeight: "400" }} >Swipe up</Text>
            <Image source={require("../../../assets/All_Images/BlackDownArrow_3x.png")} style={{ height: 33 / 924 * height, width: 31 / 926 * width, resizeMode: "contain", }} />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default VibeView1