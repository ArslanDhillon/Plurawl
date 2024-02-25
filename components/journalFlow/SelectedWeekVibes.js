import { FlatList, ImageBackground, SafeAreaView, SectionList } from "react-native";
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get("window")


const WhiteNextArrow = require("../../assets/All_Images/WhiteNextArrow_3x.png")
const EmotionalReasoning = require("../../assets/All_Images/Emotional_Reasoning_3x.png")
const FortuneTelling = require("../../assets/All_Images/Fortune_Telling_3x.png")
const LabelingMind = require("../../assets/All_Images/Labeling_Mind-Reading-3x.png")
const diagramIcon = require("../../assets/All_Images/diagramIcon_3x.png")
const lodingCircal = require("../../assets/All_Images/lodingCircal_3x.png")

const Data = [
    {
        title: 'Journal entries',      //Journal enteries
        data: [
            {
                id: 1,
                Name: "Doubting Myself",
                Date: "Dec 21",
                ArrowImage: WhiteNextArrow,
                Imageicon: EmotionalReasoning,
            }, {
                id: 2,
                Name: "Doubting Myself",
                Date: "Dec 21",
                ArrowImage: WhiteNextArrow,
                Imageicon: EmotionalReasoning,
            }, {
                id: 3,
                Name: "Doubting Myself",
                Date: "Dec 21",
                ArrowImage: WhiteNextArrow,
                Imageicon: EmotionalReasoning,
            }, {
                id: 4,
                Name: "Doubting Myself",
                Date: "Dec 21",
                ArrowImage: WhiteNextArrow,
                Imageicon: EmotionalReasoning,
            },
        ],
    },
    {
        title: 'AI Chats',
        data: [
            {
                id: 1,
                Name: "Doubting Myself",
                Date: "Dec 21",
                ArrowImage: WhiteNextArrow,
                Imageicon: lodingCircal,
            }, {
                id: 2,
                Name: "Doubting Myself",
                Date: "Dec 21",
                ArrowImage: WhiteNextArrow,
                Imageicon: lodingCircal,
            },
        ],
    },
    {
        title: 'Drats',
        data: [
            {
                id: 1,
                Name: "Doubting Myself",
                Date: "Dec 21",
                ArrowImage: WhiteNextArrow,
                Imageicon: EmotionalReasoning,
            }, {
                id: 2,
                Name: "Doubting Myself",
                Date: "Dec 21",
                ArrowImage: WhiteNextArrow,
                Imageicon: EmotionalReasoning,
            },
        ],
    },
    {
        title: 'Check Ins',
        data: [
            {
                id: 1,
                color: '#FCD86085',
                feeling: 'Bliss',
                data: '27 Feb'
            },
            {
                id: 2,
                color: '#FCD86085',
                feeling: 'Bliss',
                data: '27 Feb'
            },
            {
                id: 3,
                color: '#FCD86085',
                feeling: 'Bliss',
                data: '27 Feb'
            },
            {
                id: 4,
                color: '#6084FC',
                feeling: 'Bliss',
                data: '27 Feb'
            },
            {
                id: 5,
                color: '#6084FC',
                feeling: 'Bliss',
                data: '27 Feb'
            },
            {
                id: 6,
                color: '#FCD86085',
                feeling: 'Bliss',
                data: '27 Feb'
            }, {
                id: 7,
                color: '#6084FC',
                feeling: 'Bliss',
                data: '27 Feb'
            }, {
                id: 8,
                color: '#6084FC',
                feeling: 'Bliss',
                data: '27 Feb'
            },
        ],
    },
];


export default function SelectedWeekVibes(props) {
    return (
        <SafeAreaView style={styles.container} >
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginLeft: 24 / 426 * width, alignSelf: "flex-start", marginTop: 25 / 924 * height }}
                onPress={() => props.navigation.goBack()}
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
                onPress={() => props.navigation.navigate("LastWeekVibes")}

            >
                <View style={{ overflow: 'hidden', height: 70 / 924 * height, width: 390 / 429 * width, borderRadius: 16 / 924 * height, }}>
                    <ImageBackground source={require('../../assets/All_Images/YellowGradent.png')} style={{ height: 70 / 924 * height, width: 390 / 429 * width, borderRadius: 16 / 924 * height, }}>
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

                <SectionList
                    sections={Data}
                    keyExtractor={(item, index) => item + index}

                    renderItem={({ item, index }) => (
                        <View>
                            {<View style={{ flexDirection: "row", justifyContent: "space-between", padding: 16 / 924 * height, backgroundColor: '#ffffff15', width: 390 / 429 * width, borderRadius: 10 / 924 * height, margin: 8 / 924 * height }} >
                                <View>
                                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10 / 924 * height }}>
                                        <Text style={{ color: "#fff", }} >{item.Name}</Text>
                                        <Image source={item.Imageicon} style={{ height: 16 / 924 * height, width: 16 / 924 * height, resizeMode: 'contain' }} />
                                    </View>
                                    <Text style={{ fontSize: 12, marginTop: 5 / 924 * height, color: "#fff" }} >{item.Date}</Text>
                                </View>
                                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Image source={item.ArrowImage} style={{ height: 24 / 924 * height, width: 24 / 924 * height, resizeMode: 'contain' }} />
                                </TouchableOpacity>
                            </View>
                            }
                        </View>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <View style={{ backgroundColor: '#0f0f0f', width: width, height: 45 }}>
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