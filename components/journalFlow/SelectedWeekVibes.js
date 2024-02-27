import { useEffect, useState } from "react";
import { FlatList, ImageBackground, SafeAreaView, SectionList } from "react-native";
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import Moods from "../../models/moods";

const { height, width } = Dimensions.get("window")


const WhiteNextArrow = require("../../assets/All_Images/WhiteNextArrow_3x.png")
const EmotionalReasoning = require("../../assets/All_Images/Emotional_Reasoning_3x.png")
const FortuneTelling = require("../../assets/All_Images/Fortune_Telling_3x.png")
const LabelingMind = require("../../assets/All_Images/Labeling_Mind-Reading-3x.png")
const diagramIcon = require("../../assets/All_Images/diagramIcon_3x.png")
const lodingCircal = require("../../assets/All_Images/lodingCircal_3x.png")


export default function SelectedWeekVibes({ navigation, route }) {

    const [Data, setData] = useState([]);

    const hep = require("../../assets/gradientImage.png");
    const lep = require("../../assets/lowEnergyUnpleasant (2).png");
    const heup = require("../../assets/highUnEnergyPleasantBg.png");
    const leup = require("../../assets/lowEnergyUnpleasant (2).png");
    
    useEffect(() => {
        let vibe = route.params.vibe;
        let journalEnteries = { title: "Journal Entries", data: vibe.journals }
        let checkins = []
        let vibeCheckins = vibe.checkins
        // console.log("Checkins are ", vibeCheckins)
        // vibeCheckins.forEach((item)=> {
        // console.log("Foreach ", item)
        // })
        for (let i = 0; i < vibeCheckins.length; i = i + 4) {
            checkins.push({ title: `${i}` })
        }

        console.log("CHeckins after processing", checkins)


        let checkinsData = { title: "Check Ins", data: checkins }
        let aiChats = { title: "AI Chats", data: [] }
        let drafts = { title: "Drafts", data: [] }
        setData([journalEnteries, aiChats, drafts, { title: "Check Ins", data: checkins }])
        console.log("set data in Data ",Data?Data.journalEnteries:'null')
    }, [])

    console.log("Data from last screen is ", route.params.vibe)



    const getColor = (index) => {
        console.log(`Getting color of index  ${index}  | Mood = ${route.params.vibe.checkins[index].mood}`)

        if (route.params.vibe.checkins[index].mood === null) {
            console.log("Gray")
            return "gray"
        }
        if (route.params.vibe.checkins[index].mood === Moods.MoodHep) {
            console.log("hep c")
            return '#FCD860';
        }

        if (route.params.vibe.checkins[index].mood=== Moods.MoodHeup) {
            console.log("heup c")
            return "#ED9F01";
        }
        if (route.params.vibe.checkins[index].mood === Moods.MoodLep) {
            console.log("lep c")
            return '#6084FC';
        }
        if (route.params.vibe.checkins[index].mood === Moods.MoodLeup) {
            console.log("leup c")
            return "#393994";
        }

    };

    const selectCheckInBg = () => {
        // return
        if (route.params.vibe.mostCheckedInMood === null) {
            // console.log("Gray")
            return
        }
        if (route.params.vibe.mostCheckedInMood === Moods.MoodHep) {
            // console.log("hep")
            return hep;
        }

        if (route.params.vibe.mostCheckedInMood === Moods.MoodHeup) {
            // console.log("heup")
            return heup;
        }
        if (route.params.vibe.mostCheckedInMood === Moods.MoodLep) {
            // console.log("lep")
            return lep;
        }
        if (route.params.vibe.mostCheckedInMood === Moods.MoodLeup) {
            // console.log("leup")
            return leup;
        }

    };



    return (
        <SafeAreaView style={styles.container} >
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginLeft: 24 / 426 * width, alignSelf: "flex-start", marginTop: 25 / 924 * height }}
                onPress={() => navigation.goBack()}
            >
                <Image style={{ height: 20 / 924 * height, width: 13 / 426 * width, resizeMode: 'contain' }} source={require("../../assets/All_Images/RedBackArrow_3x.png")} />
                <Text style={{ color: "#D44740", fontSize: 17 }} >  Journal</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 24, marginBottom: 0 }}>
                <TouchableOpacity>
                    <Image style={{ height: 20 / 924 * height, width: 20 / 426 * width, resizeMode: 'contain' }} source={require("../../assets/All_Images/WhiteLeftBackArrow_3x.png")} />
                </TouchableOpacity>
                <Text style={{ color: "#fff", fontSize: 17 }} > Dec 17 -Dec 23 </Text>
                <TouchableOpacity>
                    <Image style={{ height: 20 / 924 * height, width: 20 / 426 * width, resizeMode: 'contain' }} source={require("../../assets/All_Images/WhiteRightNextArrow_3x.png")} />
                </TouchableOpacity>
            </View>
            {/* <View style={{alignItems:"center",}}>
                <ImageBackground style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between", height: 70 / 924 * height, width: 390 / 426 * width, }}  source={require("../assets/All_Images/SmallYellowGradent_3x.png")}>
                    <Text style={{ fontSize: 20,marginLeft:16 }} >Weekly Vibe</Text>
                    <View style={{height:55/924*height,width:54/924*height,marginRight:16,borderRadius:10/924*height}}>
                    <Image source={require("../assets/All_Images/Gif/LadyDance_Gif.gif")} style={{height:54/924*height,width:55/924*height,}} />                    
                    </View>
                    
                </ImageBackground>
            </View> */}


            <TouchableOpacity style={{ alignItems: "center", marginTop: 10 / 924 * height }}
                onPress={() => navigation.navigate("LastWeekVibes")}

            >
                <View style={{ overflow: 'hidden', height: 70 / 924 * height, width: 390 / 429 * width, borderRadius: 16 / 924 * height, }}>
                    <ImageBackground source={selectCheckInBg()} style={{ height: 70 / 924 * height, width: 390 / 429 * width, borderRadius: 16 / 924 * height, }}>
                        <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", justifyContent: "space-between", marginLeft: 16 / 426 * width, marginRight: 16 / 426 * width }}>
                            <Text style={{ fontSize: 18, fontWeight: '500', }}>Last week's vibe</Text>
                            <View style={{ height: 55 / 924 * height, width: 54 / 926 * height, overflow: 'hidden', borderBottomRightRadius: 5 / 924 * height, borderTopRightRadius: 5 / 924 * height, borderTopLeftRadius: 5 / 924 * height, borderBottomLeftRadius: 5 / 924 * height, marginTop: 8 / 924 * height }}>
                                <Image source={require('../../assets/All_Images/Gif/LadyDance_Gif.gif')} style={{ height: 55 / 924 * height, width: 54 / 924 * height }} />
                            </View>
                        </View>
                    </ImageBackground>
                </View>

            </TouchableOpacity>

            <View style={{ marginTop: 24 / 924 * height, height: height / 1.5, alignItems: "center" }} >

                <SectionList showsVerticalScrollIndicator ={false}
                    sections={Data}
                    keyExtractor={(item, index) => item + index}

                    renderItem={({ item, index, section }) => (
                        section.title !== "Check Ins" ? (
                            <View style={{alignSelf:'center'}}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 16 / 924 * height, backgroundColor: '#ffffff15', width: 390 / 429 * width, borderRadius: 10 / 924 * height, margin: 8 / 924 * height }} >
                                    <View style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10 / 924 * height }}>
                                            <Text style={{ color: "#fff",fontSize:22,fontWeight:'400' }} >{item.title === "" ? "My Journal" : item.title}</Text>
                                            <Image source={item.Imageicon} style={{ height: 16 / 924 * height, width: 16 / 924 * height, resizeMode: 'contain' }} />
                                        </View>
                                        <Text style={{ fontSize: 12, marginTop: 5 / 924 * height, color: "#fff" }} >{item.createdAt}</Text>
                                    </View>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }}>
                                        <Image source={item.ArrowImage} style={{ height: 24 / 924 * height, width: 24 / 924 * height, resizeMode: 'contain' }} />
                                    </TouchableOpacity>
                                </View>
                                
                            </View>
                        )
                            :
                            (
                                section.title === "Check Ins" && (
                                    <View style = {{alignSelf:'center'}}>
                                        <View style={{ alignItems:'center',flexDirection: "row", justifyContent: "space-between", padding: 16 / 924 * height, backgroundColor: 'transparent', width: 390 / 429 * width, borderRadius: 10 / 924 * height, margin: 8 / 924 * height }} >
                                            {
                                                route.params.vibe.checkins.length >  4 * index && (
                                                    <View style={{ flexDirection: 'column', gap: 4, justifyContent: 'cetner',alignItems:'center' }}>
                                                        <View style={{ backgroundColor: getColor( 4 * index), height: 32, width: 32, borderRadius: 16 }}></View>
                                                        <Text lineBreakMode='tail'numberOfLines={1} style={{ color: 'white' ,width:70/429*width}}>{route.params.vibe.checkins[index].feeling}</Text>
                                                    </View>
                                                )
                                            }
                                           {
                                                route.params.vibe.checkins.length > 4 * index + 1 && (
                                                    <View style={{ flexDirection: 'column', gap: 4, justifyContent: 'cetner',alignItems:'center' }}>
                                                        <View style={{ backgroundColor:getColor( 4 * index + 1), height: 32, width: 32, borderRadius: 16 }}></View>
                                                        <Text lineBreakMode='tail'numberOfLines={1} style={{ color: 'white',width:70/429*width }}>{route.params.vibe.checkins[index].feeling}</Text>
                                                    </View>
                                                )
                                            }
                                            {
                                                route.params.vibe.checkins.length > 4 * index + 2 && (
                                                    <View style={{ flexDirection: 'column', gap: 4, justifyContent: 'cetner',alignItems:'center' }}>
                                                        <View style={{ backgroundColor:getColor( 4 * index + 2), height: 32, width: 32, borderRadius: 16 }}></View>
                                                        <Text lineBreakMode='tail'numberOfLines={1} style={{ color: 'white',width:70/429*width }}>{route.params.vibe.checkins[index].feeling}</Text>
                                                    </View>
                                                )
                                            }
                                            {
                                                route.params.vibe.checkins.length > 4 * index + 3 && (
                                                    <View style={{ flexDirection: 'column', gap: 4, justifyContent: 'cetner',alignItems:'center' }}>
                                                        <View style={{ backgroundColor: getColor( 4 * index + 3), height: 32, width: 32, borderRadius: 16 }}></View>
                                                        <Text lineBreakMode='tail'numberOfLines={1} style={{ color: 'white',width:70/429*width }}>{route.params.vibe.checkins[index].feeling}</Text>
                                                    </View>
                                                )
                                            }
                                        </View>

                                    </View>
                                )
                            )



                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <View style={{ backgroundColor: '#0f0f0f', width: width, height: 45,paddingLeft:10/429*width }}>
                            <Text style={{ color: "#F8F7E850", fontSize: 17, fontWeight: '800', marginLeft: 12 / 429 * width, marginTop: 25 / 924 * height }}>{title}</Text>
                        </View>

                    )}
                />

            </View>



        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        backgroundColor: '#0f0f0f',

    },
    headers: {

        height: 80 / 924 * height,
        width: 390 / 426 * width,
        justifyContent: "flex-end",


        color: "#f8f7e8"

    },
    item: {
        backgroundColor: "#ffffff15",
        height: 82 / 924 * height,
        width: 390 / 426 * width,
        borderRadius: 8 / 926 * height,
        marginTop: 8 / 926 * height,
        padding: 15 / 924 * height,

    }


});