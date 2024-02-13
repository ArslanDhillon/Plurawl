import {
    SafeAreaView, StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity,
    Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Platform

} from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '../globalStyles/styles';
import Api from '../Apis/ApiPaths';

const { height, width } = Dimensions.get('window');


const SignInScreen = (props) => {

    const line = require("../../assets/line.png")

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const postData = {
        name:name,
        email:email,
        password:password,
    }

    const nxtBtnHAndle =async () => {

        if(!name||!email||!password){
            
        }

        const result = await fetch(Api.ApiRegisterUser,{
            method:'post',
            headers:{ "Content-Type": "application/json" },
            body:JSON.stringify(postData)
        })
        if (result){
            let json = result.json();
            if(json.status == true){
                props.navigation.navigate("GoalSelectionScreen")
            }
        }
    };

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
                            <Text style={{ fontSize: 20, fontWeight: '500', color: "#fff" }}>Create account</Text>
                        </View>
                        <View style={[globalStyles.inputContainer, { marginTop: 30 / 924 * height }]}>
                            <Text style={globalStyles.inputText}>Name:</Text>
                            <TextInput placeholder='' style={globalStyles.inputPlacholder} autoFocus={true}
                                value={name}
                                onChangeText={(text) => setName(text)}
                            />
                        </View>
                        <View style={globalStyles.inputContainer}>
                            <Text style={globalStyles.inputText}>Email:</Text>
                            <TextInput placeholder='' style={globalStyles.inputPlacholder}
                                value={email}
                                onChangeText={(text) => setEmail(text)} />
                        </View>
                        <View style={globalStyles.inputContainer}>
                            <Text style={globalStyles.inputText}>Password:</Text>
                            <TextInput placeholder='' style={globalStyles.inputPlacholder} secureTextEntry={true}
                                value={password}
                                onChangeText={(text) => setPassword(text)} />
                        </View>

                        <TouchableOpacity style={[globalStyles.capsuleBtn, { width: 323 / 429 * width, marginTop: 25 / 926 * height }]}
                            onPress={nxtBtnHAndle}
                        >
                            <Text style={globalStyles.capsuleBtnText}>
                                Sign Up
                            </Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 163 / 926 * height }}>
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



                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}

export default SignInScreen

const styles = StyleSheet.create({})