import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import { Snackbar } from 'react-native-paper';

const TestScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);

  const handleLogin = () => {
    if (username === 'correct_username' && password === 'correct_password') {
      // Login successful
      setVisible(false);
      // Navigate to the next screen or perform other actions
    } else {
      // Login failed, show Snackbar
      setVisible(true);
    }
  };

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={3000}
        action={{
          label: 'Dismiss',
          onPress: () => setVisible(false)
        }}
      >
        Incorrect username or password
      </Snackbar>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

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
