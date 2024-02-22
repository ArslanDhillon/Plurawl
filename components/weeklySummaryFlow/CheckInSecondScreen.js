import React, {  useEffect, useState } from 'react';
import { Text, StyleSheet, View, ImageBackground, Dimensions, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios'
import Moods from '../../models/moods';
import Api from '../Apis/ApiPaths';

const { height, width } = Dimensions.get('window');



const hepBg = require('../../assets/hepBg.png')
const heupBg = require('../../assets/heupBg.png')
const lepBg = require('../../assets/lepBg.png')
const leupBg = require('../../assets/leupBg.png')
const greyBg = require('../../assets/greyBg.png')


export default CheckInSecondScreen = ({ route, navigation }) => {

    const userMood = route.params.mood;
    console.log(userMood)

    const getBg = ()=>{
        if(userMood === null){
            return greyBg
        }
        if( userMood.currentMood.toLowerCase() === Moods.MoodHep.toLowerCase()){
            return hepBg
        } 
        if( userMood.currentMood.toLowerCase() === Moods.MoodHeup.toLowerCase()){
            return heupBg
        }
        if( userMood.currentMood.toLowerCase() === Moods.MoodLep.toLowerCase()){
            return lepBg
        }
        if( userMood.currentMood.toLowerCase() === Moods.MoodLeup.toLowerCase()){
            return leupBg
        }
    };

    const getColor = ()=>{
        if(userMood === null){
            return "#1c1c1c50"
        }
        if( userMood.currentMood.toLowerCase() === Moods.MoodHep.toLowerCase()){
            return '#FCD87050';
        } 
        if( userMood.currentMood.toLowerCase() === Moods.MoodHeup.toLowerCase()){
            return "#ED9F0120";
        }
        if( userMood.currentMood.toLowerCase() === Moods.MoodLep.toLowerCase()){
            return '#6084FC50';
        }
        if( userMood.currentMood.toLowerCase() === Moods.MoodLeup.toLowerCase()){
            return "#39399450";
        }
    };

    const [moods, setMoods] = useState([]);
    const [showIndicater, setShowIndicater] = useState(true);
    const [selectedFeelings, setSelectedFeelings] = useState(null);

    

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
        
        console.log("Loading moods api ", Api.ApiGetMoodsList)
        const data = {
            mood: userMood,
            // max_tokens: 1000,
        }
        try {
            axios.get(Api.ApiGetMoodsList, data, {
                headers: {
                    'content-type': 'application/json',
                }
            }).then((result)=>{
                // console.log("Api result is ", result)
                if (result.status === 200) {
                    let gptMessage = result.data.data
                    // gptMessage = gptMessage.replace('```', '');
                    // gptMessage = gptMessage.replace('json', '');
                    // gptMessage = gptMessage.replace('```', '');
                    console.log("List of moods is ", gptMessage)
                    // let listOfMoods = JSON.parse(gptMessage)
                    setMoods(gptMessage)
                    setShowIndicater(false)
                    // console.log("Moods array is ", gptMessage)
                    // return gptMessage;
                }
                else {
                    return null;
                }
            })
            .catch((error)=>{
                console.log("Error in Mood Api ", error)
            })

            
        }
        catch (error) {
            console.log("Exception in open ai call ", error)
        }
    }


    return (
        <View style={{ height: height, width: width }}>
            <ImageBackground style={{ height: height, width: width }} source={getBg()}>
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
                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#FFFFFF20', marginTop: 8 / 924 * height }}>{userMood.currentMood}</Text>
                    <View style={{ marginTop: 45 / 924 * height, height: 560 / 824 * height, }}>
                        {showIndicater ? <ActivityIndicator color="#fff" size={'large'} style ={{marginTop:height/4.5}} /> :
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                columnWrapperStyle={{ gap: 10 / 423 * width, paddingBottom: 15 / 924 * height, }}
                                data={moods}
                                numColumns={3}

                                renderItem={({ item }) => (

                                    <TouchableOpacity style={{
                                        height: 113 / 924 * height, width: 113 / 924 * height, backgroundColor:"#f2f2f250",
                                        borderRadius: 57 / 952 * height, alignItems: 'center', justifyContent: 'center',
                                    }} onPress={() => { onpressHandle(item) }}

                                    >
                                        <Text style={{ textAlign: 'center', fontSize: 12, fontWeight: '500' }}>{item.feeling}</Text>

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
