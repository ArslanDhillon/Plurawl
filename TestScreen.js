import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Keyboard, KeyboardAvoidingView, TouchableOpacity, Text, StyleSheet, Platform, Dimensions, ScrollView } from 'react-native';

const TestScreen = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [buttonPosition, setButtonPosition] = useState(Dimensions.get('window').height - 100); // Initially set to bottom
  const [inputValue, setInputValue] = useState('');
  const scrollViewRef = useRef(null);
  const screenHeight = Dimensions.get('window').height;

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleKeyboardDidShow = (event) => {
    const keyboardHeight = event.endCoordinates.height;
    setKeyboardHeight(keyboardHeight);
    setIsKeyboardVisible(true);
    setButtonPosition(screenHeight - keyboardHeight - 100); // Adjust button position based on keyboard height
    scrollViewRef.current.scrollTo({ y: 0, animated: true }); // Scroll the ScrollView to the top
  };

  const handleKeyboardDidHide = () => {
    setIsKeyboardVisible(false);
    setButtonPosition(screenHeight - 100); // Set button to bottom when keyboard hides
  };

  const onPressButton = () => {
    // Your button action
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView
        ref={scrollViewRef}
        style={{ width: '100%', maxHeight: screenHeight - (isKeyboardVisible ? keyboardHeight + 100 : 0) }}
      >
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
          maxLength={1000} // Allow up to 1000 characters
          multiline={true} // Enable multiline input
          autoFocus={true} // Set to false to prevent auto focus on input
          onFocus={() => scrollViewRef.current.scrollTo({ y: 0, animated: true })} // Scroll to top when input is focused
        />
      </ScrollView>
      <View style={[styles.buttonContainer, { bottom: isKeyboardVisible ? buttonPosition : 50 }]}>
        <TouchableOpacity style={styles.button} onPress={onPressButton}>
          <Text style={styles.buttonText}>Floating Button</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlignVertical: 'top', // Align text to the top
  },
  buttonContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default TestScreen;
