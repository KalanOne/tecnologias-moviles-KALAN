import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import Welcome from "./src/screens/unlogged/Welcome";
import Login from "./src/screens/unlogged/Login";
import Register from "./src/screens/unlogged/Register";
import LoggedScreens from "./src/screens/logged/LoggedScreens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthContextProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="LoggedScreens" component={LoggedScreens} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" animated={true} />
      </View>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: Dimensions.get("screen").width,
    // height: Dimensions.get("screen").height,
    flex: 1,
    backgroundColor: "#fbfcfe",
  },
});
