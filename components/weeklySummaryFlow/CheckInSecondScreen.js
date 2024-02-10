import React, { Component, useEffect, useState } from 'react';
import { Text, StyleSheet, View, ImageBackground, Dimensions, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios'
import CheckInThirdScreen from './CheckInThirdScreen';
const { height, width } = Dimensions.get('window');

export default CheckInSecondScreen = ({ route, navigation }) => {

    const [moods, setMoods] = useState([]);
    const [showIndicater, setShowIndicater] = useState(true);
    const [selectedFeelings, setSelectedFeelings] = useState(null);

    const userMood = route.params.mood;
    // console.log(userMood)

    const onpressHandle = (selectedMood) => {
        setSelectedFeelings(selectedMood); // Update selected feelings

        // Now update userMood with the selected feelings
        userMood.feelings = selectedMood;
        console.log("user feelings and mood is ", userMood);

        navigation.navigate("CheckInThirdScreen", {
            mood: userMood
        })
    }


    useEffect(() => {
        generateListOfMoods()
    }, [])





    async function generateListOfMoods() {
        console.log("Fetching moods from gpt")
        let messageData = [];
        messageData.push({
            role: "user",
            content: `Generate me a list of ${process.env.EXPO_PUBLIC_API_MOODS_COUNT} single word moods that fall under this category. Category: ${route.params.mood.currentMood} .
             Make sure the list is comma separate list and there is nothing extra on the list so that i can parse it easily in the code.And give me array item stated by fist capital letter` // this data is being sent to chatgpt so only message should be sent
        });
        const APIKEY = process.env.EXPO_PUBLIC_API_OPENAI_API_KEY;
        // console.log(APIKEY)
        // console.log(messageData)
        const headers = {}
        const data = {
            model: "gpt-4-1106-preview",
            messages: messageData,
            // max_tokens: 1000,
        }
        try {
            const result = await axios.post("https://api.openai.com/v1/chat/completions", data, {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${APIKEY}`
                }
            });

            console.log("Api result is ", result)
            if (result.status === 200) {
                let gptMessage = result.data.choices[0].message.content;
                console.log("List of moods is ", gptMessage)
                let listOfMoods = gptMessage.split(",")
                setMoods(listOfMoods)
                setShowIndicater(false)
                console.log("Moods array is ", listOfMoods)
                // return gptMessage;
            }
            else {
                return null;
            }
        }
        catch (error) {
            console.log("Exception in open ai call ", error)
        }
    }


    return (
        <View style={{ height: height, width: width }}>
            <ImageBackground style={{ height: height, width: width }} source={require('../../assets/CheckIn2Bg.png')}>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: height, width: width, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width - 60, marginTop: 30 / 924 * height }}>

                        <TouchableOpacity style={{ height: 36 / 924 * height, width: 85 / 429 * width, }} onPress={() => navigation.goBack()}>
                            <Image source={require('../../assets/backBtn.png')}
                                style={{ height: 36 / 924 * height, width: 85 / 429 * width, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>

                        <Image source={require('../../assets/3dot2Image.png')}
                            style={{ height: 24 / 924 * height, width: 64 / 429 * height, resizeMode: 'contain' }}
                        />

                        <TouchableOpacity style={{ height: 36 / 924 * height, width: 85 / 429 * width, }} onPress={() => navigation.navigate("WeeklySummaryMainScreen")}>
                            <Image source={require('../../assets/cancelBtn.png')}
                                style={{ height: 36 / 924 * height, width: 85 / 429 * width, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>

                    </View>
                    <Text style={{ fontSize: 16, fontWeight: '500', marginTop: 55 / 952 * height }}>How are you feeling?</Text>
                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#12121235', marginTop: 8 / 924 * height }}>{userMood.currentMood}</Text>
                    <View style={{ marginTop: 45 / 924 * height, height: 560 / 824 * height, }}>
                        {showIndicater ? <ActivityIndicator color="#fff" size={'large'} /> : <FlatList
                            showsVerticalScrollIndicator={false}
                            columnWrapperStyle={{ gap: 10 / 423 * width, paddingBottom: 15 / 924 * height, }}
                            data={moods}
                            numColumns={3}

                            renderItem={({ item }) => (

                                <TouchableOpacity style={{
                                    height: 113 / 924 * height, width: 113 / 924 * height, backgroundColor: '#9EB4FF',
                                    borderRadius: 57 / 952 * height, alignItems: 'center', justifyContent: 'center',
                                }} onPress={() => { onpressHandle(item) }}

                                >
                                    <Text style={{ textAlign: 'center', fontSize: 12, fontWeight: '500' }}>{item}</Text>

                                </TouchableOpacity >
                            )}
                            keyExtractor={(item, index) => index.toString()}

                        />}
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
