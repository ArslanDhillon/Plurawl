import React, { useState } from 'react';
import {
    SafeAreaView, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput,
} from 'react-native';
import { globalStyles } from '../globalStyles/styles';

const { height, width } = Dimensions.get('window');

export default SubscriptionsSettings = (props) => {

    

    return (
        <SafeAreaView style={{ height: height, backgroundColor: '@0f0f0f' }}>
            <View style={{ height: height, backgroundColor: '#0f0f0f', alignItems: 'center', }}>
                <Text style={{ color: '#fff', fontSize: 42, fontWeight: "500", alignSelf: 'flex-start', marginTop: 35 / 924 * height }}> Settings </Text>
                <View style={styles.mainView}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity  onPress={()=>props.navigation.goBack()} >
                            <Image source={require('../../assets/backArrowRed.png')}
                                style={{ height: 24 / 924 * height, width: 24 / 924 * height, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('../../assets/subscriptionIcon.png')}
                                style={{ height: 24 / 924 * height, width: 24 / 924 * height, resizeMode: 'contain', marginTop: 5 / 924 * height }} />
                            <Text style={globalStyles.capsuleBtnText}>Subscriptions</Text>
                        </View>
                        <View style={{ height: 36 / 924 * height, width: 10 / 429 * width }}></View>
                    </View>
                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#F8EDDA50', marginTop: 35 / 924 * height ,marginBottom:10/924*height}}>Current plan</Text>
                    <View style={styles.viewStyle}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                <Image source={require('../../assets/starIconRed.png')}
                                    style={{ height: 24 / 924 * height, width: 24 / 924 * height }}
                                />
                                <Text style={globalStyles.capsuleBtnText}>Premium</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff' }}>$35</Text>
                                <Text style={{ color: '#F8EDDA50', fontSize: 12, fontWeight: '500' }}>/month</Text>

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 8, marginTop: 25 / 924 * height }}>
                            <Text style={{ color: '#F8EDDA50', fontSize: 12, fontWeight: 'bold' }}>.</Text>
                            <Text style={{ color: '#F8EDDA50', fontSize: 12, fontWeight: '500' }}>Lorem ipsum dolor sit amet consectetur. Egestas risus.</Text>

                        </View>

                        <View style={{ flexDirection: 'row', gap: 8, marginTop: 10 / 924 * height }}>
                            <Text style={{ color: '#F8EDDA50', fontSize: 12, fontWeight: 'bold' }}>.</Text>
                            <Text style={{ color: '#F8EDDA50', fontSize: 12, fontWeight: '500' }}>Lorem ipsum dolor sit amet consectetur. Egestas risus.</Text>

                        </View>
                        <View style={{ flexDirection: 'row', gap: 8, marginTop: 10 / 924 * height }}>
                            <Text style={{ color: '#F8EDDA50', fontSize: 12, fontWeight: 'bold' }}>.</Text>
                            <Text style={{ color: '#F8EDDA50', fontSize: 12, fontWeight: '500' }}>Lorem ipsum dolor sit amet consectetur. Egestas risus.</Text>

                        </View>
                    </View>

                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#F8EDDA50', marginTop: 35 / 924 * height,marginBottom:10/924*height }}>Other plans</Text>
                    <View style={[styles.viewStyle,{borderColor:'#F8EDDA25'}]}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                <Image source={require('../../assets/starIconRed.png')}
                                    style={{ height: 24 / 924 * height, width: 24 / 924 * height }}
                                />
                                <Text style={globalStyles.capsuleBtnText}>Basic</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                                <Text style={{ color: '#F8EDDA50', fontSize: 14, fontWeight: '700' }}>Free</Text>

                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 8, marginTop: 25 / 924 * height }}>
                            <Text style={{ color: '#F8EDDA50', fontSize: 12, fontWeight: 'bold' }}>.</Text>
                            <Text style={{ color: '#F8EDDA50', fontSize: 12, fontWeight: '500' }}>Lorem ipsum dolor sit amet consectetur. Egestas risus.</Text>

                        </View>

                        <View style={{ flexDirection: 'row', gap: 8, marginTop: 10 / 924 * height }}>
                            <Text style={{ color: '#F8EDDA50', fontSize: 12, fontWeight: 'bold' }}>.</Text>
                            <Text style={{ color: '#F8EDDA50', fontSize: 12, fontWeight: '500' }}>Lorem ipsum dolor sit amet consectetur. Egestas risus.</Text>

                        </View>
                        <View style={{ flexDirection: 'row', gap: 8, marginTop: 10 / 924 * height }}>
                            <Text style={{ color: '#F8EDDA50', fontSize: 12, fontWeight: 'bold' }}>.</Text>
                            <Text style={{ color: '#F8EDDA50', fontSize: 12, fontWeight: '500' }}>Lorem ipsum dolor sit amet consectetur. Egestas risus.</Text>

                        </View>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    mainView: {
        width: 390 / 429 * width,
        backgroundColor: '#1C1C1C',
        borderRadius: 16 / 924 * height,
        marginTop: 16 / 924 * height,
        padding: 16 / 924 * height
    },
    text: {
        fontSize: 17,
        fontWeight: '500',
        color: '#fff'
    },
    viewStyle: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#D44740',
        borderRadius: 16 / 924 * height
    }
})