import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CharacterItem = ({
  id,
  name,
  status,
  species,
  origin,
  location,
  image,
}) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 125, height: 125 }}
        source={{
          uri: image,
        }}
      />
      <View>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.statusContainer}>
          <View
            style={
              status == "Alive"
                ? styles.alive
                : status == "Dead"
                ? styles.dead
                : styles.unknown
            }
          ></View>
          <Text style={styles.statusSpecie}>
            {status == "unknown" ? "Unknown" : status} -{" "}
            {species == "unknown" ? "Unknown" : species}
          </Text>
        </View>
        <Text style={styles.lastKnow}>Last known location:</Text>
        <Text style={styles.location}>
          {location.name == "unknown" ? "Unknown" : location.name}
        </Text>
        <Text style={styles.lastKnow}>First seen in:</Text>
        <Text style={styles.location}>
          {origin.name == "unknown" ? "Unknown" : origin.name}
        </Text>
      </View>
    </View>
  );
};

export default CharacterItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3c3e44",
    borderRadius: 10,
    margin: 10,
    flexDirection: "row",
    gap: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  statusContainer: {
    // padding: 10,
    flexDirection: "row",
  },
  alive: {
    width: 10,
    height: 10,
    backgroundColor: "#00ff00",
    borderRadius: 50,
    marginRight: 5,
    alignSelf: "center",
  },
  dead: {
    width: 10,
    height: 10,
    backgroundColor: "#ff0000",
    borderRadius: 50,
    marginRight: 5,
    alignSelf: "center",
  },
  unknown: {
    width: 10,
    height: 10,
    backgroundColor: "#808080",
    borderRadius: 50,
    marginRight: 5,
    alignSelf: "center",
  },
  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  statusSpecie: {
    color: "#fff",
    fontSize: 12,
  },
  lastKnow: {
    color: "#62849e",
    fontSize: 12,
    paddingTop: 5,
  },
  location: {
    color: "#fff",
    fontSize: 12,
  },
});
