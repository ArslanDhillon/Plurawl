import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import VibeView1 from './vibeviews/VibeView1';
import VibeView2 from './vibeviews/VibeView2';
import VibeView3 from './vibeviews/VibeView3';
import VibeView4 from './vibeviews/VibeView4';
import VibeView5 from './vibeviews/VibeView5';

const { height, width } = Dimensions.get("window")

const HEPF = require("../../assets/All_Images/HEPFullscreen_3x.png")



export default function LastWeekVibes() {
  return (
    <View style={styles.container} >
       
      <ScrollView pagingEnabled showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      // nestedScrollEnabled
      >
        <View style = {{flexDirection:'column'}}>

       

          <View style={[styles.page, { backgroundColor: 'transparent' }]}>
            <VibeView1 />
          </View>

          <View style={[styles.page, { backgroundColor: 'transparent' }]}>
            <VibeView2 />
          </View>

          <View style={[styles.page, { backgroundColor: 'transparent' }]}>
            <VibeView3 />
          </View>

          <View style={[styles.page, { backgroundColor: 'transparent' }]}>
            <VibeView4 />
          </View>

          <View style={[styles.page, { backgroundColor: 'transparent' }]}>
            <VibeView5 />
          </View>
        </View>
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    // justifyContent: "flex-end",



  },
  scrollViewContent: {
    flexGrow: 1,
    // justifyContent: 'center'
  },
});