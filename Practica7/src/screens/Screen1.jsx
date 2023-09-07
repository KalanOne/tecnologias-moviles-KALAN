import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Card from "../components/screen1/Card";

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons name="notifications-outline" size={35} color="#3764c2" />
        <Image
          style={styles.headerImage}
          source={{
            uri: "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg",
          }}
        />
      </View>
      <Text style={styles.titleText}>
        <Text style={{ color: "#c1c0c4" }}>Hello, </Text>
        <Text style={{ color: "#2b3941" }}>Alan</Text>
      </Text>
      {/* <View style={styles.cardContainer}>
        <View style={styles.cardIconContainer}>
          <AntDesign name="shoppingcart" size={30} color="#fff" />
        </View>
        <Text style={styles.cardText}>Start training</Text>
      </View> */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: 40 }}
      >
        <Card
          isDarkBlue
          texto={"Start training"}
          iconName={"hdd"}
          iconTypy={"AntDesign"}
        />
        <Card
          texto={"Start training"}
          iconName={"hdd"}
          iconTypy={"AntDesign"}
        />
        <Card
          isDarkBlue
          texto={"Start training"}
          iconName={"hdd"}
          iconTypy={"AntDesign"}
        />
        <Card
          texto={"Start training"}
          iconName={"hdd"}
          iconTypy={"AntDesign"}
        />
        <Card
          isDarkBlue
          texto={"Start training"}
          iconName={"hdd"}
          iconTypy={"AntDesign"}
        />
      </ScrollView>
      <Text style={styles.textHeader}>What are your symptomps</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 20 }}
      >
        <View style={styles.symptompsContainer}>
          <Text style={{ fontSize: 18, color: "#485258", fontWeight: "600" }}>
            {`Today, ${new Date().toLocaleDateString()}`}
          </Text>
        </View>
        <View style={styles.symptompsContainer}>
          <Text style={{ fontSize: 18, color: "#485258", fontWeight: "600" }}>
            I am fine
          </Text>
        </View>
        <View style={styles.symptompsContainer}>
          <Text style={{ fontSize: 18, color: "#485258", fontWeight: "600" }}>
            I am fine
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    // resizeMode: "center",
  },
  titleText: {
    marginTop: 10,
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cardContainer: {
    height: 200,
    width: 200,
    borderRadius: 40,
    backgroundColor: "#e6ecff",
    padding: 20,
    justifyContent: "space-evenly",
  },
  cardIconContainer: {
    backgroundColor: "#2362df",
    width: 50,
    height: 50,
    // padding: 5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#236cff",
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#495258",
  },
  symptompsContainer: {
    height: 50,
    width: 200,
    borderRadius: 40,
    backgroundColor: "#e6ecff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});
