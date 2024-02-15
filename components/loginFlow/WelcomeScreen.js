import React, { useState, useEffect } from 'react'
import { Dimensions, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native'
import { globalStyles } from '../globalStyles/styles';
import Api from '../Apis/ApiPaths';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = (props) => {

    const { height, width } = Dimensions.get('window');
    const [user,setUser] = useState(null)

    useEffect(() => {
        const getUserProfile = async () => {
            try {
                const data = await AsyncStorage.getItem("USER")
                if (data) {
                    let u = JSON.parse(data)
                    setUser(u)

                    const token = u.token
                    const result = await fetch(Api.ApiGetProfile, {
                        method: 'post',
                        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                    })
                    if (result) {
                        let json = await result.json()
                        if (json.status === true) {
                            console.log("profile is ", json)
                            if (json.data.lastcheckin !== null) {
                                setCheckIn(true)
                            }
                        }
                    }
                }
            } catch (error) {
                console.log("error finding ", error)
            }
        };

        getUserProfile();
    }, [])

    const checkinHandle = () => {
        props.navigation.navigate("CheckInFirstScreen")
    };
    const exploreHandle = () => {
        props.navigation.navigate("WeeklySummaryMainScreen")
    };


    return (
        <SafeAreaView style={{ backgroundColor: '#0f0f0f', flex: 1, }}>
            <View style={{ backgroundColor: '#0f0f0f', alignItems: "center", width: width, justifyContent: 'center' }}>
                <Text style={{ color: "#fff", fontSize: 15, fontWeight: '700', marginTop: 133 / 952 * height }}>Welcome,</Text>
                <Text style={{ color: "#fff", fontSize: 25, fontWeight: '700', marginTop: 10 }}>Pabel</Text>
                <Text style={{ color: "#fff", fontSize: 12, fontWeight: '500', marginTop: 10 }}>New account created </Text>
                <Image source={require('../../assets/profileImage.png')}
                    style={{ height: 155 / 924 * height, width: 155 / 924 * height, borderRadius: 77 / 924 * height, marginTop: 20 / 924 * height, resizeMode: 'contain' }}
                />
                <Text style={{ color: "#fff", fontSize: 15, fontWeight: '500', marginTop: 200 / 924 * height }}>Let's get started with a check-in. </Text>
                <TouchableOpacity style={[globalStyles.capsuleBtn, { marginTop: 60 / 924 * height, width: 345 / 426 * width }]}
                    onPress={checkinHandle}
                >
                    <Text style={globalStyles.capsuleBtnText}>check-in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 16 / 924 * height, }}
                    onPress={exploreHandle}
                >
                    <Text style={{ color: "red", fontSize: 13, fontWeight: "500" }}>Explore</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}


export default WelcomeScreen
