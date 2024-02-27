import React, { useState } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Dimensions, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { globalStyles } from '../globalStyles/styles';
import Api from '../Apis/ApiPaths';
import AsyncStorage from '@react-native-async-storage/async-storage';
import JournalSnapshotSaveScreen from './JournalSnapshotSaveScreen';
import Moods from '../../models/moods';

export default JournalSnapshotScreen = ({ route, navigation }) => {

    const journal = route.params.journal
    // console.log("data from last scrn",journal)

    const { width, height } = Dimensions.get("window");

    const [showIndecater, setShowIndecater] = useState(false)
    // setShowIndecater(false)

    const saveCheckIn = async (savAsCheckIn = false) => {
        setShowIndecater(true)
        const postData = {
            title: journal.title,
            detail: journal.detail,
            feeling: journal.snapShot.feeling.title,
            mood: journal.snapShot.mood,
            description: journal.snapShot.feeling.description,
            pronunciation: journal.snapShot.feeling.pronunciation,
            snapshot: journal.snapShot.snapshot,
            cd: journal.snapShot.cd,
            save_as_checkin: savAsCheckIn

        }
        // console.log("post data ", postData)
        // return
        try {
            const data = await AsyncStorage.getItem('USER')
            if (data) {
                let d = JSON.parse(data)
                // console.log("user data from local is ", d)


                const result = await fetch(Api.ApiAddJournal, {
                    method: 'post',
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${d.token}` },
                    body: JSON.stringify(postData)
                })
                if (result) {
                    let json = await result.json();
                    if (json.status === true) {
                        console.log("journal add data", json.data)

                        d.user = json.data
                        await AsyncStorage.setItem('USER',JSON.stringify(d))

                        setShowIndecater(false)
                        navigation.navigate("JournalSnapshotSaveScreen", {
                            checkIn: {
                                saveCheckIn: savAsCheckIn

                            }
                        })
                    } else {
                        console.log("journal add message", json.message)

                        setShowIndecater(false)
                    }
                }
            }
        } catch (error) {
            console.log("error finding ", error)
        }
    };

    const getColor = () => {
        console.log("enter in function", journal.snapShot.feeling.title)

        if (journal.snapShot.mood === null) {
            console.log("Gray")
            return "gray"
        }
        if (journal.snapShot.mood.toLowerCase() === Moods.MoodHep.toLowerCase()) {
            console.log("hep c")
            return '#FCD860';
        }

        if (journal.snapShot.mood.toLowerCase() === Moods.MoodHeup.toLowerCase()) {
            console.log("heup c")
            return "#ED9F01";
        }
        if (journal.snapShot.mood.toLowerCase() === Moods.MoodLep.toLowerCase()) {
            console.log("lep c")
            return '#6084FC';
        }
        if (journal.snapShot.mood.toLowerCase() === Moods.MoodLeup.toLowerCase()) {
            console.log("leup c")
            return "#393994";
        }

    };

    return (
        <SafeAreaView style={{ backgroundColor: '#0f0f0f', height: height, }}>
            <View style={{ backgroundColor: '#0f0f0f', alignItems: "center", width: width, justifyContent: 'center', flex: 1 }}>
                <View style={{ backgroundColor: "#151515", borderRadius: 16 / 924 * height, width: 390 / 429 * width, padding: 30 / 924 * height, alignItems: "center", justifyContent: 'center', }}>
                    <View style={{ flexDirection: 'row', alignSelf: 'flex-start', gap: 10 / 924 * height }}>
                        <Image source={require('../../assets/colorfullCircle.png')}
                            style={{ height: 24 / 924 * height, width: 24 / 924 * height, resizeMode: 'contain' }}
                        />
                        <Text style={{ fontSize: 20, fontWeight: '500', color: "#fff" }}>Jopurnal Snapshot</Text>
                    </View>
                    <View style={{ flexDirection: 'column', width: 320 / 429 * width, marginTop: 15 / 924 * height }}>
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

                    <View style={{ backgroundColor: "#121212", borderRadius: 16 / 924 * height, width: 326 / 429 * width, padding: 30 / 924 * height, marginTop: 15 / 924 * height }}>

                        <View style={{ flexDirection: 'row', gap: 10 / 924 * height, }}>
                            <View style={{ height: 18 / 924 * height, width: 18 / 924 * height, borderRadius: 10 / 924 * height, backgroundColor: getColor() }}></View>
                            <Text style={{ fontSize: 15, fontWeight: '500', color: "#fff" }}>{journal.snapShot.feeling.title}</Text>
                            <Text style={{ fontSize: 14, fontWeight: '500', color: "#F8EDDA25", textAlign: 'center', }}>( {journal.snapShot.feeling.pronunciation} )</Text>


                        </View>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: "#F8EDDA50", marginTop: 15 / 924 * height }}>
                            {journal.snapShot.feeling.description}
                        </Text>

                    </View>
                    <Text style={{ fontSize: 15, fontWeight: '500', color: "#fff", textAlign: 'center', marginTop: 130 / 924 * height, width: 278 / 429 * width }}>Would you like to save as a check-in as well?</Text>
                    {showIndecater ?
                        <ActivityIndicator size={'large'} style={{ color: '#fff', marginTop: 10 / 924 * height }} />
                        : (<>
                            < TouchableOpacity style={[globalStyles.capsuleBtn, { width: 326 / 429 * width, marginTop: 10 / 924 * height }]}
                                onPress={() => saveCheckIn(true)}
                            >
                                <Text style={globalStyles.capsuleBtnText}>Save as check-in</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[globalStyles.capsuleBtn, { width: 326 / 429 * width, marginTop: 10, backgroundColor: '#121212' }]}
                                onPress={() => saveCheckIn(false)} >
                                <Text style={[globalStyles.capsuleBtnText, { color: '#D44740' }]}>No,just as journal entery</Text>
                            </TouchableOpacity>
                        </>
                        )}

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[globalStyles.capsuleBtnText, { color: '#F8EDDA50' }]}>You’ll receive</Text>
                        <Text style={[globalStyles.capsuleBtnText, { color: '#F8EDDA', fontSize: 20 }]}> +1 </Text>
                        <Text style={[globalStyles.capsuleBtnText, { color: '#F8EDDA50' }]}> point for this journal.</Text>

                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Text style={[globalStyles.capsuleBtnText, { color: '#F8EDDA', fontSize: 20 }]}> 156 </Text>
                        <Text style={[globalStyles.capsuleBtnText, { color: '#F8EDDA50' }]}> total points</Text>
                    </View>
                </View>


            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({})
