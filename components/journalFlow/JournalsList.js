import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput, FlatList, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../Apis/ApiPaths';
import Moods from '../../models/moods';
import SelectedWeekVibes from './SelectedWeekVibes';

const { height, width } = Dimensions.get("window")

const Data = [
    {
        id: 1,
        StartDate: "Dec 31",
        EndDate: "Jan 6",
        Entries: "5 journal entries",
        color: "#FCD860"
    },
    {
        id: 2,
        StartDate: "Dec 24",
        EndDate: "Jan 30",
        Entries: "5 journal entries",
        color: "#6084FC"

    },
    {
        id: 3,
        StartDate: "Dec 17",
        EndDate: "Dec 23",
        Entries: "5 journal entries",
        color: "#ED9F01"

    },
    {
        id: 4,
        StartDate: "Dec 10",
        EndDate: "Dec 16",
        Entries: "5 journal entries",
        color: "#393994"
    }

]

export default function JournalsList(props) {

    const [user, setUser] = useState(null);
    const [journalData, setJournalData] = useState(null);
    const [showIndicater, setShowIndicater] = useState(true);


    useEffect(() => {
        const getJournalList = async () => {
            try {

                const data = await AsyncStorage.getItem('USER')

                if (data) {
                    let u = JSON.parse(data)
                    setUser(u)
                    console.log('user saved profile is', u)
                    const token = u.token
                    const result = await fetch(Api.ApiGetUserJournal, {
                        method: 'get',
                        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                    })
                    if (result) {
                        console.log("result is ", result)

                        let json = await result.json()
                        if (json.status === true) {

                            let vibes = json.data
                            vibes = vibes.filter((item) => {
                                return item.totalJournals != 0
                            })
                            setJournalData(vibes)
                            console.log(json.data)
                            setShowIndicater(false)

                        }
                    }
                }
            } catch (error) {
                setShowIndicater(false)

                console.log("error finding ", error)
            }
        };
        getJournalList();
    }, []);

    const getMoodColor = (vibe) => {
        if (vibe.mostCheckedInMood.toLowerCase() === Moods.MoodHep.toLowerCase()) {
            console.log('hep')
            return '#FCD860';
        }
        if (vibe.mostCheckedInMood.toLowerCase() === Moods.MoodHeup.toLowerCase()) {
            // onsole.log('hep')
            return "#ED9F01";
        } if (vibe.mostCheckedInMood.toLowerCase() === Moods.MoodLep.toLowerCase()) {
            // onsole.log('hep')
            return '#6084FC';
        } if (vibe.mostCheckedInMood.toLowerCase() === Moods.MoodLeup.toLowerCase()) {
            // onsole.log('hep')
            return "#393994";
        }

    }





    return (
        <SafeAreaView style={styles.container}>
            <View  >
                <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginLeft: 24 / 426 * width, marginRight: 24 / 426 * width, marginTop: 32 / 924 * height }}>
                    <Text style={{ color: "#fff", fontSize: 42 }} >Journal</Text>
                    <TouchableOpacity style={{
                        height: 40 / 924 * height, width: 40 / 924 * height, backgroundColor: "#ffffff15", alignItems: "center",
                        justifyContent: "center", borderRadius: 20 / 924 * height
                    }}
                        onPress={() => props.navigation.goBack()}
                    >
                        <Image source={require("../../assets/All_Images/Crose_3x.png")}
                            style={{ height: 12 / 924 * height, width: 12 / 426 * width }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ borderWidth: 1, borderColor: "#F8EDDA10", marginTop: 32 / 924 * height, borderRadius: 80 / 924 * height, width: 380 / 426 * width, marginRight: 20 / 426 * width, marginLeft: 20 / 426 * width, alignItems: "center", flexDirection: "row" }} >
                    <Image source={require("../../assets/All_Images/search_outline_3x.png")} style={{ height: 16 / 924 * height, width: 16 / 924 * height, padding: 10 / 924 * height, marginLeft: 20 / 426 * width }} />
                    <TextInput style={{ padding: 16 / 924 * height }}
                        placeholder='Search past entries by feeling,date, time, etc.'
                        placeholderTextColor={"#F8EDDA25"}
                    />
                </View>
                <View style={{ height: height / 1.5, marginTop: 24 / 924 * height, alignItems: "center", }} >
                    {showIndicater ? <ActivityIndicator color="#fff" size={'large'} style={{ marginTop: 10 / 924 * height, }} /> : (
                        <>
                            {journalData === null || journalData === "" ?
                                <Text style = {{color:'#fff',fontSize:18}}>There is nothing to show </Text> :


                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={journalData}
                                    renderItem={({ item }) =>

                                        <TouchableOpacity style={{ height: 95 / 924 * height, width: 390 / 424 * width, backgroundColor: getMoodColor(item), borderRadius: 16 / 924 * height, marginTop: 8 / 924 * height }}
                                            onPress={() => props.navigation.navigate("SelectedWeekVibes")}
                                        >
                                            <View style={{ paddingLeft: 15 / 429 * width, paddingTop: 15 / 924 * height, height: 95 / 924 * height, width: 380 / 424 * width, backgroundColor: "#1C1C1C", borderRadius: 16 / 924 * height }} >

                                                <Text style={{ fontSize: 28 / 924 * height, color: "#fff" }} >
                                                    {item.dateString}
                                                </Text>
                                                <Text style={{ fontSize: 17, color: "#F8EDDA50", marginTop: 10 / 924 * height }} >{item.totalJournals}  journal entries</Text>
                                            </View>
                                        </TouchableOpacity>


                                    }
                                />}
                        </>

                    )
                    }

                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: '#0f0f0f',
        alignItems: 'center',

    },
});