import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Details from "./src/screens/Details";
import { AuthProvider } from "./src/context/AuthContext";
import useAuth from "./src/hooks/useAuthContext";

const Stack = createStackNavigator();

const layout = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    );
  } else {
    return (
      <>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={Details} />
      </>
    );
  }
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 20,
  },
});
