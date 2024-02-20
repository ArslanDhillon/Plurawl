import React, { useState, useEffect,useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignInScreen from '../loginFlow/SignInScreen';
import Api from '../Apis/ApiPaths';



const { height, width } = Dimensions.get('window')

export default function SplashScreen(props) {
    const video =useRef(null);
    const [status, setStatus] =useState({});
    const [user ,setUser] = useState(null)
 
    useEffect(() => {
        const checkUserStatus = async () => {
            console.log("enter in function")
            try {
                const data = await AsyncStorage.getItem("USER")
                if (data) {
                    console.log("enter in function 2")
                    let u = JSON.parse(data)
                    console.log(u)
                    //get user latest profile and set it in local
                    getUserProfile();
                
                    props.navigation.navigate("WeeklySummaryMainScreen")
                }
                else{
                    props.navigation.navigate("SignInScreen")
                    console.log("NO data saved. Take user to login screen")
                }
            } catch (error) {
                console.log("Exception", error)
            }
        };
        checkUserStatus();
    }, []);

    const getUserProfile = async () => {
        try {

            const data = await AsyncStorage.getItem('USER')

            if (data) {
                let u = JSON.parse(data)
                setUser(u)
                console.log('user data from local is', u)
                const token = u.token
                const result = await fetch(Api.ApiGetProfile, {
                    method: 'post',
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                })
                if (result) {
                    // console.log("result is ", result)

                    let json = await result.json()
                    if (json.status === true) {
                        console.log("latest profile is ", json.data)

                        u.user = json.data

                        await AsyncStorage.setItem("USER",JSON.stringify(u.user))
                        
                    }
                }
            }
        } catch (error) {
            console.log("error finding ", error)
        }

    };

    return (

        <View style = {{height:height,backgroundColor:'#000'}}>
            <Video
                source={require("../../assets/video/splashGif.mp4")}
                style={styles.backgroundVideo}
                rate={1}
                shouldPlay={true}
                isLooping={true}
                volume={1}
                muted={true}
                resizeMode={ResizeMode.CONTAIN}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 50,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    backgroundVideo: {
        height:height,
        width:width
    },
});
