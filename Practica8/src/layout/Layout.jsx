import React from "react";
import Details from "../screens/Details";
import Login from "../screens/Login";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import useAuthContext from "../hooks/useAuthContext";
import Home from "../screens/Home";
const Stack = createStackNavigator();

const Layout = () => {
  const { user } = useAuthContext();

  //   if (!user) {
  //     return (
  //       <Stack.Screen
  //         name="Login"
  //         component={Login}
  //         options={{ headerShown: false }}
  //       />
  //     );
  //   } else {
  //     return (
  //       <>
  //         <Stack.Screen
  //           name="Home"
  //           component={Home}
  //           options={{ headerShown: false }}
  //         />
  //         <Stack.Screen name="Details" component={Details} />
  //       </>
  //     );
  //   }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Login">
          {!user ? (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          ) : (
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Details" component={Details} />
            </>
          )}
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 20,
  },
});
