import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import HistoryItem from "./common/HistoryItem";

const data = [
  { text: "Miniso" },
  { text: "Neurso" },
  { text: "Watch" },
  { text: "Shoes" },
  { text: "Shirt" },
  { text: "Pants" },
  { text: "Socks" },
  { text: "IPhone" },
  { text: "IPad" },
];

const History = () => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* <HistoryItem text={"Miniso"} />
    <HistoryItem text={"Neurso"} /> */}
      {data.map((item, index) => (
        <HistoryItem text={item.text} key={index} />
      ))}
    </ScrollView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    marginTop: 5,
    // paddingHorizontal: 20,
    marginHorizontal: 20,
  },
});
