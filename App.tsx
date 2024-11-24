/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { NativeModules, View } from 'react-native';
const { PythonModule } = NativeModules;


function App() {
  PythonModule.add(5, 3).then((result: any) => {
    console.log('Result from Python: ', result);
  });
  return (
    <>
    <View>Hello</View>
    </>
  );
}



export default App;
