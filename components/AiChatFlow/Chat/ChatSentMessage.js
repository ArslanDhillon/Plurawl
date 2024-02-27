import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
// import {LinearGradient} from 'expo-linear-gradient'

// import likePrompt from '../../../assets/likePrompt.png'
// import dislikePrompt from '../../../assets/dislikePrompt.png'
// import {globalStyle, CustomFonts} from '../../../assets/styles/styles'


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function ChatSentMessage(props) {
    const message = props.message;
    return (
        <View style = {{flexDirection:'column',width:screenWidth-15}}>
            <View style={{
                padding: 16, width: 342 / 429 * screenWidth, backgroundColor: '#1c1c1c', marginTop: 15, alignSelf: 'flex-end',borderRadius:16
             }}>
                <Text style={[{ color: 'white', lineHeight: 20 },]}>{message.message}</Text>
            </View>
        </View>
    )
};