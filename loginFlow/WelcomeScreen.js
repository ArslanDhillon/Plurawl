import React from 'react'
import { Dimensions, SafeAreaView, Text, View ,Image, TouchableOpacity} from 'react-native'
import { globalStyles } from '../splashFlow/globalStyles/styles'

const WelcomeScreen = (props) => {

    const {height,width} = Dimensions.get('window')

    const nxtBtnHandle = () =>{
        props.navigation.navigate('WeeklySummaryMainScreen')
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#0f0f0f', flex: 1, }}>
            <View style={{ backgroundColor: '#0f0f0f', height: height, alignItems: "center", width: width, justifyContent: 'center' }}>
                <Text style = {{color:"#fff",fontSize:15,fontWeight:'700',marginTop:133/952*height}}>Welcome,</Text>
                <Text style = {{color:"#fff",fontSize:25,fontWeight:'700',marginTop:10}}>Pabel</Text>
                <Text style = {{color:"#fff",fontSize:12,fontWeight:'500',marginTop:10}}>New account created </Text>
                <Image source={require('../assets/profileImage.png')} 
                    style = {{height:155/924*height ,width:155/924*height,borderRadius:77/924*height,marginTop: 20/924*height,resizeMode:'contain'}}
                />
                <Text style = {{color:"#fff",fontSize:15,fontWeight:'500',marginTop:200/924*height}}>Let's get started with a check-in. </Text>
                <TouchableOpacity style = {[globalStyles.capsuleBtn,{marginTop:60/924*height,width:345/426*width}]}
                    onPress={nxtBtnHandle}
                >
                    <Text style = {globalStyles.capsuleBtnText}>check-in</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{marginTop:16/924*height,}} >
                    <Text style = {{color:"red",fontSize:13,fontWeight:"500"}}>Explore</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}


export default WelcomeScreen
