import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const CharacterDetail = ({ navigation, route }) => {
  const { id } = route.params;
  const [character, setCharacter] = useState();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data);
      });
  }, []);

  return character === undefined ? (
    <View
      style={{
        flex: 1,
        backgroundColor: "#272b33",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "#fff", fontSize: 25, fontWeight: "900" }}>
        Loading...
      </Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.caracteristics}>Caracteristics:</Text>
        <View style={styles.caracteristicContainer}>
          <Text style={styles.caracter}>Status:</Text>
          <View
            style={
              character.status == "Alive"
                ? styles.alive
                : character.status == "Dead"
                ? styles.dead
                : styles.unknown
            }
          ></View>
          <Text style={styles.value}>
            {character.status == "" ||
            character.status == null ||
            character.status == "unknown"
              ? "Unknown"
              : character.status}
          </Text>
        </View>
        <View style={styles.caracteristicContainer}>
          <Text style={styles.caracter}>Specie:</Text>
          <Text style={styles.value}>
            {character.species === "" ||
            character.species === null ||
            character.species === "unknown"
              ? "Unknown"
              : character.species}
          </Text>
        </View>
        <View style={styles.caracteristicContainer}>
          <Text style={styles.caracter}>Type:</Text>
          <Text style={styles.value}>
            {character.type === "" ||
            character.type === null ||
            character.type === "unknown"
              ? "Unknown"
              : character.type}
          </Text>
        </View>
        <View style={styles.caracteristicContainer}>
          <Text style={styles.caracter}>Gender:</Text>
          <Text style={styles.value}>
            {character.gender === "" ||
            character.gender === null ||
            character.gender === "unknown"
              ? "Unknown"
              : character.gender}
          </Text>
        </View>
        <View style={styles.caracteristicContainer}>
          <Text style={styles.caracter}>Origin:</Text>
          <Text style={styles.value}>
            {character.origin.name === "" ||
            character.origin.name === null ||
            character.origin.name === "unknown"
              ? "Unknown"
              : character.origin.name}
          </Text>
        </View>
        <View style={styles.caracteristicContainer}>
          <Text style={styles.caracter}>Location:</Text>
          <Text style={styles.value}>
            {character.location.name === "" ||
            character.location.name === null ||
            character.location.name === "unknown"
              ? "Unknown"
              : character.location.name}
          </Text>
        </View>
        <View style={styles.caracteristicContainer}>
          <Text style={styles.caracter}>Created:</Text>
          <Text style={styles.value}>
            {character.created === "" ||
            character.created === null ||
            character.created === "unknown"
              ? "Unknown"
              : character.created}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CharacterDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272b33",
  },
  image: {
    width: "100%",
    height: 300,
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
  },
  caracteristics: {
    color: "#62849e",
    fontSize: 22,
    paddingVertical: 10,
  },
  caracter: {
    color: "#62849e",
    fontSize: 18,
  },
  value: {
    color: "#fff",
    fontSize: 18,
  },
  caracteristicContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    paddingBottom: 5,
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
});
