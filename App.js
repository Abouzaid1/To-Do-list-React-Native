import { StatusBar } from 'expo-status-bar';
import React from 'react';
import image from './assets/favicon.png'
import { Text, Button, View, TextInput, Image ,ScrollView} from 'react-native';
import Home from './screens/home';
import { store } from './app/store'
import { Provider } from 'react-redux'
export default function App() {
  return (
    <Provider store={store}>

      <View className="h-[100%] bg-white">
        <StatusBar />
        <Home></Home>
      </View>

    </Provider>
    )
}
