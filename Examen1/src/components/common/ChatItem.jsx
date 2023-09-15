import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ChatItem = ({ image, name, text, date }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textos}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.fechas}>
        <Text style={styles.fecha}>{date}</Text>
      </View>
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    // minHeight: 100,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: "gray",
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: "cover",
    borderRadius: 50,
  },
  textos: {
    flex: 1,
    height: "100%",
    justifyContent: "space-evenly",
    // alignItems: "center",
    marginHorizontal: 10,
  },
  name: {
    color: "black",
    fontWeight: "bold",
  },
  text: {
    color: "lightgray",
    fontWeight: "bold",
  },
  fechas: {
    height: "100%",
  },
  fecha: {
    color: "lightgray",
  },
});
