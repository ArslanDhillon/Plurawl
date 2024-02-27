import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'



const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default function ChatGptMessage(props) {
    const message = props.message;
    // const profile_image = props.profile_image; // use this to show the image
    // console.log("Profile image in gpt mesage " + profile_image)





    return (
        <View style={{
            width: screenWidth-15,marginTop: 15, flexDirection: 'column',
            backgroundColor:"#0f0f0f",marginLeft:15,marginBottom:10
            
        }}>

           
            <Text style={[{ color: '#F8EDDA50', lineHeight: 20 }]}>{message.message}</Text>
        
        </View>
    )
}