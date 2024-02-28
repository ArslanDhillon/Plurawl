import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import * as Calendar from 'expo-calendar';



// const apiCalendar = new ApiCalendar(config)


export default function GoogleCalenderScreen() {

  const [calLoaded, setCalLoaded] = React.useState(false)

  const { height, width } = Dimensions.get('window');
  const [event, setEvent] = useState([])
  const [status, setSatuts] = useState(false)


  useEffect(() => {
    console.log("Event changed", event)
  }, [event])


  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        setSatuts(true)
        const calendars = await Calendar.getDefaultCalendarAsync(Calendar.EntityTypes.EVENT);
        console.log('Here are all your calendars:');
        if (calendars) {
          let calendarId = calendars.id
          console.log("Calendar Id ", calendarId)
          try {
            const numWeeks = 1;
            const weekLater = new Date();
            weekLater.setDate(weekLater.getDate() + numWeeks * 7);
            let e = await Calendar.getEventsAsync([calendarId], Date.now(), weekLater)
            console.log("Events ")
            let event = e
            setEvent(event)
            console.log("events", event)
          }
          catch (error) {
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
      {/* <TouchableOpacity> */}


      {status ?
        (
          event.length !== 0 ? (
            <View style={{ height: 174 / 924 * height, width: 191 / 429 * width, backgroundColor: '#1C1C1C', borderRadius: 16 / 924 * height, padding: 18 / 924 * height }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 / 426 * width, justifyContent: 'space-between' }}>
                <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500' }}>Focus</Text>
                <Image source={require('../../assets/focusImage.png')} style={{ height: 24 / 924 * height, width: 24 / 924 * height }} />

              </View>
              <Text style={{ color: '#fff', fontSize: 15, fontWeight: '500', marginTop: 15 / 924 * height, }}>{event ? event[0].title : ''}</Text>

            </View>
          ) : (<View style={{
            height: 174 / 924 * height, width: 191 / 429 * width, backgroundColor: '#1C1C1C', borderRadius: 16 / 924 * height,alignItems:'center',justifyContent:'center'
          }}>
             <Text style={{ color: '#fff', fontSize: 14, fontWeight: '500' }}>No Event</Text>
          </View>
          )
        ) :

        (
          <View style={{ padding: 16, borderWidth: 1, borderColor: "#1c1c1c", borderRadius: 16 }}>
            <View style={{ flexDirection: "row", gap: 8, width: 159 / 429 * width, alignItems: 'center' }}>
              <Image style={{ height: 20 / 924 * height, width: 20 / 924 * height, resizeMode: 'contain' }}
                source={require('../../assets/DummyCircle.png')}
              />
              <Text style={{ fontSize: 20, fontWeight: '400', color: "#F8EDDA50" }}>Calender</Text>
            </View>
            <Text style={{ fontSize: 13, fontWeight: '400', color: "#F8EDDA50", marginTop: 8 / 924 * height, width: 159 / 429 * width }}>Get a reminder to refocus before a meeting or event.</Text>

            <TouchableOpacity style={{ marginTop: 30 / 924 * height }}>
              <View style={{ flexDirection: "row", gap: 8, width: 159 / 429 * width, alignItems: 'center' }}>
                <Image style={{ height: 20 / 924 * height, width: 20 / 924 * height, resizeMode: 'contain' }}
                  source={require('../../assets/calenderRed.png')}
                />
                <Text style={{ fontSize: 17, fontWeight: '800', color: "#D44740", }}>Connect</Text>
              </View>
            </TouchableOpacity>

          </View>
        )
      }







      {/* </TouchableOpacity> */}
      {/* <Button onPress={handleAuth} title='Auth Calendar' />
      <Button onPress={listenEvents} title='List Events' /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});