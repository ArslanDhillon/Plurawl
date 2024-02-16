import { SafeAreaView, StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform,ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../globalStyles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../Apis/ApiPaths';
import CheckInFirstScreen from '../weeklySummaryFlow/CheckInFirstScreen';

const { height, width } = Dimensions.get('window');


const LoginScreen = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showIndicater, setShowIndicater] = useState(false);
    const [error,setError] = useState(null);


    const loginUser = async () => {
        setShowIndicater(true)
        try {

            let d = JSON.stringify({ email: email, password: password })
            const result = await fetch(Api.ApiLoginUser, {
                method: 'post',
                headers: { "Content-Type": "application/json" },
                body: d
            })
            if (result) {
                let json = await result.json();
                console.log("data is ", json)
                if (json.status === true) {
                    await AsyncStorage.setItem("USER",JSON.stringify(json.data))
                    
                    setShowIndicater(false)
                    props.navigation.navigate("WeeklySummaryMainScreen")
                } else{
                    setShowIndicater(false)
                    setError(json.message)
                }
            }
        }
        catch (error) {
            console.log('fetching error is', error)
        }
    };

    const line = require("../../assets/line.png")

    return (
        <SafeAreaView style={{ backgroundColor: '#0f0f0f' }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1, flexDirection: 'column', }}>
                <TouchableWithoutFeedback style={globalStyles.container} onPress={Keyboard.dismiss}>
                    <View style={{ height: height, backgroundColor: '#0f0f0f', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, justifyContent: 'center', }}>
                            <Image
                                source={require('../../assets/userIcon.png')} style={{ height: 20 / 926 * height, width: 20 / 429 * width, marginTop: 5 }}
                            />
                            <Text style={{ fontSize: 20, fontWeight: '500', color: "#fff" }}>Sign In</Text>
                        </View>

                        <View style={[globalStyles.inputContainer, { marginTop: 30 / 924 * height }]}>

                            <Text style={globalStyles.inputText}>Email:</Text>
                            <TextInput placeholder='' style={globalStyles.inputPlacholder} autoFocus={true}
                                value={email}
                                onChangeText={(text) => {
                                    setEmail(text)
                                    setError(null)
                                }}
                            />
                        </View>
                        <View style={globalStyles.inputContainer}>
                            <Text style={globalStyles.inputText}>Password:</Text>
                            <TextInput placeholder='' style={globalStyles.inputPlacholder} secureTextEntry={true}
                                value={password}
                                onChangeText={(text) => {
                                    setPassword(text)
                                    setError(null)
                                }}
                            />
                        </View>
                        {error?error&& <Text style = {{color:'red'}}>{error}</Text> : ''}
                        {
                            showIndicater ? <ActivityIndicator color="#fff" size={'large'} style={{ marginTop: 30 / 924 * height }} /> :

                                <TouchableOpacity style={[globalStyles.capsuleBtn, { width: 323 / 429 * width, marginTop: 25 / 926 * height }]}
                                    onPress={loginUser}
                                >
                                    <Text style={globalStyles.capsuleBtnText}>
                                        Sign In
                                    </Text>
                                </TouchableOpacity>
                        }


                        <TouchableOpacity style={[globalStyles.rectangularBtn, { marginTop: 235 / 926 * height, backgroundColor: '#000', }]}>
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



                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        </SafeAreaView>

    )
}

export default LoginScreen;

const styles = StyleSheet.create({})