import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity, TextInput, FlatList, YellowBox, Alert } from 'react-native';

YellowBox.ignoreWarnings([
	'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

export default class TimeTable extends React.Component {

  state = {
    data: []
  }

  fetchData = async () => {
    const response = await fetch('http://localhost:3002/table_queue'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const testTable = await response.json();
    this.setState({ data: testTable });
  }
  componentDidMount() {
    this.fetchData();
  }
  
  insertQueue = () => {
    fetch('http://172.18.132.253/FinalProject/insert.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        times: this.state.time,
        dates: this.state.date,
      }),
    })
      .then((response) => response.text())
      .then((responseJson) => {
        Alert.alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.card}>
          <View style={styles.cards}>
            <View style={{ marginTop: 20 }}>
              <Text style={{ textAlign: "center", fontSize: 20 }}>
                Queue Table Today
              </Text>
            </View>
              <View style = {{marginTop : 10}}>
                <Text>
                  {'\t'}{'\t'}Time {'\t\t\t\t\t\t'} Queue
                </Text>
              </View>
            <ScrollView style={{ marginTop: 20 ,marginBottom :20}}>
              <View style={{ marginLeft: 20 }}>                
                <FlatList
                  data={this.state.data}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) =>

                    <View style={{ marginTop: 15 }}>
                      <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                        <Text style={{ color: '#000000' }}>{'\t'}{item.time} {'\t\t\t\t\t\t\t'}{item.van_stack}</Text>
                      </Text>
                    </View>
                  }
                />

              </View>
            </ScrollView>
          </View>
          <View style={styles.cardss}>

            <View>
              <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 20 }}>
                Booking Queue
              </Text>
            </View>

            <View style={{ marginTop: 30, marginLeft: 10, marginRight: 10 }}>
              
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 15}}
                placeholder = '     Select Date'
                onChangeText={(date) => this.setState({date})}
              />

              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 15 , marginTop :
              10}}
                placeholder = '     Select Time'
                onChangeText={(time) => this.setState({time})}
              />
            
            </View>
            <View style={{ marginTop: 15, backgroundColor: "#f6f5f5", marginLeft: 50, marginRight: 50, borderRadius: 15, shadowColor: "#000", shadowOffset: { width: 0, height: 7, }, shadowOpacity: 0.41, shadowRadius: 9.11, }}>
              <Button
                title='Booking'
                onPress={this.insertQueue}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cardss: {
    width: 350,
    height: 200,
    marginTop: 30,
    marginLeft: 20,
    backgroundColor: "#f6f5f5",
    borderRadius: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },

  card: {
    flex: 1,
    width: 390,
    height: 300,
    backgroundColor: '#145374',
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 15,
  },
  cards: {
    width: 350,
    height: 500,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: "#f6f5f5",
    borderRadius: 15,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    elevation: 14,
  },
});