/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var Geolocation = require('Geolocation');

export default class geolocation extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.item} onPress={this.getLocation.bind(this)}>获取位置</Text>
      </View>
    );
  }
  //获取位置
  getLocation() {
    Geolocation.getCurrentPosition(
        location => {
            var result = "\n经度：" + location.coords.longitude +
                          "\n纬度：" + location.coords.latitude 
            alert(result);
        },
        error => {
          alert("获取位置失败："+ error)
        }
    );
 }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop:25
  },
  item:{
    margin:15,
    height:30,
    borderWidth:1,
    padding:6,
    borderColor:'#ddd',
    textAlign:'center'
  },
});

AppRegistry.registerComponent('geolocation', () => geolocation);
