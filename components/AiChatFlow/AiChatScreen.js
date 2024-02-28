import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet, Text, View, Settings, TextInput, TouchableWithoutFeedback,
    Keyboard, Image, TouchableOpacity, KeyboardAvoidingView, Dimensions,
    FlatList, Modal, Platform,
    SafeAreaView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ChatSentMessage from './Chat/ChatSentMessage';
import ChatGptMessage from './Chat/ChatGptMessage';
import Api from '../Apis/ApiPaths';



const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;



function AiChatScreen({ route, navigation }) {


    let listViewRef;

    const [messages, setMessages] = React.useState([
        { message: "This is a message from salman", id: 1, from: "me", },
        { message: "This is a message from salman", id: 2, from: "gpt", },
        { message: "This is a message from salman", id: 3, from: "me", },
        { message: "This is a message from salman", id: 4, from: "gpt", },
        { message: "This is a message from salman", id: 5, from: "me", },
        { message: "This is a message from salman", id: 6, from: "gpt", },
        { message: "This is a message from salman", id: 7, from: "me", },
        { message: "This is a message from salman", id: 8, from: "gpt", },
        { message: "This is a message from salman", id: 9, from: "me", },
        { message: "This is a message from salman", id: 10, from: "gpt", },

    ])
    const [message, setMessage] = React.useState("")
    const [user, setUser] = useState(null)

    const prompt = [
        { id: 1, promptText: 'Ai generated text here' },
        { id: 2, promptText: 'Ai generated text here' },
        { id: 3, promptText: 'Ai generated text here' },
        { id: 4, promptText: 'Ai generated text here' },
    ];

    const text = 'Create check-in'


    const title = route.params.title
    console.log('title from last screen ', title)

    useEffect(() => {
        

        // createChat();

    }, [])


    return (
        <View style={Styles.container}>
            <SafeAreaView >

                <View style={Styles.titleBar}>
                    <View style={{
                        justifyContent: 'center', alignItems: 'center', gap: 10, flex: 3,
                        flexDirection: 'row'
                    }}>
                        <Image source={require('../../assets/colorfullCircle.png')}
                            style={{ width: 24, height: 24, }} />
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: '500' }}>Doubtin myself</Text>

                    </View>
                    <TouchableOpacity style={{ flex: 1, backgroundColor: '#25252575', alignItems: 'center', justifyContent: 'center', paddingVertical: 10 / 924 * screenHeight, paddingHorizontal: 16 / 429 * screenWidth, borderRadius: 25 }}>
                        <Text style={{ color: 'red', fontSize: 14, fontWeight: '500' }}>End Chat</Text>

                    </TouchableOpacity>
                </View>


                {/*  here create the list of prompts  */}

                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ height: screenHeight - 75 }}                   >
                    <FlatList horizontal={false}
                        style={{ backgroundColor: 'transparent', gap: 0 }}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => (item.id + item.from)}
                        ref={(ref) => {
                            // console.log("Setting list Ref")
                            listViewRef = ref;
                        }}
                        onContentSizeChange={() => {
                            if (listViewRef !== null) {
                                listViewRef._listRef._scrollRef.scrollToEnd({ animated: true })
                            }
                        }}
                        data={messages}
                        renderItem={({ item, index, separators }) =>
                            item.from === "me" ? (
                                <ChatSentMessage message={item} />
                            ) :
                                (
                                    <ChatGptMessage message={item} profile_image={""}
                                        likePrompt={() => { }} dislikePrompt={() => { }} handleFlag={() => { }} />
                                )
                        }
                    />


                    {/* here ai genrated prompt */}


                    {/* <View style={{ margin: 10, marginTop: 10 }}>
                        <FlatList horizontal showsHorizontalScrollIndicator={false}
                            data={prompt}
                            renderItem={({ item }) =>
                                <View style={{ backgroundColor: '#1c1c1c', paddingHorizontal: 32 / 429 * screenWidth, paddingVertical: 16 / 924 * screenHeight, borderRadius: 30 / 934 * screenHeight, marginLeft: 10 }}>
                                    <Text style={{ color: '#fff', fontSize: 17, fontWeight: '700' }}>{item.promptText}</Text>
                                </View>
                            }
                        />
                    </View> */}



                    <View style={[Styles.inputField,]}>
                        <TextInput autoFocus={true} placeholder='Chat' value={message} autoCorrect={false} spellCheck={false} multiline={true}
                            placeholderTextColor={'#F8EDDA50'}
                            style={{
                                color: '#F8EDDA50', borderWidth: 1,
                                borderColor: '#F8EDDA25',

                                borderRadius: 25,
                                padding: 15, paddingTop: 10,
                                width: 361 / 429 * screenWidth

                            }} onChangeText={setMessage} ></TextInput>

                        <TouchableOpacity>
                            <View style={{
                                backgroundColor: '#1c1c1c', borderRadius: 23, width: 45, height: 45,
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Image source={require('../../assets/enterArrow.png')}
                                    style={{ height: 16, width: 16, resizeMode: 'contain' }}
                                />

                            </View>
                        </TouchableOpacity>

                    </View>

                </KeyboardAvoidingView>

            </SafeAreaView>
        </View>
    )
}

const Styles = StyleSheet.create({

    inputField: {

        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 8,
        marginLeft: 10,
        gap: 8 / 426 * screenWidth,
        width: screenWidth

    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#0f0f0f',
        alignItems: 'center',
        justifyContent: 'start',


        width: screenWidth,
    },
    titleBar: {
        width: screenWidth,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0f0f0f50',
        justifyContent: 'space-between',
        marginTop: 30 / 924 * screenHeight, marginBottom: 30,
    }
})

export default AiChatScreen