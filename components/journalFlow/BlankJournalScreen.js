import {
    Text, StyleSheet, View, SafeAreaView, Dimensions, Image, TouchableOpacity, TextInput,
    Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, ScrollView
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { globalStyles } from '../globalStyles/styles';

export default BlankJournalScreen = () => {
    const { height, width } = Dimensions.get('window')
    const [text, setText] = useState('')
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [buttonPosition, setButtonPosition] = useState(Dimensions.get('window').height - 100); // Initially set to bottom
    const [inputValue, setInputValue] = useState('');
    const scrollViewRef = useRef(null);
    const screenHeight = Dimensions.get('window').height;




    const handleKeyboardDidShow = (event) => {
        const keyboardHeight = event.endCoordinates.height;
        setKeyboardHeight(keyboardHeight);
        setIsKeyboardVisible(true);
        setButtonPosition(screenHeight - keyboardHeight - 500 / 924 * height); // Adjust button position based on keyboard height
        scrollViewRef.current.scrollTo({ y: 0, animated: true }); // Scroll the ScrollView to the top
    };

    const handleKeyboardDidHide = () => {
        setIsKeyboardVisible(false);
        setButtonPosition(screenHeight - 100 / 924 * height); // Set button to bottom when keyboard hides
    };

    const onPressButton = () => {
        // Your button action
    };



    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);
    return (
        <SafeAreaView style={{ backgroundColor: "#0f0f0f", height: height }}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1, flexDirection: 'column', }}>
                <TouchableWithoutFeedback style={{ height: height }} onPress={Keyboard.dismiss}>
                    <View style={{ backgroundColor: '#0f0f0f', flex: 1, width: width }}>
                        <View style={{ flexDirection: 'row', width: width - 40 / 429 * width, alignItems: 'center', marginTop: 30 / 924 * height, justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', gap: 8 / 429 * width }}>
                                <TouchableOpacity>
                                    <Image source={require('../../assets/backArrow.png')}
                                        style={{ height: 24 / 924 * height, width: 24 / 429 * width, resizeMode: 'contain', marginLeft: 20 / 429 * width }}
                                    />
                                </TouchableOpacity>

                                <Text style={{ fontSize: 17, fontWeight: '700', color: '#FFFFFF50', textAlign: 'center' }}>Journal</Text>
                            </View>
                            {inputValue ? <TouchableOpacity style={{ height: 36 / 924 * height, width: 72 / 429 * width, alignSelf: 'center' }}>
                                < View
                                    style={{ height: 36 / 924 * height, width: 72 / 429 * width,  backgroundColor: '#FFFFFF30', borderRadius: '20%', justifyContent: 'center', alignItems: 'center'}}
                                >
                                    <Text style={{color: 'red'}}>Done</Text>
                                </View>
                            </TouchableOpacity> : '' }

                        </View>

                        <TextInput placeholder='New Journal' placeholderTextColor={"#fff"}
                            style={{ fontSize: 34, fontWeight: '500', marginTop: 30 / 925 * height, color: '#fff', width: 380 / 429 * width, alignSelf: "center" }} />

                        <ScrollView
                            ref={scrollViewRef}
                            style={{ width: '100%', maxHeight: screenHeight - (isKeyboardVisible ? keyboardHeight + 50 : 50) }}
                        >
                            <TextInput placeholder='Jot your thoughts down here...'
                                placeholderTextColor={"#fff"}
                                style={{ fontSize: 17, fontWeight: '500', margin: 15 / 925 * height, color: '#fff', width: 380 / 429 * width, alignSelf: 'center', height: 600 / 924 * height }}

                                numberOfLines={500}
                                textAlignVertical="top"
                                value={inputValue}
                                onChangeText={setInputValue}
                                maxLength={10000} // Allow up to 1000 characters
                                multiline={true} // Enable multiline input
                                autoFocus={true} // Set to false to prevent auto focus on input
                                onFocus={() => scrollViewRef.current.scrollTo({ y: 0, animated: true })} // Scroll to top when input is focused
                            />
                        </ScrollView>
                        <View style={[styles.buttonContainer, { bottom: isKeyboardVisible ? buttonPosition : 50 }]}>
                            <TouchableOpacity style={{ alignSelf: 'center', padding: 15, backgroundColor: '#252525', borderRadius: 80 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 / 429 * width }}>
                                    <Image source={require('../../assets/colorfullCircle.png')} style={{ height: 24 / 924 * height, width: 24 / 924 * height, resizeMode: 'contain' }} />
                                    {inputValue?<Text style={{ fontSize: 15, fontWeight: '500', color: '#fff' }}> Chat with Plural.ai</Text>:
                                        <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff' }}>Analyze with Plurawl.ai</Text>
                                    }
                                </View>

                            </TouchableOpacity>
                        </View>

                        {/* 
                        <TextInput placeholder='Jot your thoughts down here...'
                            value={text}
                            onChangeText={(item) => setText(item)}
                            placeholderTextColor={"#fff"}
                            style={{ fontSize: 17, fontWeight: '500', margin: 15 / 925 * height, color: '#fff', width: 380 / 429 * width, alignSelf: 'center', height: 600 / 924 * height }}
                            multiline
                            maxLength={10000}
                            numberOfLines={100}
                            textAlignVertical="top"
                        /> */}
                        {/* <TouchableOpacity style={{ alignSelf: 'center', padding: 15, backgroundColor: '#252525', borderRadius: 80 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 / 429 * width }}>
                                <Image source={require('../../assets/colorfullCircle.png')} style={{ height: 24 / 924 * height, width: 24 / 924 * height, resizeMode: 'contain' }} />
                                <Text style={{ fontSize: 15, fontWeight: '500', color: '#fff' }}> Chat with Plural.ai</Text>
                            </View>

                        </TouchableOpacity> */}



                    </View>
                </TouchableWithoutFeedback>

            </KeyboardAvoidingView>
        </SafeAreaView>

    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        textAlignVertical: 'top', // Align text to the top
    },
    buttonContainer: {
        position: 'absolute',
        right: 0,
        left: 0,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
})