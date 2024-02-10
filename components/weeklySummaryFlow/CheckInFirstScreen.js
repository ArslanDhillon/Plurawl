import React, { } from 'react'
import { Text, StyleSheet, View, Dimensions, ImageBackground, Image, TouchableOpacity } from 'react-native'

const { height, width } = Dimensions.get('window');

export default CheckInFirstScreen = (props) => {

    const onPressHandle = () => {
    }


    return (
        <View style={{ height: height, width: width }}>
            <ImageBackground style={{ height: height, width: width }} source={require('../../assets/yellowBg.png')}>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: height, width: width, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width - 60 }}>
                        <Text style={{ fontSize: 12, fontWeight: '700', color: '#12121250' }}>Your last mood was</Text>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <Image source={require('../../assets/crossBtn.png')}
                                style={{ height: 40 / 924 * height, width: 40 / 924 * height, }} />
                        </TouchableOpacity>

                    </View>
                    <View style={{
                        flexDirection: 'row', width: width - 60, alignItems: 'flex-start', gap: 10 / 952 * height,
                        marginTop: 32 / 924 * height
                    }}>
                        <Text style={{ fontSize: 30, fontWeight: '500' }}>Animated</Text>
                        <Text style={{ fontSize: 12, fontWeight: '500', paddingTop: 15 / 924 * height }}>/ˈanəˌmādəd/</Text>
                    </View>


                    <View style={{ width: width - 60, alignItems: 'flex-start', }}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: '#12121250', marginTop: 16 / 952 * height, }}>
                            Full of life, energy, or excitement; lively and spirited.
                        </Text>
                        <Text style={{ fontSize: 10, fontWeight: '500', color: '#12121235', marginTop: 16 / 952 * height, }}>
                            Low Energy - Pleasant  9:43 pm December 17, 2023.
                        </Text>

                    </View>

                    <View style={{
                        height: 431 / 924 * height, width: 394 / 426 * width, backgroundColor: '#a68f4c', justifyContent: 'center',
                        borderRadius: 32 / 924 * height, marginTop: 200 / 924 * height, alignItems: 'center'
                    }}>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: '#fff' }}>What’s your current mood?</Text>
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row', gap: 70 / 429 * width }}>
                                <TouchableOpacity style={{ flexDirection: 'column', marginTop: 40 / 924 * height, alignItems: 'center' }}
                                    onPress={() => {
                                        props.navigation.navigate('CheckInSecondScreen',{
                                            mood:{
                                                currentMood:'High energy , Pleasant'
                                            }
                                        })

                                    }} >
                                    <Image source={require('../../assets/pleasantMoodCircle.png')}
                                        style={{ height: 62 / 924 * height, width: 64 / 924 * height, resizeMode: 'contain' }}
                                    />
                                    <Text style={{ fontSize: 10, fontWeight: '400', color: '#F8EDDA50', marginTop: 13 / 924 * height }}>Heigh energy</Text>
                                    <Text style={{ fontSize: 16, fontWeight: '400', color: '#fff' }}>Pleasant</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ flexDirection: 'column', marginTop: 40 / 924 * height, alignItems: 'center' }}
                                     onPress={() => {
                                        props.navigation.navigate('CheckInSecondScreen',{
                                            mood:{
                                                currentMood:'High energy , Unpleasant'
                                            }
                                        })

                                    }}  >
                                    <Image source={require('../../assets/unpleasantMoodCircle.png')}
                                        style={{ height: 62 / 924 * height, width: 64 / 924 * height, resizeMode: 'contain' }}
                                    />
                                    <Text style={{ fontSize: 10, fontWeight: '400', color: '#F8EDDA50', marginTop: 13 / 924 * height }}>Heigh energy</Text>
                                    <Text style={{ fontSize: 16, fontWeight: '400', color: '#fff' }}>Unpleasant</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row', gap: 70 / 429 * width }}>
                                <TouchableOpacity style={{ flexDirection: 'column', marginTop: 40 / 924 * height, alignItems: 'center' }}
                                     onPress={() => {
                                        props.navigation.navigate('CheckInSecondScreen',{
                                            mood:{
                                                currentMood:'Low energy , Pleasant'
                                            }
                                        })

                                    }} 
                                >
                                    <Image source={require('../../assets/lowEnergyPleasant.png')}
                                        style={{ height: 62 / 924 * height, width: 64 / 924 * height, resizeMode: 'contain' }}
                                    />
                                    <Text style={{ fontSize: 10, fontWeight: '400', color: '#F8EDDA50', marginTop: 13 / 924 * height }}>Low energy</Text>
                                    <Text style={{ fontSize: 16, fontWeight: '400', color: '#fff' }}>Pleasant</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ flexDirection: 'column', marginTop: 40 / 924 * height, alignItems: 'center' }}
                                     onPress={() => {
                                        props.navigation.navigate('CheckInSecondScreen',{
                                            mood:{
                                                currentMood:'Low energy , Unpleasant'
                                            }
                                        })

                                    }}  >
                                    <Image source={require('../../assets/lowEnergyUnpleasant.png')}
                                        style={{ height: 62 / 924 * height, width: 64 / 924 * height, resizeMode: 'contain' }}
                                    />
                                    <Text style={{ fontSize: 10, fontWeight: '400', color: '#F8EDDA50', marginTop: 13 / 924 * height }}>Low energy</Text>
                                    <Text style={{ fontSize: 16, fontWeight: '400', color: '#fff' }}>Unpleasant</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
};
const styles = StyleSheet.create({})
