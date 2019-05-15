/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Route from './src/router/route'
import {Provider} from 'mobx-react';
import store from './src/mobx/index'
type Props = {};

console.disableYellowBox=true
export default class App extends Component<Props> {
  render() {
    return (
      <Provider {...store}>
      <Route />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  
});
