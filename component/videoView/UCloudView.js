/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, requireNativeComponent, StyleSheet } from 'react-native';

const RNMyVideoView = requireNativeComponent('RNMyVideoView');

class UCloudView extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
 
  videoView() {
    return (
      <View>
          <RNMyVideoView style={styles.localVideoStyle} />
      </View>
    );
  }
  render() {
    return this.videoView();
  }
}
const styles = StyleSheet.create({
    localVideoStyle: {
      width: '98%',
      height: 200,
      position: 'absolute',
      top: 270,
      right: '1%',
      zIndex: 100,
    },
  });
export default UCloudView;
