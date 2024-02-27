import {
    SafeAreaView, StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity,
    Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, ActivityIndicator,

} from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '../globalStyles/styles';
import Api from '../Apis/ApiPaths';

import AsyncStorage from "@react-native-async-storage/async-storage";

const { height, width } = Dimensions.get('window');


const SignInScreen = (props) => {

    const line = require("../../assets/line.png")

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showIndicater, setShowIndicater] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        const checkUserStatus = async () => {
            try {
                const data = await AsyncStorage.getItem("USER")
                if (data) {
                    props.navigation.navigate("WeeklySummaryMainScreen")
                }
            } catch (error) {
                console.log(error)
            }
        };
        checkUserStatus();
    }, [])

    const postData = {
        name: name,
        email: email,
        password: password,
    }

    const nxtBtnHAndle = async () => {

        setShowIndicater(true)

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validEmail = emailRegex.test(email);


        if (!name || !email || !password) {

            setError("Enter all cridentials")
            setShowIndicater(false)

        } else if (!validEmail) {

            setError('Enter Valid email')
            setShowIndicater(false)

        } else {
            try {
                const result = await fetch(Api.ApiRegisterUser, {
                    method: 'post',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(postData)
                })
                if (result) {
                    let json = await result.json();
                    console.log(json)
                    if (json.status == true) {
                        setShowIndicater(false)
                        await AsyncStorage.setItem(
                            "USER",
                            JSON.stringify(json.data)
                        )
                        console.log("Stored user data in local is ", json.data)

                        props.navigation.navigate("GoalSelectionScreen")
                    }
                    else {
                        setShowIndicater(false)
                        setError(json.message)
                    }

                }
            } catch (error) {
                setShowIndicater(false)

                console.log('error finding', error)
            }
        }
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#0f0f0f', height: height }}>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1, flexDirection: 'column', }}>
                <TouchableWithoutFeedback style={globalStyles.container} onPress={Keyboard.dismiss}>


                    <View style={{ height: height, backgroundColor: '#0f0f0f', alignItems: 'center', justifyContent: 'center' }}>

                        {/* <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, justifyContent: 'center', }}> */}
                        <Image
                            source={require('../../assets/userIcon.png')} style={{ height: 33 / 926 * height, width: 33 / 429 * width, marginTop: 5,resizeMode:'contain' }}
                        />
                        <Text style={{ fontSize: 28, fontWeight: '500', color: "#fff" }}>Create account</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: "#F8EDDA75", marginTop: 15 / 924 * height }}>Lorem ipsum dolor sit amet consectetur. </Text>
                        {/* </View> */}
                        <View style={[globalStyles.inputContainer, { marginTop: 30 / 924 * height }]}>
                            <Text style={globalStyles.inputText}>Name:</Text>
                            <TextInput placeholder='' style={globalStyles.inputPlacholder}
                                value={name}
                                onChangeText={(text) => {
                                    setName(text)
                                    setError(null)
                                }}
                            />
                        </View>
                        <View style={globalStyles.inputContainer}>
                            <Text style={globalStyles.inputText}>Email:</Text>
                            <TextInput placeholder='' style={globalStyles.inputPlacholder}
                                autoCapitalize='none'
                                value={email}
                                onChangeText={(text) => {
                                    setEmail(text)
                                    setError(null)
                                }} />
                        </View>
                        <View style={globalStyles.inputContainer}>
                            <Text style={globalStyles.inputText}>Password:</Text>
                            <TextInput placeholder='' style={globalStyles.inputPlacholder} secureTextEntry={true}
                                value={password}
                                onChangeText={(text) => {
                                    setPassword(text)
                                    setError(null)
                                }} />
                        </View>

                        {error ? error && <Text style={{ color: 'red' }}>{error}</Text> : ''}


                        {
                            showIndicater ? <ActivityIndicator color="#fff" size={'large'} style={{ marginTop: 30 / 924 * height }} /> :
                                <TouchableOpacity style={[globalStyles.capsuleBtn, { width: 323 / 429 * width, marginTop: 25 / 926 * height }]}
                                    onPress={nxtBtnHAndle}
                                >
                                    <Text style={globalStyles.capsuleBtnText}>
                                        Sign Up
                                    </Text>
                                </TouchableOpacity>
                        }


                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 / 926 * height }}>
                            <Image source={line} style={{ width: 109 / 426 * width, height: 1 }} />
                            <Text style={{ fontSize: 11, fontWeight: '500', color: '#fff', marginLeft: 24 / 429 * width, marginRight: 24 / 429 * width }}>or sign up with </Text>
                            <Image source={line} style={{ width: 109 / 426 * width, height: 1 }} />

                        </View>


                        <TouchableOpacity style={[globalStyles.rectangularBtn, { marginTop: 25 / 926 * height, backgroundColor: '#000', }]}>
                            <View style={{ flexDirection: 'row', gap: 8 }}>
                                <Image source={require("../../assets/appleIcon.png")} style={globalStyles.rectangularBtnImage} />
                                <Text style={globalStyles.rectangularBtnText} >Sign In with Apple</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[globalStyles.rectangularBtn, { marginTop: 16 / 926 * height, backgroundColor: '#E2E2E2', }]}>
                            <View style={{ flexDirection: 'row', gap: 8 }}>
                                <Image source={require("../../assets/googleIcon.png")} style={globalStyles.rectangularBtnImage} />
                                <Text style={[globalStyles.rectangularBtnText, { color: '#00000055' }]} >Sign Up with Google</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={[globalStyles.rectangularBtn, { marginTop: 16 / 926 * height, backgroundColor: '#135FC2', }]}>
                            <View style={{ flexDirection: 'row', gap: 8 }}>
                                <Image source={require("../../assets/facebookIcon.png")} style={globalStyles.rectangularBtnImage} />
                                <Text style={globalStyles.rectangularBtnText} >Log In with Facebook</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginTop: 85 / 924 * height, marginBottom: 50 }}
                            onPress={() => props.navigation.navigate("LoginScreen")}
                        >
                            <Text style={[globalStyles.capsuleBtnText, { color: '#D44740' }]}>Already a user? Sign in</Text>
                        </TouchableOpacity>







                    </View>

                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}

export default SignInScreen

const styles = StyleSheet.create({})