import { StyleSheet, Text, View, Dimensions } from 'react-native';
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
import SettingsMainScreen from './components/settingsFlow/SettingsMainScreen';
import ProfileSettingsScreen from './components/settingsFlow/profileSettingsScreen';
import NotificationsSettingScreen from './components/settingsFlow/NotificationsSettingScreen';
import PermissionsSetting from './components/settingsFlow/PermissionsSetting';
import SubscriptionsSettingsScreen from './components/settingsFlow/SubscriptionsSettingsScreen';
import PrivacyPolicyScreen from './components/settingsFlow/PrivacyPolicyScreen';
import TermsAndConditionsScreen from './components/settingsFlow/TermsAndConditionsScreen';
import profileSettingsScreen from './components/settingsFlow/profileSettingsScreen';
import JournalSnapshotScreen from './components/journalFlow/JournalSnapshotScreen';
import SplashScreen from './components/splashFlow/SplashScreen';
import JournalsList from './components/journalFlow/JournalsList';
import JournalSnapshotSaveScreen from './components/journalFlow/JournalSnapshotSaveScreen';
import SelectedWeekVibes from './components/journalFlow/SelectedWeekVibes';
import LastWeekVibes from './components/journalFlow/LastWeekVibes';
import AiChatScreen from './components/AiChatFlow/AiChatScreen';
import GoogleCalenderScreen from './components/googleCalender/GoogleCalenderScreen';



const { height, width } = Dimensions.get("window")

const Stack = createNativeStackNavigator();


const App = () => {

  return (

    <View style={{ height: height }}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignInScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name='SplashScreen' component={SplashScreen} />
          <Stack.Screen name='SlideScreen1' component={SlideScreen1} />
          <Stack.Screen name='SignInScreen' component={SignInScreen} />
          <Stack.Screen name='LoginScreen' component={LoginScreen} />
          <Stack.Screen name='GoalSelectionScreen' component={GoalSelectionScreen} />
          <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
          <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
          <Stack.Screen name='WeeklySummaryMainScreen' component={WeeklySummaryMainScreen} />
          <Stack.Screen name='AiChatScreen' component={AiChatScreen} />
          <Stack.Screen name='GoogleCalenderScreen' component={GoogleCalenderScreen} />
          <Stack.Screen name='BlankJournalScreen' component={BlankJournalScreen} />
          <Stack.Screen name='JournalsList' component={JournalsList} />
          <Stack.Screen name='JournalSnapshotScreen' component={JournalSnapshotScreen} />
          <Stack.Screen name='JournalSnapshotSaveScreen' component={JournalSnapshotSaveScreen} />
          <Stack.Screen name='SelectedWeekVibes' component={SelectedWeekVibes} />
          <Stack.Screen name='LastWeekVibes' component={LastWeekVibes} />
          <Stack.Screen name='TestScreen' component={TestScreen} />
          <Stack.Screen name='CheckInFirstScreen' component={CheckInFirstScreen} />
          <Stack.Screen name='CheckInSecondScreen' component={CheckInSecondScreen} />
          <Stack.Screen name='CheckInThirdScreen' component={CheckInThirdScreen} />
          <Stack.Screen name='CheckInFourthScreen' component={CheckInFourthScreen} />
          <Stack.Screen name='SettingsMainScreen' component={SettingsMainScreen} />
          <Stack.Screen name='NotificationsSettingScreen' component={NotificationsSettingScreen} />
          <Stack.Screen name='PermissionsSetting' component={PermissionsSetting} />
          <Stack.Screen name='PrivacyPolicyScreen' component={PrivacyPolicyScreen} />
          <Stack.Screen name='ProfileSettingsScreen' component={profileSettingsScreen} />
          <Stack.Screen name='SubscriptionsSettingsScreen' component={SubscriptionsSettingsScreen} />
          <Stack.Screen name='TermsAndConditionsScreen' component={TermsAndConditionsScreen} />


        </Stack.Navigator>

      </NavigationContainer>
      
      {/* Lorem ipsum dolor sit amet consectetur. */}
          
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
      {/* <BlankJournalScreen/> */}
      {/* <SettingsMainScreen/> */}
      {/* <ProfileSettingsScreen/> */}
      {/* <NotificationsSettingScreen/> */}
      {/* <PermissionsSetting/> */}
      {/* <SubscriptionsSettingsScreen/> */}
      {/* <PrivacyPolicyScreen/> */}
      {/* <TermsAndConditionsScreen /> */}
      {/* <JournalSnapshotScreen/> */}
      {/* <SplashScreen/> */}
      {/* <AiChatScreen/> */}
      {/* <GoogleCalenderScreen/> */}

    </View>
  )
}

export default App

const styles = StyleSheet.create({})