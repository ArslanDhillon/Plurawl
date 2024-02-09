import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'

const { height, width } = Dimensions.get('window')

const WeeklySummaryMainScreen = (props) => {

    const checkInPressHandle = () =>{
        props.navigation.navigate('CheckInFirstScreen')
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#0f0f0f', flex: 1, }}>
            <View style={{ backgroundColor: '#0f0f0f', height: height, alignItems: "center", width: width, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', width: width - 40 / 429 * width }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <TouchableOpacity>
                            <Image source={require('../assets/profileImage.png')}
                                style={{
                                    height: 48 / 926 * height, width: 48 / 429 * width, resizeMode: 'contain', borderWidth: 4,
                                    borderColor: "#252525", borderRadius: 24 / 924 * height
                                }}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: '#fff', }}>
                                Pabel
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={{
                        borderWidth: 1, borderColor: "#FCD860", borderRadius: 80 / 924 * height,
                        padding: 10 / 924 * height, width: 120 / 429 * width, flexDirection: 'row', gap: 10
                    }} onPress={checkInPressHandle}>
                        <View style={{
                            height: 24 / 924 * height, width: 24 / 924 * height, backgroundColor: '#FCD860',
                            borderRadius: 12 / 924 * height,
                        }}></View>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: '#fff' }}>Check In</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ width: width, height: 1, backgroundColor: '#0F0F0F', marginTop: 15 / 924 * height }}></View>
                <TouchableOpacity>
                    <ImageBackground source={require("../assets/gradientImage.png")} style={{ height: 121 / 924 * height, width: 390 / 924 * height }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 / 924 * height }}>
                            <View style={{ flexDirection: 'column', }}>

                                <Text style={{ fontSize: 18, fontWeight: '500', }}>Last week's vibe</Text>
                                <Text style={{ fontSize: 12, fontWeight: "500", color: '#000' }}>Dec 17 - 23</Text>
                                <Text style={{ fontSize: 12, fontWeight: "500", color: '#000', marginTop: 23 / 924 * height }}>Summary • Tips • Soundtrack</Text>
                            </View>

                            <View style={{ height: 90 / 924 * height, width: 95 / 926 * height, overflow: 'hidden', borderRadius: 10 / 924 * height, }}>
                                <Image source={require('../assets/Rectangle.gif')} style={{ height: 90 / 924 * height, width: 95 / 924 * height, }} />
                            </View>


                        </View>


                    </ImageBackground>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 / 426 * width, marginTop: 10 / 924 * height }}>
                    <TouchableOpacity>
                        <ImageBackground
                            style={{ height: 174 / 924 * height, width: 191 / 426 * width, borderRadius: 15 / 924 * height }}
                            source={require('../assets/QOTDbgImage.png')}>
                            <View style={{ padding: 18 / 924 * height }}>
                                <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>Quote of the Day</Text>

                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ height: 174 / 924 * height, width: 191 / 429 * width, backgroundColor: '#1C1C1C', borderRadius: 16 / 924 * height, padding: 15 / 924 * height }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 / 426 * width }}>
                                <Image source={require('../assets/focusImage.png')} style={{ height: 24 / 924 * height, width: 24 / 924 * height }} />
                                <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500' }}>Focus</Text>

                            </View>
                            <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500', marginTop: 15 / 924 * height, }}>Recenter before your next meeting?</Text>

                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ width: 390 / 426 * width, height: 87 / 924 * height, borderRadius: 16 / 924 * height, backgroundColor: "#1c1c1c", marginTop: 10 / 924 * height }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 / 426 * width, padding: 15 / 924 * height, paddingBottom: 10 / 924 * height }}>

                        <Image source={require('../assets/colorfullCircle.png')} style={{ height: 24 / 924 * height, width: 24 / 924 * height }} />
                        <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500', }}>Chat w/ Plurawl.ai</Text>
                    </View>
                    <Text style={{ color: '#F8EDDA75', fontSize: 14, fontWeight: '500', paddingLeft: 15 / 426 * width }}>Lorem ipsum dolor sit amet consectetur.</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', width: 390 / 426 * width, marginTop: 10 / 924 * height, gap: 8 / 426 * width }}>

                    <TouchableOpacity style={{ height: 56 / 924 * height, width: 191 / 423 * width, backgroundColor: "#1c1c1c", borderRadius: 16 / 924 * height, }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 / 426 * width, padding: 17 / 952 * height }}>
                            <Image source={require('../assets/insightIcon.png')} style={{ height: 16 / 924 * height, width: 16 / 924 * height, resizeMode: 'contain' }} />
                            <Text style={{ color: '#fff', fontSize: 14, fontWeight: '700', }}>Insights</Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: 56 / 924 * height, width: 191 / 423 * width, backgroundColor: "#1c1c1c", borderRadius: 16 / 924 * height, }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 / 426 * width, padding: 17 / 952 * height }}>
                            <Image source={require("../assets/pageIcon.png")} style={{ height: 16 / 924 * height, width: 16 / 924 * height, resizeMode: 'contain' }} />
                            <Text style={{ color: '#fff', fontSize: 14, fontWeight: '700', }}>My journal</Text>
                        </View>

                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ marginTop: 180 / 924 * height, }}>
                    <Image source={require('../assets/addBtn.png')} style={{ height: 58 / 924 * height, width: 58 / 924 * height, resizeMode: 'contain' }} />
                </TouchableOpacity>

            </View>
        </SafeAreaView>

    )
}
export default WeeklySummaryMainScreen;


const styles = StyleSheet.create({})
