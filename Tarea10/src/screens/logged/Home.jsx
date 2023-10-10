import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import Burger from "../../../assets/Burger.png";
import Pizza from "../../../assets/Pizza.png";
import Taco from "../../../assets/Taco.png";
import Soda from "../../../assets/Soda.png";

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
    name: "Soda",
  },
];

const Food = [
  {
    id: 1,
    name: "Burguer",
    image: Burger,
    cost: 55.3,
    width: 510,
    height: 510,
  },
  {
    id: 2,
    name: "Pizza",
    image: Pizza,
    cost: 55.3,
    width: 98,
    height: 100,
  },
  {
    id: 3,
    name: "Tacos",
    image: Taco,
    cost: 55.3,
    width: 1560,
    height: 1063,
  },
  {
    id: 4,
    name: "soda",
    image: Soda,
    cost: 55.3,
    width: 300,
    height: 407,
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
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollViewHistoryContainer}
        >
          {HistorySearch.map((item, index) => (
            <View
              key={item.id}
              style={[
                styles.historyContainer,
                index == 0 ? styles.historyContainerActive : null,
              ]}
            >
              <Text style={styles.historyText}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{ overflow: "visible" }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollViewFoodContainer}
        >
          {Food.map((item) => (
            <View key={item.id} style={styles.foodContainer}>
              <View style={styles.halfContainer}>
                <Image
                  source={item.image}
                  style={[
                    styles.foodImage,
                    { aspectRatio: item.width / item.height },
                  ]}
                />
              </View>
              <View style={styles.halfContainer}>
                <Text style={styles.foodName}>{item.name}</Text>
                <View style={styles.foodCost}>
                  <Text style={styles.foodCostText}>{item.cost}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfcfe",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f6f6",
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
  },
  scrollViewHistoryContainer: {
    marginTop: 20,
  },
  historyContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    height: 40,
    borderWidth: 1,
    borderColor: "#21b2b2",
  },
  historyContainerActive: {
    backgroundColor: "#21b2b2",
    borderWidth: 0,
  },
  historyText: {
    color: "#000",
  },
  scrollViewFoodContainer: {
    marginTop: 20,
    marginLeft: 20,
    overflow: "visible",
    // paddingTop: 200,
  },
  foodContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginRight: 10,
    width: 200,
    height: 300,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#21b2b2",
    overflow: "visible",
    position: "relative",
  },
  halfContainer: {
    width: "100%",
    height: "50%",
    alignItems: "center",
    overflow: "visible",
  },
  foodImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    // transform: [{ translateY: -100 }],
  },
  foodName: {
    fontWeight: "bold",
    marginTop: 10,
    color: "#000",
    fontWeight: "bold",
    fontSize: 25,
  },
  foodCost: {
    // backgroundColor: "#21b2b2",
    // borderRadius: 10,
    // marginTop: 10,
    // paddingVertical: 5,
    // paddingHorizontal: 10,
  },
  foodCostText: {
    color: "#21b2b2",
    marginTop: 20,
    fontSize: 30,
    fontWeight: "900",
  },
});
