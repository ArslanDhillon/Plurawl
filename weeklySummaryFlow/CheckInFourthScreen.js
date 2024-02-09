import React, { } from 'react'
import { Text, StyleSheet, View, Dimensions, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { globalStyles } from '../splashFlow/globalStyles/styles';
const { height, width } = Dimensions.get('window');

export default CheckInFirstScreen = (props) => {

    const closeBtnHandle = () =>{
        props.navigation.navigate('WeeklySummaryMainScreen')
    }

    return (
        <View style={{ height: height, width: width }}>
            <ImageBackground style={{ height: height, width: width }} source={require('../assets/CheckIn2Bg.png')}>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: height, width: width, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width - 60 }}>
                        <Text style={{ fontSize: 12, fontWeight: '700', color: '#12121250' }}>Your new mood </Text>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('WeeklySummaryMainScreen`')} >
                            <Image source={require('../assets/crossBtn.png')}
                                style={{ height: 40 / 924 * height, width: 40 / 924 * height, }} />

                        </TouchableOpacity>

                    </View>
                    <View style={{
                        flexDirection: 'row', width: width - 60, alignItems: 'flex-start', gap: 10 / 952 * height,
                        marginTop: 32 / 924 * height,alignItems:'center'
                    }}>
                        <Text style={{ fontSize: 25, fontWeight: '500', }}>Bliss</Text>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: '#12121235', }}>/ˈanəˌmādəd/</Text>
                    </View>
                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#000', marginTop: 50 / 924 * height, width: width - 60 }}>Supreme happiness, joy, or a state of complete and utter contentment and peace.</Text>
                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#12121250', marginTop: 15 / 924 * height, width: width - 60 }}>Low Energy - Pleasant  10:58 pm December 17, 2023</Text>
                    <View style = {{alignItems:'center',marginTop: 340 / 924 * height, width: width - 60,}}>
                        <Text style={{ fontSize: 25, fontWeight: '400', color: '#007308',  }}>+1</Text>
                    </View>
                    <View style = {{flexDirection:'row',alignItems:'center'}}>
                        <Text style = {{fontSize:30,fontWeight:'500'}}>156</Text>
                        <Text style = {{fontSize:14,fontWeight:'500'}}>  points</Text>
                    </View>
                    <Text style = {{fontSize:12,fontWeight:'500'}}>You’ve been awarded 1 point for this check in </Text>
                    <TouchableOpacity style = {[globalStyles.capsuleBtn,{marginTop:32/924*height}]}
                        onPress={closeBtnHandle}
                    >
                        <Text style = {globalStyles.capsuleBtnText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

