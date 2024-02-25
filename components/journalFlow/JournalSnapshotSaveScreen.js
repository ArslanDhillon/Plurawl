import { StyleSheet, Text, View,SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from '../globalStyles/styles'
import WeeklySummaryMainScreen from '../weeklySummaryFlow/WeeklySummmaryStartScreen'

const JournalSnapshotSaveScreen = ({route,navigation}) => {
    const checkIn = route.params.checkIn
    console.log("check n from last screen",checkIn.saveCheckIn)

    const {height,width} = Dimensions.get("window")
    return (
        <SafeAreaView style={{ backgroundColor: '#0f0f0f', height: height }}>

            <View style={{ flex: 1, backgroundColor: '#0f0f0f', alignItems: 'center', justifyContent: 'center' }}>
               <Image source={require('../../assets/successIcon.png')} 
                    style = {{height:40/924*height,width:40/924*height,resizeMode:'contain'}}
               />
               <Text style = {{fontSize:12,fontWeight:'500',color:'#fff',marginTop:15/924*height}}>Journal saved!</Text>
               {checkIn.saveCheckIn === true ?<Text style = {{fontSize:12,fontWeight:'500',color:'#fff',marginTop:25/924*height}}>Check-in saved!</Text>:''}

               <TouchableOpacity style = {{marginTop:50/924*height}} 
                    onPress={()=>navigation.replace("WeeklySummaryMainScreen")}
               >
                    <Text style = {[globalStyles.capsuleBtnText,{color:'red'}]}>Go back to home</Text>
               </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default JournalSnapshotSaveScreen

const styles = StyleSheet.create({})