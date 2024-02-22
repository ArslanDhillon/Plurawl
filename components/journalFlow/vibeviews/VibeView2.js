import React from 'react'
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const { height, width } = Dimensions.get("window")

const HEPF = require("../../../assets/All_Images/HEPFullscreen_3x.png")




function VibeView2() {
    return (
        <View style={{ height:height, width: width, overflow: "hidden",borderRadius:24/924*height,alignSelf:'center',backgroundColor:'red' }} >
        <ImageBackground source={HEPF} style={{height:height, width:width , overflow: "hidden", alignItems: "center", }} >
                <View style={{ flexDirection: "row", alignItems: "center", width: width - 100, gap: 5 / 426 * width, marginTop: 60 / 924 * height }} >
                    <Image source={require("../../../assets/All_Images/WrightICone_3x.png")} style={{ height: 20 / 924 * height, width: 20 / 924 * height }} />
                    <Text style={{ color: "#12121250", fontSize: 17, fontWeight: "800" }} >Weekly summary</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: width - 17, marginTop: 27 / 924 * height }} >
                    <View style={{ height: 100 / 924 * height, width: 28 / 426 * width, backgroundColor: "#a19a7a", borderRadius: 50 / 924 * height, alignItems: "center", justifyContent: "center" }} >
                        <View style={{ height: 8 / 924 * height, width: 8 / 924 * height, borderRadius: 4 / 924 * height, backgroundColor: "#bdb8a1", }} ></View>
                        <View style={{ height: 8 / 924 * height, width: 8 / 924 * height, borderRadius: 4 / 924 * height, backgroundColor: "#fff", marginTop: 8 / 924 * height }} ></View>
                        <View style={{ height: 8 / 924 * height, width: 8 / 924 * height, borderRadius: 4 / 924 * height, backgroundColor: "#bdb8a1", marginTop: 8 / 924 * height }} ></View>
                        <View style={{ height: 8 / 924 * height, width: 8 / 924 * height, borderRadius: 4 / 924 * height, backgroundColor: "#bdb8a1", marginTop: 8 / 924 * height }} ></View>
                        <View style={{ height: 8 / 924 * height, width: 8 / 924 * height, borderRadius: 4 / 924 * height, backgroundColor: "#bdb8a1", marginTop: 8 / 924 * height }} ></View>
                    </View>
                    <View style={{ width: width - 75 }} >
                        <Text style={{ color: "#121212", fontSize: 34/924*height, fontWeight: "500" }} >It looks like your week started off a little rough which is normal. Great thing is you ended the week in a better place. Take a look at some insights on how we can help you understand this emotional trends.</Text>
                    </View>
                    <View ></View>
                </View>
                <View style={{ height: 248 / 924 * height, width: width - 68, backgroundColor: "#FCEFC250", borderRadius: 16 / 924 * height, marginTop: 31 / 924 * height }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 / 924 * height, marginLeft: 32 / 426 * width, marginRight: 32 / 426 * width, marginTop: 16 / 924 * height }} >
                        <Image source={require("../../../assets/All_Images/MassageIcon_3x.png")} style={{ height: 22 / 924 * height, width: 22 / 924 * height }} />
                        <Text style={{ fontSize: 17, fontWeight: "800", color: "#12121250" }} >Tip</Text>
                    </View>
                    <Text style={{ marginLeft: 32 / 426 * width, marginRight: 32 / 426 * width, marginTop: 16 / 924 * height, color: "#121212", fontSize: 20, fontWeight: "400" }} >Try taking 5 minutes before you start each day to focus on what you hope to achieve with a quick journal.</Text>
                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 5 / 426 * width, marginTop: 16 / 924 * height }} >
                        <Text style={{ color: "#D44740", fontSize: 17, fontWeight: "700" }} >Set reminder</Text>
                        <Image source={require("../../../assets/All_Images/WatchIcon_3x.png")} style={{ height: 20 / 924 * height, width: 20 / 924 * height }} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default VibeView2