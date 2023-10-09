import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import Profile from "./Profile";
import { UseAuth } from "../../hooks/UseAuth";
import { useNavigation } from "@react-navigation/native";
import Index from "./Index";
import LogOut from "./LogOut";
import { useEffect } from "react";
import Header from "../../components/Header";
import { StyleSheet, View } from "react-native";

const Drawer = createDrawerNavigator();

const LoggedScreens = () => {
  const { isLogged } = UseAuth();
  const navigation = useNavigation();
  useEffect(() => {
    if (!isLogged()) {
      // Realizar la navegación o reset aquí
      navigation.reset({
        index: 0,
        routes: [{ name: "Welcome" }],
      });
    }
  }, []);
  return (
    <Drawer.Navigator
      initialRouteName="Index"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Index" component={Index} />
      <Drawer.Screen name="LogOut" component={LogOut} />
    </Drawer.Navigator>
  );
};

export default LoggedScreens;
