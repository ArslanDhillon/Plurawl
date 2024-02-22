import React, { useState } from 'react'
import { Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';


import { globalStyles } from '../globalStyles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../Apis/ApiPaths';
import Moods from '../../models/moods';


const { height, width } = Dimensions.get('window');

const hepBg = require('../../assets/hepBg.png')
const heupBg = require('../../assets/heupBg.png')
const lepBg = require('../../assets/lepBg.png')
const leupBg = require('../../assets/leupBg.png')
const greyBg = require('../../assets/greyBg.png')


export default CheckInThirdScreen = ({ route, navigation }) => {

    const [user, setUser] = useState(null);
    const [showIndicater, setShowIndicater] = useState(false);
    const [data, setData] = useState(null)



    const userMood = route.params.mood;
    console.log('user feelings are ', userMood);

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


    const saveCheckIn = async () => {

        setShowIndicater(true)

        const postData = {
            mood: userMood.currentMood,
            feeling: userMood.feelings.feeling,
            acronym: userMood.feelings.pronunciation,
            description: userMood.feelings.description,
            type: "manual",
        }
console.log("Post Data")
        console.log(postData)

        let u = ''

        try {
            try {
                const data = await AsyncStorage.getItem("USER")
                console.log("enter in try")
                if (data) {
                    

                    u = JSON.parse(data)
                    console.log("enter in data", u)
                    setUser(u)
                    console.log(u)
                }
            } catch (error) {
                setShowIndicater(false)
                console.log("fething error from getting data from local storage ", error)
            }


            const token = u.token;
            const result = await fetch(Api.ApiCheckIn, {
                method: 'post',
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                body: JSON.stringify(postData)
            })
            if (result) {
                // console.log("result is ", result)

                let json = await result.json()
                if (json.status === true) {

                    setShowIndicater(false)
                    setData(json.data)
                    u.user = json.data

                    await AsyncStorage.setItem("USER",JSON.stringify(u))
                    console.log("result is ", json)

                    console.log("post data is", postData)
                   
                    navigation.navigate('CheckInFourthScreen',{
                        mood:json.data
                    })

                }
            }
        } catch (error) {
            setShowIndicater(false)
            console.log("error finding ", error)
        }

    }

    return (
        <View style={{ height: height, width: width }}>
            <ImageBackground style={{ height: height, width: width }} source={getBg()}>
                <View style={{ marginTop: 25 / 924 * height, alignItems: 'center', height: height, width: width, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width - 60, marginTop: 30 / 924 * height }}>

                        <TouchableOpacity style={{ height: 36 / 924 * height, width: 85 / 429 * width, }} onPress={() => navigation.goBack()}>
                            <Image source={require('../../assets/backBtn.png')}
                                style={{ height: 36 / 924 * height, width: 85 / 429 * width, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>

                        <Image source={require('../../assets/3dot3Image.png')}
                            style={{ height: 24 / 924 * height, width: 64 / 429 * height, resizeMode: 'contain' }}
                        />

                        <TouchableOpacity style={{ height: 36 / 924 * height, width: 85 / 429 * width, }} onPress={() => navigation.navigate('WeeklySummaryMainScreen')}>
                            <Image source={require('../../assets/cancelBtn.png')}
                                style={{ height: 36 / 924 * height, width: 85 / 429 * width, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>


                    </View>
                    <Text style={{ fontSize: 25, fontWeight: '500', marginTop: 55 / 952 * height }}>{userMood.feelings.feeling}</Text>
                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#12121235', marginTop: 8 / 924 * height }}>{userMood.feelings.pronunciation}</Text>
                    <Text style={{ fontSize: 20, fontWeight: '500', color: '#000', marginTop: 50 / 924 * height, width: 314 / 426 * width }}>{userMood.feelings.description}</Text>
                    {
                        showIndicater ? <ActivityIndicator color="#fff" size={'large'} style={{ marginTop: 300 / 924 * height }} /> :

                            <TouchableOpacity style={[globalStyles.capsuleBtn, { marginTop: 300 / 924 * height, backgroundColor: '#25252555' }]} onPress={saveCheckIn}>
                                <Text style={globalStyles.capsuleBtnText}>Save</Text>
                            </TouchableOpacity>
                    }
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({})
