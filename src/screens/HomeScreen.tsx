import {
  View,
  Text,
  useColorScheme,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>Hello from Mini App Template!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
