import React from "react"

import {
    View, Text, TouchableOpacity, SafeAreaView, Dimensions, Image, KeyboardAvoidingView, Platform,
    TextInput, TouchableWithoutFeedback, Keyboard, FlatList, StyleSheet
}
    from "react-native"
import ChatSentMessage from "./Chat/ChatSentMessage"


const { height, width } = Dimensions.get("window")
const AiChatScreen = () => {

    const messages = [
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet consectetur. Risus nunc nunc velit egestas nisl risus nunc.",
            fromMe:false
        }, {
            id: 2,
            text: "Lorem ipsum dolor sit amet consectetur. Risus nunc nunc velit egestas nisl risus nunc.",
            fromMe:true
        }, {
            id: 3,
            text: "Lorem ipsum dolor sit amet consectetur. Risus nunc nunc velit egestas nisl risus nunc.",
            fromMe:false
        }, {
            id: 4,
            text: "Lorem ipsum dolor sit amet consectetur. Risus nunc nunc velit egestas nisl risus nunc.",
            fromMe:true
        }, {
            id: 5,
            text: "Lorem ipsum dolor sit amet consectetur. Risus nunc nunc velit egestas nisl risus nunc.",
            fromMe:false
        }, {
            id: 6,
            text: "Lorem ipsum dolor sit amet consectetur. Risus nunc nunc velit egestas nisl risus nunc.",
            fromMe:true
        },
    ];

    const aiPrompt =[
        {
            id:1,
            prompt:"Ai genrated prompt here"
        }, {
            id:2,
            prompt:"Ai genrated prompt here"
        }, {
            id:3,
            prompt:"Ai genrated prompt here"
        },
    ]



    return (
        <SafeAreaView style={{ backgroundColor: '#0f0f0f', height: height }}>

            <View style={{ backgroundColor: '#0f0f0f', alignItems: 'center', }}>

                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flexDirection: 'column', }}>
                    {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: width, paddingLeft: 20 / 429 * width, paddingRight: 20 / 429 * width, marginTop: 40 / 924 * height }}>

                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 / 429 * width }}>
                                    <Image source={require('../../assets/colorfullCircle.png')}
                                        style={{ height: 20 / 924 * height, width: 20 / 924 * height, resizeMode: 'contain' }}
                                    />
                                    <Text style={{ fontSize: 14, fontWeight: '400', color: '#fff' }}>
                                        New Chat
                                    </Text>
                                </View>
                                <TouchableOpacity>
                                    <View style={{ paddingVertical: 8 / 924 * height, paddingHorizontal: 16 / 429 * width, backgroundColor: '#25252555', borderRadius: 20 }}>
                                        <Text style={{ color: '#D44740', fontSize: 12, fontWeight: '500' }}>End Chat</Text>
                                    </View>
                                </TouchableOpacity>


                            </View>
                            <View style={{height:368/924*height,}}>
                                <FlatList showsVerticalScrollIndicator= {false}
                                    style={{ backgroundColor: 'transparen' }}
                                    data={messages}
                                    renderItem={({item}) => (
                                        <View style = {item.fromMe?styles.sentMesageStyle:styles.responseStyle}>
                                          <Text style = {{color:'#F8EDDA',fontSize:14,fontWeight:'500'}}>{item.text}</Text>
                                        </View>
                                    )}
                                />

                            </View>

                            <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>

                                <FlatList 
                                    data={aiPrompt}
                                />


                                <TextInput placeholder="Chat" placeholderTextColor={"#F8EDDA70"} autoFocus={true}
                                    style={{
                                        paddingTop: 16 / 924 * height, borderWidth: 1, borderRadius: 30 / 924 * height, borderColor: '#F8EDDA25', width: width - 20, color: '#F8EDDA70',
                                        paddingBottom: 15 / 924 * height, paddingHorizontal: 25 / 924 * height,marginTop:15
                                    }}
                                />
                            </View>
                        </View>
                    {/* </TouchableWithoutFeedback> */}
                </KeyboardAvoidingView>

            </View>
        </SafeAreaView>
    )
}


export default AiChatScreen;

const styles = StyleSheet.create({
    sentMesageStyle :{
        backgroundColor:'#1C1C1C',
        padding:16,
        marginTop:30/924*height,
        marginRight:10/429*height,
        borderRadius:16,
        width:342*429/width,
        alignSelf:'flex-end',
    },
    responseStyle:{
        color:'#F8EDDA50',
        width:326,
        marginTop:30/924*height,
        marginLeft:30/429*width,
    }
})