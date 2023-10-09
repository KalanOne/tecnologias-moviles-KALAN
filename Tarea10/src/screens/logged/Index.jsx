import React from "react";
import { Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./Home";
import Profile from "./Profile";
import Header from "../../components/Header";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

const Index = () => {
  return (
    <>
      <Header />
      <Tab.Navigator
        initialRouteName="Home"
        shifting={true}
        activeColor={"#21b2b2"}
        inactiveColor={"#999"}
        // tabBarOptions={{
        //   activeTintColor: "blue", // Color del ícono y etiqueta cuando está activo
        //   inactiveTintColor: "gray", // Color del ícono y etiqueta cuando está inactivo
        //   style: {
        //     backgroundColor: "red", // Color de fondo de las pestañas
        //   },
        // }}
        barStyle={{ backgroundColor: "#fbfcfe" }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Ionicons name="cart" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <Ionicons name="person" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Index;
