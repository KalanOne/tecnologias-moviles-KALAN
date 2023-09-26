import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import CharacScreen from "./src/screens/CharacScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import CharacterDetail from "./src/screens/CharacterDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="CharactersList">
          <Stack.Screen
            name="CharactersList"
            component={CharacScreen}
            options={{
              title: "Lista de Personajes",
              headerStyle: {
                backgroundColor: "#272b33",
                height: 0,
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="CharacterDetail"
            component={CharacterDetail}
            options={{
              title: "Character Detail",
              headerStyle: {
                backgroundColor: "#272b33",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </SafeAreaView>
      <StatusBar
        style="light"
        backgroundColor="#272b33"
        animated={true}
        hidden={true}
      />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
