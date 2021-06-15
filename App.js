import React from 'react';
import { StyleSheet, View } from  'react-native';
import { Container } from 'native-base';
import Constants from 'expo-constants';
import ToolBar from './Component/ToolBar';
import Profile from './Component/Profile';
import DisplayAnImage from './Component/profileImage'

export default function App() {
  return (
    <View style={styles.container}>
        <Container>
            <Profile/>
            {/* <DisplayAnImage/> */}
            <ToolBar/>
        </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        marginTop : Constants.statusBarHeight
    },
});
