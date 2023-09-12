import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { backgroundCard, mutedColor, titleColor } from "../../theme/constanst";

const ResultItem = ({ image, hash, title, ammount }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.textsContainer}>
        <Text style={styles.hash}>{hash}</Text>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.ammountContainer}>
          <MaterialIcons
            name="attach-money"
            size={15}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.ammount}> {ammount}</Text>
        </View>
      </View>
    </View>
  );
};

export default ResultItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundCard,
    borderRadius: 15,
    padding: 10,
    marginRight: 30,
  },
  image: {
    width: 200,
    height: 250,
    borderRadius: 10,
    resizeMode: "cover",
  },
  textsContainer: {
    marginHorizontal: 20,
    gap: 5,
  },
  hash: {
    fontSize: 12,
    fontWeight: "500",
    color: mutedColor,
    marginTop: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: titleColor,
  },
  ammountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  icon: {
    backgroundColor: "gold",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  ammount: {
    fontSize: 15,
    fontWeight: "bold",
    color: titleColor,
  },
});
