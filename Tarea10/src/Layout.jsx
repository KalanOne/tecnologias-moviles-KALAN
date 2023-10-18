import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import Welcome from "./screens/unlogged/Welcome";
import Login from "./screens/unlogged/Login";
import Register from "./screens/unlogged/Register";
import LoggedScreens from "./screens/logged/LoggedScreens";
import { UseAuth } from "./hooks/UseAuth";
import { Text, View } from "react-native";
import Loader from "./screens/unlogged/Loader";

const Stack = createStackNavigator();

const Layout = () => {
  const [loading, setLoading] = useState(false);
  const { user, handleLogin, handleRegister, handleLogout, isLogged } =
    UseAuth();

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    setLoading(true);
    delay(2000).then(() => {
      setLoading(false);
    });
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <Text>{JSON.stringify(isLogged())}</Text> */}
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName={isLogged() ? "LoggedScreens" : "Welcome"}
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
        </>
      )}
    </>
  );
};

export default Layout;
