import React, { useState } from 'react';
import {
    SafeAreaView, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput, ScrollView,
} from 'react-native';
import { globalStyles } from '../globalStyles/styles';

const { height, width } = Dimensions.get('window');

export default PrivacyPloicyScreen = (props) => {

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
                            <Image source={require('../../assets/privacyIcon.png')}
                                style={{ height: 24 / 924 * height, width: 24 / 924 * height, resizeMode: 'contain', marginTop: 5 / 924 * height }} />
                            <Text style={globalStyles.capsuleBtnText}>Privacy Policy</Text>
                        </View>
                        <View style={{ height: 36 / 924 * height, width: 10 / 429 * width }}></View>
                    </View>
                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#F8EDDA50', marginTop: 35 / 924 * height, marginBottom: 10 / 924 * height }}>Privacy Policy</Text>
                    <ScrollView style = {{height:600/924*height}} showsVerticalScrollIndicator = {false}>


                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#F8EDDA50', marginTop: 35 / 924 * height, marginBottom: 10 / 924 * height }}>
                        Lorem ipsum dolor sit amet consectetur. Tristique placerat quis sit pulvinar urna volutpat eu volutpat enim. Maecenas
                        gravida ullamcorper adipiscing tempor condimentum gravida varius hendrerit. Scelerisque dictum odio
                        fringilla tortor in. Vestibulum hendrerit posuere ut facilisis. Nullam commodo dis vestibulum ultricies.
                        Vitae purus pretium quisque sit a sed tortor amet. Libero porttitor arcu viverra in velit vitae sagittis
                        parturient. Molestie morbi phasellus sit eget tellus. Sem ullamcorper nisi egestas est nisl turpis.
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#F8EDDA50', marginTop: 35 / 924 * height, marginBottom: 10 / 924 * height }}>
                        Lorem ipsum dolor sit amet consectetur. Tristique placerat quis sit pulvinar urna volutpat eu volutpat enim. Maecenas
                        gravida ullamcorper adipiscing tempor condimentum gravida varius hendrerit. Scelerisque dictum odio
                        fringilla tortor in. Vestibulum hendrerit posuere ut facilisis. Nullam commodo dis vestibulum ultricies.
                        Vitae purus pretium quisque sit a sed tortor amet. Libero porttitor arcu viverra in velit vitae sagittis
                        parturient. Molestie morbi phasellus sit eget tellus. Sem ullamcorper nisi egestas est nisl turpis.
                    </Text>
                    <Text style={{ fontSize: 12, fontWeight: '500', color: '#F8EDDA50', marginTop: 35 / 924 * height, marginBottom: 10 / 924 * height }}>
                        Lorem ipsum dolor sit amet consectetur. Tristique placerat quis sit pulvinar urna volutpat eu volutpat enim. Maecenas
                        gravida ullamcorper adipiscing tempor condimentum gravida varius hendrerit. Scelerisque dictum odio
                        fringilla tortor in. Vestibulum hendrerit posuere ut facilisis. Nullam commodo dis vestibulum ultricies.
                        Vitae purus pretium quisque sit a sed tortor amet. Libero porttitor arcu viverra in velit vitae sagittis
                        parturient. Molestie morbi phasellus sit eget tellus. Sem ullamcorper nisi egestas est nisl turpis.
                    </Text>
                    </ScrollView>


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