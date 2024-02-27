import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientText = ({ text, colors }) => {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={{ borderRadius: 15 }}
    >
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', padding: 10 }}>
        {text}
      </Text>
    </LinearGradient>
  );
};

export default function TestScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GradientText text="Hello, Gradient Text!" colors={['red', 'blue','white']} />
    </View>
  );
}
