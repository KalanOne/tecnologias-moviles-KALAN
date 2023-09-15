import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const StoriesItem = ({ image, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default StoriesItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  name: {
    color: "lightgray",
  },
  container2: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  image: {
    width: 65,
    height: 65,
    resizeMode: "cover",
    borderRadius: 50,
  },
  shadow: {
    // backgroundColor: "#ffe9d2",
    backgroundColor: "pink",
    borderRadius: 50,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
