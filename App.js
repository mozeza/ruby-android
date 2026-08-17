import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import ChatScreen from './src/screens/ChatScreen';
import { Colors } from './src/theme/theme';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.dark} />
      <ChatScreen />
    </SafeAreaView>
  );
};

export default App;
