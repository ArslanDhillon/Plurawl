import React, { useState } from 'react'
import { Text, StyleSheet, View, Dimensions, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { globalStyles } from '../globalStyles/styles';
const { height, width } = Dimensions.get('window');
import moment from 'moment/moment';
export default CheckInFirstScreen = ({ route, navigation }) => {

    const userMood = route.params.mood;
    console.log(userMood)

    const closeBtnHandle = () => {
        navigation.navigate('WeeklySummaryMainScreen')
    };


    const dateTimeString = userMood.lastcheckin.createdAt;
    const formattedDateTime = moment(dateTimeString).format('hh:mm a MMMM DD, YYYY');
    console.log(formattedDateTime)

    return (
        <View style={{ height: height, width: width }}>
            <ImageBackground style={{ height: height, width: width }} source={require('../../assets/CheckIn2Bg.png')}>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: height, width: width, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width - 60 }}>
                        <Text style={{ fontSize: 12, fontWeight: '700', color: '#12121250' }}>Your new mood </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('WeeklySummaryMainScreen')} >
                            <Image source={require('../../assets/crossBtn.png')}
                                style={{ height: 40 / 924 * height, width: 40 / 924 * height, }} />

                        </TouchableOpacity>

                    </View>
                    <View style={{
                        flexDirection: 'row', width: width - 60, alignItems: 'flex-start', gap: 10 / 952 * height,
                        marginTop: 32 / 924 * height, alignItems: 'center'
                    }}>
                        <Text style={{ fontSize: 25, fontWeight: '500', }}>{userMood.lastcheckin.feeling}</Text>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: '#12121235', }}>/{userMood.lastcheckin.acronym}/</Text>
                    </View>
                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#000', marginTop: 50 / 924 * height, width: width - 60 }}>{userMood.lastcheckin.description}</Text>
                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#12121250', marginTop: 15 / 924 * height, width: width - 60 }}>{userMood.lastcheckin.mood}  {formattedDateTime} </Text>
                    <View style={{ alignItems: 'center', marginTop: 340 / 924 * height, width: width - 60, }}>
                        <Text style={{ fontSize: 25, fontWeight: '400', color: '#007308', }}>+1</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 30, fontWeight: '500' }}>156</Text>
                        <Text style={{ fontSize: 14, fontWeight: '500' }}>  points</Text>
                    </View>
                    <Text style={{ fontSize: 12, fontWeight: '500' }}>You’ve been awarded 1 point for this check in </Text>
                    <TouchableOpacity style={[globalStyles.capsuleBtn, { marginTop: 32 / 924 * height,backgroundColor:'#25252555' }]}
                        onPress={closeBtnHandle} >
                        <Text style={globalStyles.capsuleBtnText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

