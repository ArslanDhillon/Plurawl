import { StyleSheet, Text, View ,Dimensions} from 'react-native';
import React from 'react';
import SlideScreen1 from './components/splashFlow/SlideScreen1';
import { StatusBar } from 'react-native';
import SignInScreen from './components/loginFlow/SignInScreen';
import LoginScreen from './components/loginFlow/LoginScreen';
import GoalSelectionScreen from './components/loginFlow/GoalSelectionScreen';
import ProfileScreen from './components/loginFlow/ProfileScreen';
import WelcomeScreen from './components/loginFlow/WelcomeScreen';
import WeeklySummaryMainScreen from './components/weeklySummaryFlow/WeeklySummmaryStartScreen'
import CheckInFirstScreen from './components/weeklySummaryFlow/CheckInFirstScreen';
import CheckInSecondScreen from './components/weeklySummaryFlow/CheckInSecondScreen';
import CheckInThirdScreen from './components/weeklySummaryFlow/CheckInThirdScreen';
import CheckInFourthScreen from './components/weeklySummaryFlow/CheckInFourthScreen';
import TestScreen from './TestScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BlankJournalScreen from './components/journalFlow/BlankJournalScreen';




const {height,width} = Dimensions.get("window")

const Stack = createNativeStackNavigator();


const App = () => {
  
  return (
  
    <View style = {{height:height}}>
      <StatusBar barStyle={'light-content'}/>
      {/* <NavigationContainer>
        <Stack.Navigator initialRouteName='SlideScreen1' screenOptions={{headerShown:false}}>
          <Stack.Screen name='SlideScreen1' component={SlideScreen1} />
          <Stack.Screen name='SignInScreen' component={SignInScreen} />
          <Stack.Screen name='GoalSelectionScreen' component={GoalSelectionScreen} />
          <Stack.Screen name='ProfileScreen' component={ProfileScreen} />          
          <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
          <Stack.Screen name='WeeklySummaryMainScreen' component={WeeklySummaryMainScreen} />
          <Stack.Screen name='CheckInFirstScreen' component={CheckInFirstScreen} />
          <Stack.Screen name='CheckInSecondScreen' component={CheckInSecondScreen} />
          <Stack.Screen name='CheckInThirdScreen' component={CheckInThirdScreen} />
          <Stack.Screen name='CheckInFourthScreen' component={CheckInFourthScreen} />
          <Stack.Screen name='CheckInFirstScreen' component={CheckInFirstScreen} />


        </Stack.Navigator>

      </NavigationContainer> */}

      {/* <Test/> */}

      {/* <SlideScreen1/> */}
      {/* <SignInScreen/> */}
      {/* <LoginScreen/> */}
      {/* <GoalSelectionScreen/> */}
      {/* <ProfileScreen/> */}
      {/* <TestScreen/> */}
      {/* <WelcomeScreen/> */}
      {/* <WeeklySummaryMainScreen/> */}
      {/* <CheckInFirstScreen/> */}
      {/* <CheckInSecondScreen/> */}
      {/* <CheckInThirdScreen/> */}
      {/* <CheckInFourthScreen/> */}
      <BlankJournalScreen/>



    </View>
  )
}

export default App

const styles = StyleSheet.create({})