import React from "react"

import { View, Text, TouchableOpacity, SafeAreaView, Dimensions, Image } from "react-native"

const { height, width } = Dimensions.get("window")
const AiChatScreen = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#0f0f0f', height: height }}>

            <View style={{ height: height, backgroundColor: '#0f0f0f', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' ,width:width,paddingLeft:30/429*width,paddingRight:30/429*width}}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 / 429 * width }}>
                        <Image source={require('../../assets/colorfullCircle.png')}
                            style={{ height: 20 / 924 * height, width: 20 / 924 * height, resizeMode: 'contain' }}
                        />
                        <Text style={{ fontSize: 14, fontWeight: '400', color: '#fff' }}>
                            New Chat
                        </Text>
                    </View>
                    <View style = {{paddingVertical:8/924*height,paddingHorizontal:16/429*width,backgroundColor:'#25252555'}}>
                        <Text style = {{color:'#D44740',fontSize:12,fontWeight:'500'}}>End Chat</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}


export default AiChatScreen;