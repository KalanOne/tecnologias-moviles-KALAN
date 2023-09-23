import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import CharacterItem from "../components/CharacterItem";

const CharacScreen = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rick and Morty Characters</Text>
      <FlatList
        data={characters}
        renderItem={({
          item: {
            id,
            name,
            status,
            species,
            origin,
            location,
            image,
          },
        }) => (
          <CharacterItem
            id={id}
            name={name}
            status={status}
            species={species}
            origin={origin}
            location={location}
            image={image}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CharacScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#272b33",
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    letterSpacing: 1,
  },
});
