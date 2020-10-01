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
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();
const Profile: () => React$Node = ({ navigation } , {Props}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>

      <Text>
        <Icon name="rocket" size={30} color="#900" />
      </Text>

      <Button
        title="Go to profile"
        onPress={() => navigation.jumpTo('Profile', { owner: 'Michaś' })}
      />
    </View>
  );
};
export default Profile;