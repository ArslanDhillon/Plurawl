import React from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';
import Snackbar from 'react-native-snackbar-component';

export default function TestScreen() {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <Button
        onPress={() => setIsVisible(!isVisible)}
        title="Toggle snackbar"
        accessibilityLabel="toggle"
      />
      <Snackbar
        visible={isVisible}
        textMessage="Hello There!"
        // actionHandler={() => alert('its snack time!')}
        // actionText="let's go again"
        position='top'
        autoHidingTime={1000}
        top={20}
        containerStyle={{backgroundColor:'red'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});