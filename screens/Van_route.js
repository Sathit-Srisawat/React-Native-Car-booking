import React, {Component} from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class IWeb extends Component {
  render() {
    return (
        <WebView style={{marginTop : 34}} source={{ uri: 'http://www.route.in.th/listmainvan.php' }} />
    );
  }
}