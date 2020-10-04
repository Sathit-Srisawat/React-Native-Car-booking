import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, Button, TextInput, FlatList, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Swiper from 'react-native-swiper'
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();
export default class Profile extends React.Component {

  state = {
    data: []
  }

  fetchData = async () => {
    const response = await fetch('http://localhost:3001/comment'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const testTable = await response.json();
    this.setState({ data: testTable });
  }
  componentDidMount = () => {
    this.fetchData();
  }

  insertComment = () => {
    fetch('http://172.18.132.253/FinalProject/insertComment.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comments: this.state.comment,
        names: this.state.name
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

      <View style={{ flex: 1, backgroundColor: '#ecf0f1' }}>
        <View style={styles.card}>
          <View style={styles.smCard}>
            <Text style={styles.text}><Icon name="location-arrow" size={20} color="#900" />   Walailak University</Text>
          </View>

          <View style={styles.containers}>
            <View style={styles.cards}>
              <MapView
                style={{ width: 350, height: 300, borderRadius: 15, }}
                initialRegion={{
                  latitude: 8.645297,
                  longitude: 99.897332,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}>
                <Marker
                  coordinate={{
                    latitude: 8.646348,
                    longitude: 99.893658,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}>
                  <View
                    style={{
                      backgroundColor: 'purple',
                      padding: 5,
                      borderRadius: 40,
                    }}>
                    <View
                      style={{
                        backgroundColor: '#C49DBD',
                        padding: 5,
                        borderRadius: 20,

                        shadowColor: '#714B87',
                        shadowOffset: {
                          width: 2,
                          height: 2,
                        },
                        shadowOpacity: 1,
                        shadowRadius: 20,
                      }}>

                    </View>
                  </View>
                </Marker>
              </MapView>
            </View>
          </View>

          <ScrollView horizontal={true} >

            <View style={styles.cardss}>
              <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                  <View style={{ margin: 10 }}>
                    {item.no == 1 ? <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text> : null}
                    {item.no == 1 ? <Text style={{ fontSize: 15, color: '#000000', marginTop: 10 }}>{'\t'}{item.title}</Text> : null}

                  </View>
                }
              />
            </View>

            <View style={styles.cardss}>
              <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                  <View style={{ margin: 10 }}>
                    {item.no == 2 ? <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text> : null}
                    {item.no == 2 ? <Text style={{ fontSize: 15, color: '#000000', marginTop: 10 }}>{'\t'}{item.title}</Text> : null}

                  </View>
                }
              />
            </View>

            <View style={styles.cardss}>
              <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                  <View style={{ margin: 10 }}>
                    {item.no == 3 ? <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text> : null}
                    {item.no == 3 ? <Text style={{ fontSize: 15, color: '#000000', marginTop: 10 }}>{'\t'}{item.title}</Text> : null}
                  </View>
                }
              />
            </View>

            <View style={styles.cardss}>
              <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                  <View style={{ margin: 10 }}>
                    {item.no == 4 ? <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text> : null}
                    {item.no == 4 ? <Text style={{ fontSize: 15, color: '#000000', marginTop: 10 }}>{'\t'}{item.title}</Text> : null}
                  </View>
                }
              />
            </View>

            <View style={styles.cardss} >
              <View style={{ alignItems: 'center', marginTop: 10 }}>
                <Text>
                  COMMENT
                </Text>

              </View>
              <TextInput
                style={{ marginTop: 10, marginLeft: 25, marginRight: 10, width: 200, height: 30, borderColor: 'gray', borderWidth: 1, borderRadius: 15 }}
                placeholder=' Add your comment'
                onChangeText={(comment) => this.setState({ comment })}
              />
              <TextInput
                style={{ marginTop: 10, marginLeft: 25, marginRight: 10, width: 200, height: 30, borderColor: 'gray', borderWidth: 1, borderRadius: 15 }}
                placeholder=' Add your name'
                onChangeText={(name) => this.setState({ name })}
              />

              <View style={{ marginTop: 5, backgroundColor: "#f6f5f5", marginLeft: 50, marginRight: 50, borderRadius: 15 }}>
                <Button
                  title='submit'
                  onPress={this.insertComment}
                />
              </View>
            </View>
          </ScrollView>

          <View style={styles.cardd}>
            <Swiper
              style={styles.wrapper}
              loop={true}
              autoplay={true}
              style={{ borderRadius: 15 }} >
              <View style={styles.slide}>
                <Image source={require('../img/1.jpg')} style={styles.images} />
              </View>

              <View style={styles.slide}>
                <Image source={require('../img/2.jpg')} style={styles.images} />
              </View>

              <View style={styles.slide}>
                <Image source={require('../img/3.jpg')} style={styles.images} />
              </View>

              <View style={styles.slide}>
                <Image source={require('../img/4.jpg')} style={styles.images} />
              </View>

            </Swiper>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({

  images: {
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"

  },

  containers: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'flex-start',
    padding: 20,
    alignItems: 'center'
  },

  cards: {
    width: 350,
    height: 300,
    marginRight: 40,
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 10,
    shadowColor: "#fbecec",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,

  },

  cardss: {
    marginTop: 20,
    width: 250,
    height: 150,
    marginLeft: 20,
    backgroundColor: "#fbecec",
    borderRadius: 15,
    elevation: 10,
    shadowColor: "#fbecec",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,

  },

  slide: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  cardd: {
    marginBottom: 20,
    width: 350,
    height: 160,
    marginLeft: 20,
    shadowColor: "#fbecec",
    borderRadius: 15,

  },

  card: {
    flex: 1,
    width: 390,
    height: 300,
    backgroundColor: "#ebd4d4",
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 15,
  },
  text: {
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 10,
    fontSize: 15,
    color: "purple",
    fontWeight: "bold",
  },
  smCard: {
    flexDirection: 'row',
    width: 370,
    height: 40,
    backgroundColor: '#fbecec',
    borderRadius: 15,
    marginTop: 15,
    marginLeft: 10
  }
});