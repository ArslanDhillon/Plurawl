import React, { useState } from 'react'
import {
    SafeAreaView, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput,
} from 'react-native';
import { globalStyles } from '../globalStyles/styles';
import Toggle from 'react-native-toggle-input'


const { height, width } = Dimensions.get('window');

export default NotificationsSettingScreen = (props) => {

  const [toggle, setToggle] = useState(false);


    return (
        <SafeAreaView style={{ backgroundColor: '#0f0f0f' }}>
            <View style={{ height: height, backgroundColor: '#0f0f0f', alignItems: 'center', }}>
                <Text style={{ color: '#fff', fontSize: 42, fontWeight: "500", alignSelf: 'flex-start', paddingTop: 35 / 924 * height }}> Settings </Text>
                <View style={styles.mainView}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}  >
                            <Image source={require('../../assets/backArrowRed.png')}
                                style={{ height: 24 / 924 * height, width: 24 / 924 * height, resizeMode: 'contain' }}
                            />
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('../../assets/notificationIcon.png')}
                                style={{ height: 24 / 924 * height, width: 24 / 924 * height, resizeMode: 'contain', marginTop: 5 / 924 * height }} />
                            <Text style={globalStyles.capsuleBtnText}>Notifications</Text>
                        </View>
                        <View style={{ height: 36 / 924 * height, width: 70 / 429 * width }}></View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 33 / 924 * height, padding: 8 }}>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff' }}>App Notifications</Text>
                        <Toggle
                            color={"#34C759"}
                            size={20/924*height}
                            filled={true}
                            circleColor={"white"}
                            toggle={toggle}
                            setToggle={setToggle}
                        />
                    </View>
                    <Text style={{ color: '#F8EDDA55', fontSize: 10 }}>Lorem ipsum dolor sit amet consectetur. Sed sed in.</Text>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 25 / 924 * height, padding: 8 }}>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff' }}>Daily Reminder</Text>
                            <View style={{ height: 34 / 924 * height, width: 88 / 429 * width, backgroundColor: '#76768025', borderRadius: 6 / 924 * height, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#D44740' }}>9:41 AM</Text>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <Text style={{ color: '#F8EDDA55', fontSize: 10 }}>Lorem ipsum dolor sit amet consectetur. Sed sed in.</Text>

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
})