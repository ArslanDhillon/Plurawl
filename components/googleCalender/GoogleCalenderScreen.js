import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Calendar from 'expo-calendar';



// const apiCalendar = new ApiCalendar(config)


export default function GoogleCalenderScreen() {

  const [calLoaded, setCalLoaded] = React.useState(false)

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await Calendar.getDefaultCalendarAsync(Calendar.EntityTypes.EVENT);
        console.log('Here are all your calendars:');
        if (calendars) {
          let calendarId = calendars.id
          console.log("Calendar Id ", calendarId)
          try {
            const numWeeks = 1;
            const weekLater = new Date();
            weekLater.setDate(weekLater.getDate() + numWeeks * 7);
            let events = await Calendar.getEventsAsync([calendarId], Date.now(), weekLater)
            console.log("Events ")
            console.log("events",JSON.stringify(events))
          }
          catch(error){
            console.log("error ", error)
          }
      }
        // console.log(JSON.stringify(calendars));
      }
    })();
  }, []);

  useEffect(() => {

  }, [])

  const handleAuth = () => {
    // apiCalendar.handleAuthClick()

    // if (apiCalendar.gapi) {
    //   apiCalendar.gapi.auth2.getAuthInstance().signIn();
    // } else {
    //   console.log('Error: this.gapi not loaded');
    // }
  }

  const listenEvents = () => {
    // if (apiCalendar.sign){
    //   apiCalendar.listUpcomingEvents(10)
    //   .then(({result}) => {
    //     console.log(result.items);
    //   });
    // }
    // else{
    //   console.log("Not signed in")
    // }
  }


  return (
    <View style={styles.container}>
      <Button onPress={handleAuth} title='Auth Calendar' />
      <Button onPress={listenEvents} title='List Events' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});