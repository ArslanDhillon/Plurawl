import { StyleSheet, Text, View, SafeAreaView, Dimensions, FlatList, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../globalStyles/styles'
import Api from '../Apis/ApiPaths';
import AsyncStorage from "@react-native-async-storage/async-storage"

const { height, width } = Dimensions.get("window")

const GoalSelectionScreen = (props) => {

    const [selected, setSelected] = useState('');
    const [showIndicater, setShowIndicater] = useState(false);
    const [user, setUser] = useState(null)

    const blankCircle = require("../../assets/blankCircle.png");
    const filledCircle = require("../../assets/filledCircle.png");


    const nxtBtnHandle = async () => {
        setShowIndicater(true)
        try {

            const data = await AsyncStorage.getItem("USER")

            if (data) {
                let u = JSON.parse(data)
                console.log('get data is', u)
                console.log('get data is', u.token)


                const token = u.token
                const result = await fetch(Api.ApiUpdateGoals, {
                    method: 'post',
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                    body: JSON.stringify({
                        "goals":[selected]
                    })
                })
                if (result) {
                    console.log("result is ", result)

                    let json = await result.json()
                    if (json.status === true) {
                        setShowIndicater(false)
                        console.log("result is ", json)
                        props.navigation.navigate('ProfileScreen')

                    }
                }
            }
        } catch (error) {
            console.log("error finding ", error)
        }

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

    ];

    const goalsSelection = (itemId) =>{
        const updatedSelectedItems = selected.includes(itemId)
        ? selected.filter((id) => id !== itemId)
        : [...selected, itemId];
  
      setSelected(updatedSelectedItems);
    };

    const renderItem = ({item})=>(
        <TouchableOpacity key={item.id} onPress={()=> goalsSelection(item.id)}
        >
            <View style={{
                flexDirection: 'row', gap: 8, height: 56 / 926 * height, width: 370 / 429 * width, marginTop: 8 / 926 * height,
                backgroundColor: selected.includes(item.id) ?  "#d4473f" : '#0f0f0f', borderRadius: 16 / 924 * height, alignItems: 'center', paddingLeft: 50 / 429 * width
            }}>
                <Image source={selected.includes(item.id )? filledCircle : blankCircle} style={{ height: 20 / 924 * height, width: 20 / 429 * width, resizeMode: 'contain', }} />
                <Text style={{ fontSize: 12, fontWeight: '500', color: '#fff', }}>{item.name}</Text>

            </View>
        </TouchableOpacity>
    )


    return (
        <SafeAreaView style={{ backgroundColor: '#0f0f0f', height: height }}>

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
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/PageControl1.png')} style={{ height: 393 / 924 * height, width: 44 / 423 * width }} />
                    {/* <ScrollView style={{ height: 550 / 924 * height, marginTop: 50 / 926 * height }}> */}
                       <FlatList
                            data={goals}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    {/* </ScrollView> */}

                </View>


                {showIndicater ? <ActivityIndicator color="#fff" size={'large'} style={{marginTop:30/924*height }} /> :
                    <TouchableOpacity style={[globalStyles.capsuleBtn, { marginTop: 30 / 924 * height }]}
                        onPress={nxtBtnHandle}
                    >
                        <Text style={globalStyles.capsuleBtnText}>
                            Continoue
                        </Text>
                    </TouchableOpacity>
                }

            </View>
        </SafeAreaView>
    )
}

export default GoalSelectionScreen

const styles = StyleSheet.create({})