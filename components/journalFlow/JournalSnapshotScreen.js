import React, { } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Dimensions, Image } from 'react-native'

export default JournalSnapshotScreen = () => {

    const { width, height } = Dimensions.get("window");

    return (
        <SafeAreaView style={{ backgroundColor: '#0f0f0f', height: height, }}>
            <View style={{ backgroundColor: '#0f0f0f', alignItems: "center", width: width, justifyContent: 'center', flex: 1 }}>
                <View style={{ backgroundColor: "#151515", borderRadius: 16 / 924 * height, width: 390 / 429 * width, padding: 30 / 924 * height, alignItems: "center", justifyContent: 'center', }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 / 924 * height }}>
                        <Image source={require('../../assets/colorfullCircle.png')}
                            style={{ height: 24 / 924 * height, width: 24 / 924 * height, resizeMode: 'contain' }}
                        />
                        <Text style={{ fontSize: 20, fontWeight: '500', color: "#fff" }}>Jopurnal Snapshot</Text>


                    </View>
                    <View style={{ flexDirection: 'column', width: 320 / 429 * width }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: '#fff' }}>We discussed </Text>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: '#D44740' }}>emotional reasoning </Text>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: '#fff' }}>and </Text>
                        </View>

                        <Text style={{ fontSize: 14, fontWeight: '500', color: '#fff' }}> how that was leading to self doubt when trying to be productive. This made you feel</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: '#ED9F01' }}> anxiousness </Text>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: '#fff' }}> which is an  </Text>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: '#ED9F01' }} >High Energy - </Text>

                        </View>
                        <View style={{ flexDirection: 'row', }} >
                            <Text style={{ fontSize: 14, fontWeight: '500', color: '#ED9F01' }}> Unpleasant </Text>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: '#fff' }}>feeling </Text>

                        </View>
                    </View>

                    <View style={{ backgroundColor: "#121212", borderRadius: 16 / 924 * height, width: 326 / 429 * width, padding: 30 / 924 * height,marginTop: 15 / 924 * height }}>

                        <View style={{ flexDirection: 'row',  gap: 10 / 924 * height ,}}>
                            <Image source={require('../../assets/yellowCircle.png')}
                                style={{ height: 18 / 924 * height, width: 18 / 924 * height, resizeMode: 'contain' }}
                            />
                            <Text style={{ fontSize: 15, fontWeight: '500', color: "#fff" }}>Anxious</Text>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: "#F8EDDA25",textAlign:'center',}}>(pleh znt)</Text>


                        </View>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: "#F8EDDA50",marginTop:15/924*height}}>
                            Intense unease, worry, or apprehension about future uncertainties or potential threats,
                            often accompanied by physical symptoms.
                        </Text>

                    </View>
                </View>


            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})
