import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import Screen3 from "./src/screens/Screen3";
import { ThemeContextProvider } from "./src/context/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ThemeContextProvider>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Screen1} />
          <Stack.Screen name="Transactions" component={Screen2} />
          <Stack.Screen name="Transfer" component={Screen3} />
        </Stack.Navigator>
        {/* <StatusBar style="light" /> */}
        {/* <View style={styles.container}>
        <Screen1 />
      </View> */}
      </ThemeContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
