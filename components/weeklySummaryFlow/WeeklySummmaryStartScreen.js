import React, { useEffect, useState,  } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { Text, StyleSheet, View, SafeAreaView, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import Api from '../Apis/ApiPaths'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Moods from '../../models/moods'
import GoogleCalenderScreen from '../googleCalender/GoogleCalenderScreen';
import BlankJournalScreen from '../journalFlow/BlankJournalScreen';
import AiChatScreen from '../AiChatFlow/AiChatScreen';




const { height, width } = Dimensions.get('window')

const WeeklySummaryMainScreen = (props) => {

    const hep = require("../../assets/gradientImage.png");
    const lep = require("../../assets/lowEnergyUnpleasant (2).png");
    const heup = require("../../assets/highUnEnergyPleasantBg.png");
    const leup = require("../../assets/lowEnergyUnpleasant (2).png");

    const [checkIn, setCheckIn] = useState(null);
    const [user, setUser] = useState(null)


    const getLocalProfile = async () => {
        let data = await AsyncStorage.getItem("USER")
        console.log("Local profile ", data)
        if (data) {
            let json = JSON.parse(data)
            console.log("User is ", json)
            setUser(json)
            setCheckIn(json.user)
        }
    }


    // useEffect(()=>{
    //     if(profileUpdated){
    //         setProfileUpdated(false)
    //         getLocalProfile()
    //     }
    //     else{

    //     }
    // }, [profileUpdated])


    useEffect(() => {
        const getUserProfile = async () => {
            try {

                const data = await AsyncStorage.getItem('USER')

                if (data) {
                    let u = JSON.parse(data)
                    setUser(u)
                    console.log('user saved profile is', u)
                    const token = u.token
                    const result = await fetch(Api.ApiGetProfile, {
                        method: 'post',
                        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                    })
                    if (result) {
                        // console.log("result is ", result)

                        let json = await result.json()
                        if (json.status === true) {
                            // setProfile(json.data)

                            if (json.data.lastcheckin !== null) {
                                setCheckIn(json.data)
                                console.log("get profile data is ", checkIn)

                            }
                        }
                    }
                }
            } catch (error) {
                console.log("error finding ", error)
            }

        };
        // selectChickInColor();
        getUserProfile();

       
    }, [])

    useFocusEffect(
        React.useCallback(() => {
            console.log("Use Focus Effect")
            getLocalProfile()
        }, [])
      );

    

    const checkInPressHandle = () => {
        // eventEmitter.emit(PlurawlEvents.EventProfileUpdated, {data: "Hello Profile updated"});
        props.navigation.navigate('CheckInFirstScreen')
    };


    const selectCheckInBg = () => {
        if (checkIn === null || checkIn.lastcheckin === null) {
            // console.log("Gray")
            return
        }
        if (checkIn.lastcheckin.mood === Moods.MoodHep) {
            // console.log("hep")
            return hep;
        }

        if (checkIn.lastcheckin.mood === Moods.MoodHeup) {
            // console.log("heup")
            return heup;
        }
        if (checkIn.lastcheckin.mood === Moods.MoodLep) {
            // console.log("lep")
            return lep;
        }
        if (checkIn.lastcheckin.mood === Moods.MoodLeup) {
            // console.log("leup")
            return leup;
        }

    };

    const selectChekInColor = () => {
        if (checkIn === null || checkIn.lastcheckin === null) {
            // console.log("Gray")
            return "gray"
        }
        if (checkIn.lastcheckin.mood === Moods.MoodHep) {
            // console.log("hep c")
            return '#FCD860';
        }

        if (checkIn.lastcheckin.mood === Moods.MoodHeup) {
            // console.log("heup c")
            return "#ED9F01";
        }
        if (checkIn.lastcheckin.mood === Moods.MoodLep) {
            // console.log("lep c")
            return '#6084FC';
        }
        if (checkIn.lastcheckin.mood === Moods.MoodLeup) {
            // console.log("leup c")
            return "#393994";
        }

    };


    const selectChekInText = () => {
        if (checkIn === null || checkIn.lastcheckin === null) {
            // console.log("Gray")
            return "Check In"
        }
        else {
            return checkIn.lastcheckin.feeling
        }
    };

    const AiChatHandle = () =>{
        // console.log("user data fo ai chat screen ",user.user)
        }

    return (
        <SafeAreaView style={{ backgroundColor: '#0f0f0f', flex: 1, }}>
            <View style={{ backgroundColor: '#0f0f0f', alignItems: "center", width: width, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', width: width - 40 / 429 * width, marginTop: 20 }}>
                    <View style={{ flexDirection: 'column', }}>

                        <Text style={{ fontSize: 14, fontWeight: '500', color: '#fff', }}>
                            Good morning,
                        </Text>
                        <Text style={{ fontSize: 30, fontWeight: '500', color: '#fff', }}>
                            {user ? user.user.name : ""}
                        </Text>

                    </View>

                    <TouchableOpacity style={{
                        borderWidth: 1, borderColor: selectChekInColor(), borderRadius: 80 / 924 * height, alignItems: 'center',
                        padding: 10 / 924 * height, flexDirection: 'row', gap: 10
                    }} onPress={checkInPressHandle}>
                        <View style={{
                            height: 24 / 924 * height, width: 24 / 924 * height, backgroundColor: selectChekInColor(), borderRadius: 12 / 924 * height
                        }}></View>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: '#fff' }}>{selectChekInText()}</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ width: width, height: 1, backgroundColor: '#0F0F0F', marginTop: 15 / 924 * height }}></View>
                {(checkIn && checkIn.lastcheckin) ? <TouchableOpacity onPress={()=>props.navigation.navigate("LastWeekVibes")}>
                    <View style={{ overflow: 'hidden', height: 121 / 924 * height, width: width - 40 / 429 * width, borderRadius: 20 / 924 * height, }}>
                        <ImageBackground source={selectCheckInBg()} style={{ height: 121 / 924 * height, width: width - 40 / 429 * width, borderRadius: 30 / 924 * height, }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 / 924 * height }}>
                                <View style={{ flexDirection: 'column', }}>
                                    <Text style={{ fontSize: 18, fontWeight: '500', }}>Last week's vibe</Text>
                                    <Text style={{ fontSize: 12, fontWeight: "500", color: '#000' }}>{user?user.user.lastWeekVibe.dateString:''}</Text>
                                    <Text style={{ fontSize: 12, fontWeight: "500", color: '#000', marginTop: 23 / 924 * height }}>Summary • Tips • Soundtrack</Text>
                                </View>

                                <View style={{ height: 90 / 924 * height, width: 95 / 926 * height, overflow: 'hidden', borderRadius: 10 / 924 * height, }}>
                                    <Image source={require('../../assets/Rectangle.gif')} style={{ height: 90 / 924 * height, width: 95 / 924 * height, }} />
                                </View>
                            </View>
                        </ImageBackground>
                    </View>

                </TouchableOpacity> : defaultWeeklyVibeView()}

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 / 426 * width, width: width - 40 / 429 * width, marginTop: 20 / 924 * height }}>

                    <View
                        style={{
                            height: 174 / 924 * height, width: 191 / 426 * width, backgroundColor: '#1C1C1C', alignItems: 'center',
                            padding: 15 / 924 * height, justifyContent: 'center', borderRadius: 15 / 924 * height
                        }}>

                        <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>{user ? user.user.quote_of_day.quote : ''}</Text>
                    </View>

                    <TouchableOpacity >
                        <GoogleCalenderScreen/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ width: 390 / 426 * width, height: 87 / 924 * height, borderRadius: 16 / 924 * height, backgroundColor: "#1c1c1c", marginTop: 10 / 924 * height }} 
                   
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 / 426 * width, padding: 15 / 924 * height, paddingBottom: 10 / 924 * height }}>

                        <Image source={require('../../assets/colorfullCircle.png')} style={{ height: 24 / 924 * height, width: 24 / 924 * height }} />
                        <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500', }}>Chat w/ Plurawl.ai</Text>
                    </View>
                    <Text style={{ color: '#F8EDDA75', fontSize: 14, fontWeight: '500', paddingLeft: 15 / 426 * width }}>Lorem ipsum dolor sit amet consectetur.</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', width: 390 / 426 * width, marginTop: 10 / 924 * height, gap: 8 / 426 * width }}>

                    <TouchableOpacity style={{ height: 56 / 924 * height, width: 191 / 423 * width, backgroundColor: "#1c1c1c", borderRadius: 16 / 924 * height, }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 / 426 * width, padding: 17 / 952 * height }}>
                            <Image source={require('../../assets/insightIcon.png')} style={{ height: 16 / 924 * height, width: 16 / 924 * height, resizeMode: 'contain' }} />
                            <Text style={{ color: '#fff', fontSize: 14, fontWeight: '700', }}>Insights</Text>
                        </View>

                    </TouchableOpacity>
                    {/* comment */}
                    <TouchableOpacity style={{ height: 56 / 924 * height, width: 191 / 423 * width, backgroundColor: "#1c1c1c", borderRadius: 16 / 924 * height, }}
                        onPress={() => { props.navigation.navigate("JournalsList") }}
                    >

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 / 426 * width, padding: 17 / 952 * height }}>
                            <Image source={require("../../assets/pageIcon.png")} style={{ height: 16 / 924 * height, width: 16 / 924 * height, resizeMode: 'contain' }} />
                            <Text style={{ color: '#fff', fontSize: 14, fontWeight: '700', }}>My journal</Text>
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', width: 390 / 426 * width, marginTop: 10 / 924 * height, gap: 8 / 426 * width }}>

                    <TouchableOpacity style={{ height: 56 / 924 * height, width: 191 / 423 * width, backgroundColor: "#1c1c1c", borderRadius: 16 / 924 * height, }}
                        onPress={() => props.navigation.navigate("SettingsMainScreen")}
                    >

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 / 426 * width, padding: 17 / 952 * height }}>
                            <Image source={require('../../assets/settingsIcon.png')} style={{ height: 16 / 924 * height, width: 16 / 924 * height, resizeMode: 'contain' }} />
                            <Text style={{ color: '#fff', fontSize: 14, fontWeight: '700', }}>Settings</Text>
                        </View>

                    </TouchableOpacity>

                    <View style={{ height: 56 / 924 * height, width: 191 / 423 * width, }}>
                    </View>
                </View>


                <TouchableOpacity style={{ marginTop: 50 / 924 * height, }}
                    onPress={() => props.navigation.navigate("BlankJournalScreen")}

                >
                    <Image source={require('../../assets/addBtn.png')} style={{ height: 58 / 924 * height, width: 58 / 924 * height, resizeMode: 'contain' }} />
                </TouchableOpacity>

            </View>
        </SafeAreaView>

    );
    function defaultWeeklyVibeView() {
        return <View style={{ padding: 25 / 924 * height, borderWidth: 1, borderColor: '#F8EDDA25', borderRadius: 16 / 924 * height, width: 390 / 429 * width, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: '500', color: '#F8EDDA50', }}>Your weekly vibe</Text>
            <Text style={{ fontSize: 12, fontWeight: '500', color: '#F8EDDA50', textAlign: 'center', width: 290 / 429 * width }}> A weekly summary of your journals featuring tips, reflection, and music trends.</Text>

            <TouchableOpacity style={{ marginTop: 32 / 924 * height, }} onPress={()=>props.navigation.navigate("BlankJournalScreen")}>
                <Text style={{ fontSize: 12, fontWeight: '500', color: '#D44740' }}>Create your first journal</Text>
            </TouchableOpacity>
        </View>;
    }
}


export default WeeklySummaryMainScreen;


const styles = StyleSheet.create({})
