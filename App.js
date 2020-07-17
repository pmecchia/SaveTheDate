import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RecipeDetail from './Components/RecipeDetail'

export default function App() {
  return (
    <View style={styles.container}>
      <RecipeDetail/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
