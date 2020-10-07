import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,

} from 'react-native';
//import Constants from 'react-native-constants';

import CountDown from 'react-native-countdown-component';

export default class test5 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { timer: 30 };
  }

  startTimer = () => {
    this.clockCall = setInterval(() => {
      this.decrementClock();
    }, 1000);
  }

  decrementClock = () => {
    if (this.state.timer === 0) clearInterval(this.clockCall)
    this.setState((prevstate) => ({ timer: prevstate.timer - 1 }));
  };

  componentWillUnmount() {
    clearInterval(this.clockCall);
  }

  render() {
    return (
      <View style={{ marginTop: 50 }}>
        <button Onpress={this.startTimer}> Play </button>

        <Text style={{ fontSize: 18, color: '#000' }}>
          {this.state.timer === 0 ? 'Times Up!' : { this.state.timer }}
        </Text> 
      </View>
    )
  }
};


