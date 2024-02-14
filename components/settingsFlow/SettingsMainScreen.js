import React, { } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native';
import WeeklySummaryMainScreen from '../weeklySummaryFlow/WeeklySummmaryStartScreen';



const { height, width } = Dimensions.get('window');

export default SettingsMainScreen = (props) => {

    const profileBtnHandle = () =>{
        props.navigation.navigate("ProfileSettingsScreen")
    };
    const notificationBtnHandle = () =>{
        props.navigation.navigate("NotificationsSettingScreen")
    };
    const permissionBtnHandle = () =>{
        props.navigation.navigate("PermissionsSetting")
    };
    const subscriptionBtnHandle = () =>{
        props.navigation.navigate("SubscriptionsSettingsScreen")
    };
    const privacyBtnHandle = () =>{
        props.navigation.navigate("PrivacyPolicyScreen")
    };
    const termsBtnHandle = () =>{
        props.navigation.navigate("TermsAndConditionsScreen")
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#0f0f0f' }}>
            <View style={{ height: height, backgroundColor: '#0f0f0f', alignItems: 'center',}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: width - 40 / 429 * width,marginTop:35/924*height }}>
                    <Text style={{ color: '#fff', fontSize: 42, fontWeight: "500" }}> Settings </Text>
                    <TouchableOpacity style={{ alignSelf: 'center', }} onPress={()=>props.navigation.goBack()}>
                        <View style={{ height: 40 / 924 * height, width: 40 / 924 * height, justifyContent: 'center', alignItems: 'center', backgroundColor: "#FFFFFF15", borderRadius: 20 / 924 * height }}>
                            <Image source={require('../../assets/closeIconRed.png')}
                                style={{ height: 24 / 924 * height, width: 24 / 924 * height, resizeMode: 'contain' }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.mainView}>
                    <TouchableOpacity style={[styles.btnStyle, { marginTop: 0 }]}
                        onPress={profileBtnHandle}
                    >
                        <View style={styles.viewStyle}>
                            <Image source={require('../../assets/userIcon.png')}
                                style={styles.image}
                            />
                            <Text style={styles.text}>Profile</Text>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnStyle}
                        onPress={notificationBtnHandle}
                    >
                        <View style={styles.viewStyle}>
                            <Image source={require('../../assets/notificationIcon.png')}
                                style={styles.image}
                            />
                            <Text style={styles.text}>Notifications</Text>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnStyle}
                        onPress={permissionBtnHandle}
                    >
                        <View style={styles.viewStyle}>
                            <Image source={require('../../assets/permitionIcon.png')}
                                style={styles.image}
                            />
                            <Text style={styles.text}>App permissions</Text>

                        </View>
                    </TouchableOpacity>

                </View>

                <View style={[styles.mainView, { marginTop: 50 / 924 * height }]}>
                    <TouchableOpacity style={[styles.btnStyle,{marginTop:0}]}
                        onPress={subscriptionBtnHandle}
                    >
                        <View style={styles.viewStyle}>
                            <Image source={require('../../assets/subscriptionIcon.png')}
                                style={styles.image}
                            />
                            <Text style={styles.text}>Subscriptions</Text>

                        </View>
                    </TouchableOpacity>

                </View>

                <View style={[styles.mainView, { marginTop: 50 / 924 * height }]}>
                    <TouchableOpacity style={[styles.btnStyle,{marginTop:0}]}
                        onPress={privacyBtnHandle}
                    >
                        <View style={styles.viewStyle}>
                            <Image source={require('../../assets/privacyIcon.png')}
                                style={styles.image}
                            />
                            <Text style={styles.text}>Privacy Policy</Text>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnStyle}
                        onPress={termsBtnHandle}
                    >
                        <View style={styles.viewStyle}>
                            <Image source={require('../../assets/privacyIcon.png')}
                                style={styles.image}
                            />
                            <Text style={styles.text}>Terms and conditions</Text>

                        </View>
                    </TouchableOpacity>


                </View>



            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 20 / 924 * height,
        width: 20 / 924 * height,
        resizeMode: 'contain'
    },
    text: {
        fontSize: 17,
        fontWeight: '500',
        color: '#fff'
    },
    viewStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    btnStyle: {
        alignSelf: 'flex-start',
        marginTop: 16 / 924 * height,
    },
    mainView: {
        width: 390 / 429 * width,
        backgroundColor: '#1C1C1C',
        borderRadius: 16 / 924 * height,
        marginTop: 16 / 924 * height,
        padding: 16 / 924 * height
    }
})
