import Toggle from 'react-native-toggle-input'
import React,{useState} from 'react';
const TestScreen = () => {

  const [toggle, setToggle] = useState(false);
  

  return(
    <Toggle 
        color={"#4C956C"}
        size={30}
        filled={true}
        circleColor={"white"}
        toggle={toggle}
        setToggle={setToggle}
    />
  )

};

export default TestScreen;







// import React, { useState, useEffect } from 'react';
// import { Button, Image, View,Text } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// export default function ProfileImagePicker() {
//   const [image, setImage] = useState('');

//   useEffect(() => {
//     (async () => {
//       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (status !== 'granted') {
//         alert('Sorry, we need camera roll permissions to make this work!');
//       }
//     })();
//   }, []);

//   const pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     console.log(result); // Log the result to check if URI is correct

//     if (!result.canceled) {
//       setImage(result.assets.uri);
//       console.log("image uri",result.assets)
//     }
//   };

//   console.log(image); // Log the image URI to check if it's being set correctly

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button title="Pick an image from gallery" onPress={pickImage} />
//       {image? image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} /> :<Text>image undefine</Text>}
//     </View>
//   );
// }
