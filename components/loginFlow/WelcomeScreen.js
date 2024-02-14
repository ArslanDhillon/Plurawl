import React,{useState,useEffect} from 'react'
import { Dimensions, SafeAreaView, Text, View ,Image, TouchableOpacity} from 'react-native'
import { globalStyles } from '../globalStyles/styles';
import Api from '../Apis/ApiPaths';

const WelcomeScreen = (props) => {

    const {height,width} = Dimensions.get('window');

    useEffect(()=>{
        const getUserProfile = async ()=>{
            try {
                const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo1LCJuYW1lIjoiQXNhZCIsImVtYWlsIjoiQXNhZEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRSQkhibElaSkRaTHpUVXI2dkhqTWIudGNxcGJURlZoUzJmSlFIMGR5am9yN1FGOEVXWlZxUyIsInByb2ZpbGVfaW1hZ2UiOiIiLCJjb21wYW55IjpudWxsLCJ0aXRsZSI6bnVsbCwiY2l0eSI6bnVsbCwic3RhdGUiOm51bGwsImdlbmRlciI6bnVsbCwicmFjZSI6bnVsbCwibGdidHEiOm51bGwsInZldGVyYW4iOm51bGwsImZjbV90b2tlbiI6bnVsbCwicHJvdmlkZXJfaWQiOiIiLCJwcm92aWRlcl9uYW1lIjoiRW1haWwiLCJyb2xlIjoidXNlciIsInBvaW50cyI6MCwiY3JlYXRlZEF0IjoiMjAyNC0wMi0xM1QxNDo1MDoxMi4wMDBaIiwidXBkYXRlZEF0IjoiMjAyNC0wMi0xM1QxNDo1MDoxMi4wMDBaIn0sImlhdCI6MTcwNzgzOTA0NywiZXhwIjoxNzM5Mzc1MDQ3fQ.1rL2H-75Ln2QwKDpuOYb8_9diWnvzZCjRsT3-QKL8vk"
                const result = await fetch(Api.ApiGetProfile, {
                    method: 'post',
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                })
                if (result) {
                    console.log("result is ", result)
    
                    let json = await result.json()
                    if (json.status === true) {
                        console.log("result is ", json)
                        if(json.data.lastcheckin !== null){
                            setCheckIn(true)
                        }
                    }
                }
            } catch (error) {
                console.log("error finding ", error)
            }
        };

        getUserProfile();
    },[])

    const checkinHandle = () =>{
        props.navigation.navigate("CheckInFirstScreen")
    };
    const exploreHandle = () =>{
        props.navigation.navigate("WeeklySummaryMainScreen")
    };


    return (
        <SafeAreaView style={{ backgroundColor: '#0f0f0f', flex: 1, }}>
            <View style={{ backgroundColor: '#0f0f0f', alignItems: "center", width: width, justifyContent: 'center' }}>
                <Text style = {{color:"#fff",fontSize:15,fontWeight:'700',marginTop:133/952*height}}>Welcome,</Text>
                <Text style = {{color:"#fff",fontSize:25,fontWeight:'700',marginTop:10}}>Pabel</Text>
                <Text style = {{color:"#fff",fontSize:12,fontWeight:'500',marginTop:10}}>New account created </Text>
                <Image source={require('../../assets/profileImage.png')} 
                    style = {{height:155/924*height ,width:155/924*height,borderRadius:77/924*height,marginTop: 20/924*height,resizeMode:'contain'}}
                />
                <Text style = {{color:"#fff",fontSize:15,fontWeight:'500',marginTop:200/924*height}}>Let's get started with a check-in. </Text>
                <TouchableOpacity style = {[globalStyles.capsuleBtn,{marginTop:60/924*height,width:345/426*width}]}
                    onPress={checkinHandle}
                >
                    <Text style = {globalStyles.capsuleBtnText}>check-in</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{marginTop:16/924*height,}} 
                    onPress={exploreHandle}
                >
                    <Text style = {{color:"red",fontSize:13,fontWeight:"500"}}>Explore</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}


export default WelcomeScreen
