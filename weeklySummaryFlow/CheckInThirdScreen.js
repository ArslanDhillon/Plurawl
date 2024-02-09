import React, { Component } from 'react'
import { Text, StyleSheet, View,Image,ImageBackground,TouchableOpacity, Dimensions } from 'react-native';
import { globalStyles } from '../splashFlow/globalStyles/styles';

const {height,width} = Dimensions.get('window');

export default CheckInThirdScreen = (props) => {

    return (
        <View style={{ height: height, width: width }}>
            <ImageBackground style={{ height: height, width: width }} source={require('../assets/CheckIn2Bg.png')}>
                <View style={{marginTop:25/924*height, alignItems: 'center', height: height, width: width, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width - 60, marginTop: 30 / 924 * height }}>

                        <TouchableOpacity style={{ height: 36 / 924 * height, width: 85 / 429 * width, }} onPress={()=>props.navigation.goBack()}>
                            <Image source={require('../assets/backBtn.png')}
                                style={{ height: 36 / 924 * height, width: 85 / 429 * width, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>

                        <Image source={require('../assets/3dot3Image.png')}
                            style={{ height: 24 / 924 * height, width: 64 / 429 * height, resizeMode: 'contain' }}
                        />

                        <TouchableOpacity style={{ height: 36 / 924 * height, width: 85 / 429 * width, }} onPress={()=>props.navigation.navigate('WeeklySummaryMainScreen')}>
                            <Image source={require('../assets/cancelBtn.png')}
                                style={{ height: 36 / 924 * height, width: 85 / 429 * width, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>
                        

                    </View>
                    <Text style={{ fontSize: 25, fontWeight: '500', marginTop: 55 / 952 * height }}>Bliss</Text>
                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#12121235', marginTop: 8 / 924 * height }}>/ˈanəˌmādəd/</Text>
                    <Text style={{ fontSize: 20, fontWeight: '500', color: '#000', marginTop: 50 / 924 * height,width:314/426*width }}>Supreme happiness, joy, or a state of complete and utter contentment and peace.</Text>

                    <TouchableOpacity style = {[globalStyles.capsuleBtn,{marginTop:300/924*height}]} onPress={()=>props.navigation.navigate('CheckInFourthScreen')}>
                        <Text style = {globalStyles.capsuleBtnText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({})
