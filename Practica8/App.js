import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  StatusBar as ReactStatusBar,
} from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import { useState } from "react";

const Stack = createStackNavigator();
const BottomTabNavigator = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={
              {
                // headerMode: "screen",
                // headerTintColor: "white",
                // headerStyle: {
                //   backgroundColor: "red",
                // },
                // title: "Home2",
                // headerRight: () => <Text>Right</Text>,
              }
            }
          />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        <StatusBar style="auto" />
        {/* <Main /> */}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: ReactStatusBar.currentHeight,
  },
});
