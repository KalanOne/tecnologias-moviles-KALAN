import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { subtitleColor, titleColor } from "../theme/constanst";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Discover</Text>
        <Text style={styles.subtitle}>Your products</Text>
      </View>
      <Image
        source={{
          // uri: "https://diamondfilms.com/img/noticias/615c6c8e33468f3e5221994f1.jpg",
          uri: "https://mott.pe/noticias/wp-content/uploads/2016/07/Así-luce-hoy-en-día-Isabelle-Fuhrman-la-terrorífica-niña-en-La-Huérfana-Isabelle-Fuhrman.jpg",
        }}
        style={styles.image}
      />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  titleContainer: {},
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: titleColor,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "300",
    color: subtitleColor,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
