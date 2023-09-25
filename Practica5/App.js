import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar as ReactStatus,
} from "react-native";
// import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createStackNavigator();
// const { Navigator, Screen } = Stack;
// const BottomStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
        <StatusBar
          style="auto"
          animated={true}
          backgroundColor="#e0aeff"
          // hidden={true}
        />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#aa76ff",
    // alignItems: "center",
    // justifyContent: "center",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    // paddingTop: ReactStatus.currentHeight,
  },
});
