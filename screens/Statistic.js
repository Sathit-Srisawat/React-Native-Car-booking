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
  Dimensions,
  navigation,
  FlatList
} from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import TimeTable from "./TimeTable";
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();
export default class Statistic extends React.Component {

  state = {
    data: []
  }

  fetchData = async () => {
    const response = await fetch('http://localhost:3008/History'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const testTable = await response.json();
    this.setState({ data: testTable });
  }

  componentDidMount = () => {
    this.fetchData();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.card}>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 25, marginTop: 10, marginLeft: 20, color: 'white', fontWeight: "bold" }}>
              How often to use the car
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <ScrollView horizontal={true} >
              <View style={styles.cards}>
                <PieChart
                  data={datas}
                  width={350}
                  height={250}
                  chartConfig={chartConfig}
                  accessor="population"
                  backgroundColor="transparent"
                  paddingLeft="15"
                  absolute
                />
              </View>

              <View style={styles.cards}>
                <BarChart
                  style={{ borderRadius: 15 }}
                  data={data}
                  width={350}
                  height={250}
                  chartConfig={chartConfig}
                />
              </View>
            </ScrollView>
          </View>

          <View style={styles.cardd}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#145374', marginLeft: 20, marginTop: 20 }}>
              History
            </Text>

            <ScrollView>
              <View style={{ margin: 40 }}>
                <FlatList
                  data={this.state.data}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) =>
                    <View>
                      <Text style={{ color: '#000000', fontSize: 15 }}>{item.Htime}                                    {item.Hdate}</Text>
                    </View>
                  }
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
};
const datas = [
  {
    name: "NST",
    population: 990,
    color: "#056676",
    legendFontColor: "#056676",
    legendFontSize: 15
  },
  {

    name: "PKT",
    population: 200,
    color: "#d49a89",
    legendFontColor: "#d49a89",
    legendFontSize: 15
  },
  {
    name: "SKA",
    population: 800,
    color: "#f7d1ba",
    legendFontColor: "#f7d1ba",
    legendFontSize: 15
  },
  {
    name: "PTN",
    population: 450,
    color: "#e8ded2",
    legendFontColor: "#e8ded2",
    legendFontSize: 15
  },
  {
    name: "TRG",
    population: 430,
    color: "#a3d2ca",
    legendFontColor: "#a3d2ca",
    legendFontSize: 15
  },
  {
    name: "SNI",
    population: 280,
    color: "#5eaaa8",
    legendFontColor: "#5eaaa8",
    legendFontSize: 15
  },
];

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [200, 450, 280, 800, 990, 430]
    }
  ]
};

const chartConfig = {

  backgroundGradientFrom: "#FFF",
  backgroundGradientFromOpacity: 5,
  backgroundGradientTo: "#FFF",
  backgroundGradientToOpacity: 5,
  color: (opacity = 15) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
const styles = StyleSheet.create({
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
    height: 250,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: "white",
    borderRadius: 15,
  },

  cardd: {
    width: 350,
    height: 380,
    marginTop: 20,
    marginLeft: 20,
    backgroundColor: "white",
    borderRadius: 15,
  },

  cardss: {
    width: 350,
    height: 60,
    marginTop: 50,
    marginLeft: 20,
    backgroundColor: "white",
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