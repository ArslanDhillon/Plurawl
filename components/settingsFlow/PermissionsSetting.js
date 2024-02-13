import React, { useState } from 'react'
import {
    SafeAreaView, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput,
} from 'react-native';
import { globalStyles } from '../globalStyles/styles';

const { height, width } = Dimensions.get('window');

export default PermissionsSetting = (props) => {

    const [none, setNone] = useState(false);
    const [events, setEvents] = useState(false);
    const [fullAccess, setFullAccess] = useState(false);

    return (
        <SafeAreaView style={{ height: height, backgroundColor: '#0f0f0f' }}>
            <View style={{flex:1,  backgroundColor: '#0f0f0f', alignItems: 'center', }}>
                <Text style={{ color: '#fff', fontSize: 42, fontWeight: "500", alignSelf: 'flex-start', marginTop: 35 / 924 * height }}> Settings </Text>
                <View style={styles.mainView}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={()=>props.navigation.goBack()}  >
                            <Image source={require('../../assets/backArrowRed.png')}
                                style={{ height: 24 / 924 * height, width: 24 / 924 * height, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('../../assets/permitionIcon.png')}
                                style={{ height: 24 / 924 * height, width: 24 / 924 * height, resizeMode: 'contain', marginTop: 5 / 924 * height }} />
                            <Text style={globalStyles.capsuleBtnText}>App permissions</Text>
                        </View>
                        <View style={{ height: 36 / 924 * height, width: 10 / 429 * width }}></View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 33 / 924 * height, padding: 8 }}>
                        <Image source={require('../../assets/calendarIcon.png')}
                            style={{ height: 20 / 924 * height, width: 22 / 924 * height }}
                        />
                        <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff' }}>Calendar</Text>
                    </View>
                    <Text style={{ color: '#F8EDDA50', fontSize: 11, marginTop: 10 / 924 * height }}>Lorem ipsum dolor sit amet consectetur. Sed sed in.</Text>

                    <TouchableOpacity style={{ marginTop: 10 / 924 * height }}
                        onPress={() => {
                            setNone(true)
                            setEvents(false)
                            setFullAccess(false)
                        }}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", width: 310 / 429 * width, alignSelf: 'center' }}>
                            <Text style={styles.text}>None</Text>
                            {none && <Image source={require('../../assets/tickIconRed.png')}
                                style={{ height: 20 / 924 * height, width: 20 / 924 * height, resizeMode: 'contain' }}
                            />}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginTop: 10 / 924 * height }}
                        onPress={() => {
                            setEvents(true)
                            setNone(false)
                            setFullAccess(false)
                        }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", width: 310 / 429 * width, alignSelf: 'center' }}>
                            <Text style={styles.text}>Add events only</Text>
                            {events && <Image source={require('../../assets/tickIconRed.png')}
                                style={{ height: 20 / 924 * height, width: 20 / 924 * height, resizeMode: 'contain' }}
                            />}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginTop: 15 / 924 * height }}
                        onPress={() => {
                            setFullAccess(true)
                            setNone(false)
                            setEvents(false)
                        }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", width: 310 / 429 * width, alignSelf: 'center' }}>
                            <Text style={styles.text}>Full access</Text>
                            {fullAccess && <Image source={require('../../assets/tickIconRed.png')}
                                style={{ height: 20 / 924 * height, width: 20 / 924 * height, resizeMode: 'contain' }}
                            />}
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginTop: 35 / 924 * height }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", width: 350 / 429 * width, alignSelf: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: "center", gap: 8 / 429 * height }}>
                                <Image source={require('../../assets/headPhoneIcon.png')}
                                    style={{ height: 20 / 924 * height, width: 20 / 924 * height, resizeMode: 'contain' }}
                                />
                                <Text style={styles.text}>Apple Music</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: "center",alignSelf:'center'}}>
                                <Text style={{ fontSize: 14, fontWeight: '500', color: '#FFFFFF25' }}>Full access</Text>

                                <Image source={require('../../assets/rightArrowWhight.png')}
                                    style={{ height: 20 / 924 * height, width: 20 / 924 * height, resizeMode: 'contain' }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ color: '#F8EDDA50', fontSize: 11 ,marginTop:10/924*height}}>Lorem ipsum dolor sit amet consectetur. Sed sed in.</Text>

                </View>
            </View>
        </SafeAreaView>
    )
};

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
    }
})