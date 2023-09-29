import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { HeaderNavigationStack } from "./src/components/HeaderNavigationStack";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Screen1 } from "./src/screens/Screen1";
import { Screen2 } from "./src/screens/Screen2";

const Stack = createStackNavigator();
export default function App() {
  return (
    // <View style={styles.container}>
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={"Screen1"}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
