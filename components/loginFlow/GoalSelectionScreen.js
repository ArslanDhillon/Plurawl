import { StyleSheet, Text, View, SafeAreaView, Dimensions, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'

const { height, width } = Dimensions.get("window")

const GoalSelectionScreen = ({route,navigation}) => {

    const [selected, setSelected] = useState('');


    const userData = route.params.user;
    userData.goal = selected

    console.log('user get data from previouse screen'  ,userData)

    const blankCircle = require("../../assets/blankCircle.png");
    const filledCircle = require("../../assets/filledCircle.png");


    const nxtBtnHandle = () =>{
       
    }

    const goals = [
        {
            id: 1,
            name: 'Feel confident'
        },
        {
            id: 2,
            name: 'Boost energy'
        }, {
            id: 3,
            name: 'Build self-esteem'
        }, {
            id: 4,
            name: 'Reduce stress & anxiety'
        }, {
            id: 5,
            name: 'Improve performance'
        }, {
            id: 6,
            name: 'Cultivate self-love'
        }, {
            id: 7,
            name: 'Sleep better'
        },
        {
            id: 8,
            name: 'Stop code-switching'
        },
        {
            id: 9,
            name: 'Increase focus'
        }, {
            id: 10,
            name: 'Develop gratitude'
        },

    ]


    return (
        <SafeAreaView style={{ backgroundColor: '#0f0f0f' }}>
            <View style={{ height: height, backgroundColor: '#0f0f0f', alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontWeight: "500", fontSize: 25, marginTop: 40 / 924 * height }}>
                    What are your goals?
                </Text>

                <Text numberOfLines={2} style={{
                    color: '#fff', fontWeight: "500", fontSize: 12, marginTop: 15 / 924 * height,
                    width: 325 / 429 * width, textAlign: 'center'
                }}>

                    What would you like Plurawl to help you improve on?
                    Select all that apply
                </Text>
                <View style = {{flexDirection:'row',alignItems:'center'}}>
                    <Image source={require('../../assets/PageControl1.png')} style = {{height:393/924*height,width:44/423*width}}/>
                    <ScrollView style={{ height: 630 / 924 * height, marginTop: 50 / 926 * height }}>
                        {
                            goals.map((item) => (

                                <TouchableOpacity key={item.id} onPress={()=>{
                                    setSelected(item.name)
                                    navigation.navigate('ProfileScreen',{
                                        user:userData
                                    })
                                }}
                                >
                                    <View style={{
                                        flexDirection: 'row', gap: 8, height: 56 / 926 * height, width: 370 / 429 * width, marginTop: 8 / 926 * height,
                                        backgroundColor: selected === item.name ? "#d4473f" : '#0f0f0f', borderRadius: 16 / 924 * height, alignItems: 'center', paddingLeft: 50 / 429 * width
                                    }}>
                                        <Image source={selected === item.name ? filledCircle : blankCircle} style={{ height: 20 / 924 * height, width: 20 / 429 * width, resizeMode: 'contain', }} />
                                        <Text style={{ fontSize: 12, fontWeight: '500', color: '#fff', }}>{item.name}</Text>

                                    </View>
                                </TouchableOpacity>
                            ))
                        }

                    </ScrollView>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default GoalSelectionScreen

const styles = StyleSheet.create({})