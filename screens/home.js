import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import ProfileBar from '../components/profileBar';
import TasksContainer from '../components/tasksContainer';

export default function Home() {
  return (
    <View className="items-center justify-center">
      <ProfileBar></ProfileBar>
      <TasksContainer></TasksContainer>
    </View>
  )
}
