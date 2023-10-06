import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "../components/Header";
import { usetheme } from "../hooks/useThemeContext";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Data = [
  {
    id: 1,
    name: "Esther Coleman",
    date: "May 7, 2021",
    ammount: "$340.00",
  },
  {
    id: 2,
    name: "Esther Coleman",
    date: "May 7, 2021",
    ammount: "$340.00",
  },
  {
    id: 3,
    name: "Esther Coleman",
    date: "May 7, 2021",
    ammount: "$340.00",
  },
  {
    id: 4,
    name: "Esther Coleman",
    date: "May 7, 2021",
    ammount: "$340.00",
  },
  {
    id: 5,
    name: "Esther Coleman",
    date: "May 7, 2021",
    ammount: "$340.00",
  },
];

const Screen2 = () => {
  const [theme, toggleTheme] = usetheme();
  return (
    <View
      style={[
        styles.container,
        theme == "light" ? { backgroundColor: "#E0E0E0" } : null,
      ]}
    >
      <StatusBar style={theme == "light" ? "dark" : "light"} />
      <Header />
      <View style={styles.titleContainer}>
        <Text
          style={[
            styles.titleMuted,
            theme == "light" ? { color: "#000" } : null,
          ]}
        >
          Total Balance
        </Text>
        <Text
          style={[styles.ammount, theme == "light" ? { color: "#000" } : null]}
        >
          $32,758.29
        </Text>
      </View>
      <Image
        source={{
          uri: "https://www.pngarts.com/files/18/Graph-PNG-Pic-HQ.png",
        }}
        width={Dimensions.get("screen").width}
        height={undefined}
        style={{ aspectRatio: 2487 / 1611, marginTop: 20 }}
      />
      <View style={styles.transactionsContainer}>
        <View style={styles.transactionsTitle}>
          <Text style={styles.transactionsTitleText}>Transactions</Text>
          <Text style={styles.transactionsSubtitleText}>See All</Text>
        </View>
        <FlatList
          data={Data}
          renderItem={({ item }) => (
            <View style={styles.transactiontItemContainer}>
              <Image
                source={{
                  uri: "https://static.wikia.nocookie.net/horrormovies/images/9/9c/Esther_coleman.jpg/revision/latest?cb=20200630180539",
                }}
                style={styles.image}
              />
              <View style={styles.transactiontTexts}>
                <Text style={styles.transactiontName}>{item.name}</Text>
                <Text style={styles.transactiontDate}>{item.date}</Text>
              </View>
              <Text style={styles.transactiontAmmount}>{item.ammount}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          style={{ flex: 1 }}
        />
      </View>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    backgroundColor: "#0d0d0d",
  },
  titleContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    // textAlign: "center",
    width: "100%",
  },
  titleMuted: {
    color: "#cfcfcf",
    fontSize: 16,
    textAlign: "center",
  },
  ammount: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  transactionsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#eaf984",
    marginHorizontal: 10,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingTop: 10,
  },
  transactionsTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionsTitleText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  transactionsSubtitleText: {
    color: "#1f1f1f",
    fontSize: 16,
  },
  transactiontItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  transactiontTexts: {
    marginLeft: 10,
  },
  transactiontName: {
    color: "#000",
    fontSize: 16,
  },
  transactiontDate: {
    color: "#1f1f1f",
    fontSize: 14,
  },
  transactiontAmmount: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: "auto",
  },
});
