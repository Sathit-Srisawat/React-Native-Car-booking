import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity, TextInput, FlatList } from 'react-native';

export default class DataFormDB extends React.Component {

    state = {
        data: []
    }

    fetchData = async () => {
        const response = await fetch('http://localhost:3001/table_queue'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
        const testTable = await response.json();
        this.setState({ data: testTable });
    }
    componentWillMount() {
        this.fetchData();
    }

    render() {
        return (
            /*<View style ={{marginTop :30}}> 
                <View><Text>test</Text></View>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>

                        <View>
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                                <Text style={{ color: '#000000' }}> Time: {item.time} </Text>
                            {'\t'}Queue: {item.van_stack} </Text>
                        </View>
                    }
                />
            </View>*/
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.card}>
                    <View style={styles.cards}>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ textAlign: "center", fontSize: 20 }}>
                                Queue Table Today
                            </Text>
                        </View>
                        <ScrollView style={{ marginTop: 20 }}>
                            <View style={{ marginLeft: 20 }}>
                                <FlatList
                                    data={this.state.data}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) =>

                                        <View>
                                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                                                <Text style={{ color: '#000000' }}> Time: {item.time} </Text>
                                                {'\t'}Queue: {item.van_stack} </Text>
                                        </View>
                                    }
                                />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.cardss}>
                        <View>
                            <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 20 }}>
                                Table Time
                         </Text>
                        </View>
                        <View style={{ marginTop: 30, marginLeft: 10, marginRight: 10 }}>
                            <TextInput
                                style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 15 }}
                                title='test'
                            />
                        </View>
                        <View style={{ marginTop: 30, backgroundColor: "#f6f5f5", marginLeft: 50, marginRight: 50, borderRadius: 15, shadowColor: "#000", shadowOffset: { width: 0, height: 7, }, shadowOpacity: 0.41, shadowRadius: 9.11, }}>
                            <Button
                                title='select time'
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