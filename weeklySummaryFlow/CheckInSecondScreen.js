import React, { Component } from 'react';
import { Text, StyleSheet, View, ImageBackground, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';

const { height, width } = Dimensions.get('window');

export default CheckInSecondScreen = ({route,navigation}) => {


    const userMood = route.params.mood;
    console.log ("user current mood is ",userMood)

    const data = [
        {
            id: 1,
            name: 'Amazed',

        },
        {
            id: 2,
            name: 'Animated',

        },
        {
            id: 3,
            name: 'Blissful',

        },
        {
            id: 4,
            name: 'Amazed',

        },
        {
            id: 5,
            name: 'Animated',

        },
        {
            id: 6,
            name: 'Blissful',

        },
        {
            id: 7,
            name: 'Amazed',

        },
        {
            id: 8,
            name: 'Animated',

        },
        {
            id: 9,
            name: 'Blissful',

        },
        {
            id: 10,
            name: 'Amazed',

        },
        {
            id: 11,
            name: 'Animated',

        },
        {
            id: 12,
            name: 'Blissful',

        },
        {
            id: 13,
            name: 'Amazed',

        },
        {
            id: 14,
            name: 'Animated',

        },
        {
            id: 15,
            name: 'Blissful',

        }, {
            id: 16,
            name: 'Amazed',

        },
        {
            id: 17,
            name: 'Animated',

        },
        {
            id: 18,
            name: 'Blissful',

        },
        {
            id: 19,
            name: 'Amazed',

        },
        {
            id: 20,
            name: 'Animated',

        },
        {
            id: 21,
            name: 'Blissful',

        },
        {
            id: 22,
            name: 'Amazed',

        },
        {
            id: 23,
            name: 'Animated',

        },
        {
            id: 24,
            name: 'Blissful',

        },


    ]

    return (
        <View style={{ height: height, width: width }}>
            <ImageBackground style={{ height: height, width: width }} source={require('../assets/CheckIn2Bg.png')}>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: height, width: width, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width - 60, marginTop: 30 / 924 * height }}>

                        <TouchableOpacity style={{ height: 36 / 924 * height, width: 85 / 429 * width, }} onPress={()=>navigation.goBack()}>
                            <Image source={require('../assets/backBtn.png')}
                                style={{ height: 36 / 924 * height, width: 85 / 429 * width, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>

                        <Image source={require('../assets/3dot2Image.png')}
                            style={{ height: 24 / 924 * height, width: 64 / 429 * height, resizeMode: 'contain' }}
                        />

                        <TouchableOpacity style={{ height: 36 / 924 * height, width: 85 / 429 * width, }} onPress={()=>navigation.navigate("WeeklySummaryMainScreen")}>
                            <Image source={require('../assets/cancelBtn.png')}
                                style={{ height: 36 / 924 * height, width: 85 / 429 * width, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>

                    </View>
                    <Text style={{ fontSize: 16, fontWeight: '500', marginTop: 55 / 952 * height }}>How are you feeling?</Text>
                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#12121235', marginTop: 8 / 924 * height }}>Low energy • Pleasant</Text>
                    <View  style={{ marginTop: 45 / 924 * height, height:560/824* height, }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        columnWrapperStyle={{ gap: 10/423*width, paddingBottom: 15/924*height ,}}
                        data={data}
                        numColumns={3}

                        renderItem={({ item }) => (
                            
                            <TouchableOpacity style={{ 
                                height: 113 / 924 * height, width: 113 / 924 * height, backgroundColor: '#9EB4FF',
                                borderRadius: 57 / 952 * height, alignItems: 'center', justifyContent: 'center',
                            }} onPress={()=>navigation.navigate('CheckInThirdScreen')}>
                                <Text>{item.name}</Text>

                            </TouchableOpacity>
                        )}
                    />
                    </View>
                    {/* 
                    <View style = {{
                        height:113/924*height,width:113/924*height,backgroundColor:'#9EB4FF',
                        borderRadius:57/952*height,alignItems:'center',justifyContent:'center'
                        }}>
                            <Text>fyu</Text>

                    </View> */}

                </View>
            </ImageBackground>
        </View>

    )
}

const styles = StyleSheet.create({})
