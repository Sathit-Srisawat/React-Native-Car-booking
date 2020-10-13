import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
  navigation
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import CreateAccout from "./CreateAccout";
import ForgotPassword from "./ForgotPassword";
import App from "../App";

Icon.loadFont();
export default class Login extends React.Component  {

  state = {
    data: [],
    email:'',
    password:'',
    semail: 'Satit.sr@mail.wu.ac.th',
    spassword: 'Sathit15190',
    answer : 1
  }
  
  render() {
    const { answer} = this.state
    return (

      <View style={{ flex: 1, backgroundColor: '#ecf0f1' }}>

        <View style={{ alignItems: 'center', marginTop: 80 }}>
          <Icon name="user-circle" size={80} color="#6A6867" />
        </View>

        <View>
          <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 30 }}>
            Welcome Back
          </Text>

          <Text style={{ textAlign: 'center' }}>
            Sign up to continue
          </Text>

        </View>

        <View style={{ marginTop: 90 }}>

          <View style={{ marginLeft: 30, flexDirection: "row" }}>
            <Icon name="envelope-open" size={25} color="#6A6867" />
            <TextInput
              style={{ marginLeft: 50 }}
              placeholder='E-mail'
              onChangeText={(Etext) => this.setState({ email: Etext })}
            />
          </View>
          <View style={{ marginTop: 50, marginLeft: 30, flexDirection: "row" }}>
            <Icon name="key" size={25} color="#6A6867" />
            <TextInput
              style={{ marginLeft: 50 }}
              placeholder='Password'
              onChangeText={(Ptext) => this.setState({ password: Ptext })}
            />
          </View>

          <View style={{ flexDirection: "row", marginTop: 40 }}>

            <TextInput
              style={styles.container}
              style={{ marginLeft: 50 }}
              onChangeText={text => onChangeText1(text)}
            />
          </View>
        </View>

        <View style={{ alignItems: 'flex-end', fontSize: 10, color: 'blue', marginTop: 30 }}>
          <Button
            onPress={() => this.props.navigation.navigate('ForgotPassword')}
            title='Forgot password?'
          />
        </View>

        <View style={styles.containers}>
          <View style={styles.cards}>

            <TouchableOpacity onPress={() => this.check(this.state.email, this.state.password ,this.state.semail, this.state.spassword )}>
              <Text style={{ paddingBottom: 25, textAlign: 'center' }}>Login</Text>
            </TouchableOpacity>

          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginLeft: 40, paddingVertical: 10 }}>
            Donâ€™t have account?
          </Text>

          <View>
            <Button style={{ fontSize: 2 }}
              onPress={() =>this.props.navigation.navigate('CreateAccout')}
              title='Create a new account'
            />
          </View>
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    height: 40,
    borderColor: 'gray',
    width: 200,
    marginLeft: 100,
    borderColor: 'gray'
  },

  containers: {
    paddingTop: 140,
    justifyContent: 'flex-start',
    padding: 20,

  },

  cards: {
    height: 50,
    width: 350,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 10,
    padding: 20,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.30,
    shadowRadius: 1.14,
    elevation: 4,

  },

});