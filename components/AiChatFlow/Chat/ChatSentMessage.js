import React from "react";

import { View,Text , } from "react-native";


const ChatSentMessage = (message) =>{
// const message = props.message

    return(
        <View>
            <Text style = {{color:"#fff"}}>{message.text}</Text>
        </View>
    )
};

export default ChatSentMessage;