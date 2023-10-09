import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const HistorySearch = [
  {
    id: 1,
    name: "Burguer",
  },
  {
    id: 2,
    name: "Pizza",
  },
  {
    id: 3,
    name: "Tacos",
  },
  {
    id: 4,
    name: "soda",
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Store for fast food & etc.</Text>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="#21b2b2" />
        <TextInput
          placeholder="Burguer"
          placeholderTextColor={"#d1d1d1"}
          style={styles.searchInput}
        />
        <Ionicons name="filter" size={24} color="#21b2b2" />
      </View>
      <ScrollView></ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfcfe",
  },
});
