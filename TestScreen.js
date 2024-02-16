import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
// import Snackbar from 'react-native-snackbar-component';
import * as ImagePicker from 'expo-image-picker';

export default function TestScreen() {
  const [isVisible, setIsVisible] = React.useState(false);
  const { height, width } = Dimensions.get('window')

  const [selectedImage,setSelectedImage] = useState(null)
  const [selectedImageNamwe,setSelectedImageName] = useState(null)


  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1, // Define quality here
      });

      if (!result.canceled) {
        console.log("result ",result.assets[0].uri);
        setSelectedImage(result.assets[0].uri);
      } else {
        alert("You did not select any image.");
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };
  return (

    <View style={{ height: height, backgroundColor: '#0f0f0f',paddingTop:50 }}>
      <TouchableOpacity onPress={pickImage}>
        <Text style = {{color:'red'}}>add Image</Text>
      </TouchableOpacity>

      <Image source={{uri: selectedImage?selectedImage:''} }
        style = {{height:100,width:100}}
      />
      {console.log('image is' ,selectedImage)}
    </View>


















    // <View style={styles.container}>
    //   <Button
    //     onPress={() => setIsVisible(!isVisible)}
    //     title="Toggle snackbar"
    //     accessibilityLabel="toggle"
    //   />
    //   <Snackbar
    //     visible={isVisible}
    //     textMessage="Hello There!"
    //     // actionHandler={() => alert('its snack time!')}
    //     // actionText="let's go again"
    //     position='top'
    //     autoHidingTime={1000}
    //     top={20}
    //     containerStyle={{backgroundColor:'red'}}
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});