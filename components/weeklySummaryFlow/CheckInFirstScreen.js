import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, Dimensions, ImageBackground, Image, TouchableOpacity } from 'react-native'
import Moods from '../../models/moods';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';


const { height, width } = Dimensions.get('window');

export default CheckInFirstScreen = (props) => {

    const hepBg = require('../../assets/hepBg.png')
    const heupBg = require('../../assets/heupBg.png')
    const lepBg = require('../../assets/lepBg.png')
    const leupBg = require('../../assets/leupBg.png')
    const greyBg = require('../../assets/greyBg.png')

    const [user,setUser] = useState(null)

    useEffect(()=>{

        const getUserData = async () =>{

            const data =await AsyncStorage.getItem('USER')

            if(data){
                let u = JSON.parse(data)
                if(u.user.lastcheckin !== null)
                setUser(u)
                console.log('user get data from local is ',u.user.lastWeekVibe.checkins)
            }
            
        };
        getUserData();

    },[]);

    const getBg = ()=>{
        if(user === null){
            return greyBg
        }
        if( user.user.lastcheckin.mood.toLowerCase() === Moods.MoodHep.toLowerCase()){
            return hepBg
        } 
        if( user.user.lastcheckin.mood.toLowerCase() === Moods.MoodHeup.toLowerCase()){
            return heupBg
        }
        if( user.user.lastcheckin.mood.toLowerCase() === Moods.MoodLep.toLowerCase()){
            return lepBg
        }
        if( user.user.lastcheckin.mood.toLowerCase() === Moods.MoodLeup.toLowerCase()){
            return leupBg
        }
    };

    const getColor = ()=>{
        if(user === null){
            return "#1c1c1c"
        }
        if( user.user.lastcheckin.mood.toLowerCase() === Moods.MoodHep.toLowerCase()){
            return '#FCD860';
        } 
        if( user.user.lastcheckin.mood.toLowerCase() === Moods.MoodHeup.toLowerCase()){
            return "#ED9F01";
        }
        if( user.user.lastcheckin.mood.toLowerCase() === Moods.MoodLep.toLowerCase()){
            return lepBg
        }
        if( user.user.lastcheckin.mood.toLowerCase() === Moods.MoodLeup.toLowerCase()){
            return leupBg
        }
    };

    const dateTimeString = user?user.user.lastcheckin.updatedAt:'';
    const formattedDateTime = moment(dateTimeString).format('hh:mm a MMMM DD, YYYY');
    console.log(formattedDateTime)
    return (
        <View style={{ height: height, width: width }}>
            <ImageBackground style={{ height: height, width: width }} source={getBg()}>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: height, width: width, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width - 60 }}>
                        {user?<Text style={{ fontSize: 12, fontWeight: '700', color: '#12121250' }}>Your last mood was</Text>:''}
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <Image source={require('../../assets/crossBtn.png')}
                                style={{ height: 40 / 924 * height, width: 40 / 924 * height, }} />
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        flexDirection: 'row', width: width - 60, alignItems: 'flex-start', gap: 10 / 952 * height,
                        marginTop: 32 / 924 * height
                    }}>
                        <Text style={{ fontSize: 30, fontWeight: '500' }}>{user?user.user.lastcheckin.feeling:''}</Text>
                        <Text style={{ fontSize: 12, fontWeight: '500', paddingTop: 15 / 924 * height }}>{user?user.user.lastcheckin.acronym:''}</Text>
                    </View>


                    <View style={{ width: width - 60, alignItems: 'flex-start', }}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: '#12121250', marginTop: 16 / 952 * height, }}>
                        {user?user.user.lastcheckin.description:''}
                        </Text>
                        <Text style={{ fontSize: 10, fontWeight: '500', color: '#12121235', marginTop: 16 / 952 * height, }}>
                        {user?user.user.lastcheckin.mood:''}  {user?formattedDateTime:''}
                        </Text>

                    </View>

                    <View style={{
                        height: 431 / 924 * height, width: 394 / 426 * width, backgroundColor: "#25252555", justifyContent: 'center',
                        borderRadius: 32 / 924 * height, marginTop: 200 / 924 * height, alignItems: 'center'
                    }}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: '#fff' }}>What’s your current mood?</Text>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row', gap: 70 / 429 * width }}>
                                <TouchableOpacity style={{ flexDirection: 'column', marginTop: 40 / 924 * height, alignItems: 'center' }}
                                    onPress={() => {
                                        props.navigation.navigate('CheckInSecondScreen',{
                                            mood:{
                                                currentMood: Moods.MoodHep
                                            }
                                        })

                                    }} >
                                    <Image source={require('../../assets/pleasantMoodCircle.png')}
                                        style={{ height: 62 / 924 * height, width: 64 / 924 * height, resizeMode: 'contain' }}
                                    />
                                    <Text style={{ fontSize: 10, fontWeight: '400', color: '#F8EDDA50', marginTop: 13 / 924 * height }}>High energy</Text>
                                    <Text style={{ fontSize: 16, fontWeight: '400', color: '#fff' }}>Pleasant</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ flexDirection: 'column', marginTop: 40 / 924 * height, alignItems: 'center' }}
                                     onPress={() => {
                                        props.navigation.navigate('CheckInSecondScreen',{
                                            mood:{
                                                currentMood:Moods.MoodHeup
                                            }
                                        })

                                    }}  >
                                    <Image source={require('../../assets/unpleasantMoodCircle.png')}
                                        style={{ height: 62 / 924 * height, width: 64 / 924 * height, resizeMode: 'contain' }}
                                    />
                                    <Text style={{ fontSize: 10, fontWeight: '400', color: '#F8EDDA50', marginTop: 13 / 924 * height }}>High energy</Text>
                                    <Text style={{ fontSize: 16, fontWeight: '400', color: '#fff' }}>Unpleasant</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row', gap: 70 / 429 * width }}>
                                <TouchableOpacity style={{ flexDirection: 'column', marginTop: 40 / 924 * height, alignItems: 'center' }}
                                     onPress={() => {
                                        props.navigation.navigate('CheckInSecondScreen',{
                                            mood:{
                                                currentMood: Moods.MoodLep
                                            }
                                        })

                                    }} 
                                >
                                    <Image source={require('../../assets/lowEnergyPleasant.png')}
                                        style={{ height: 62 / 924 * height, width: 64 / 924 * height, resizeMode: 'contain' }}
                                    />
                                    <Text style={{ fontSize: 10, fontWeight: '400', color: '#F8EDDA50', marginTop: 13 / 924 * height }}>Low energy</Text>
                                    <Text style={{ fontSize: 16, fontWeight: '400', color: '#fff' }}>Pleasant</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ flexDirection: 'column', marginTop: 40 / 924 * height, alignItems: 'center' }}
                                     onPress={() => {
                                        props.navigation.navigate('CheckInSecondScreen',{
                                            mood:{
                                                currentMood: Moods.MoodLeup
                                            }
                                        })

                                    }}  >
                                    <Image source={require('../../assets/lowEnergyUnpleasant.png')}
                                        style={{ height: 62 / 924 * height, width: 64 / 924 * height, resizeMode: 'contain' }}
                                    />
                                    <Text style={{ fontSize: 10, fontWeight: '400', color: '#F8EDDA50', marginTop: 13 / 924 * height }}>Low energy</Text>
                                    <Text style={{ fontSize: 16, fontWeight: '400', color: '#fff' }}>Unpleasant</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
};
const styles = StyleSheet.create({})
