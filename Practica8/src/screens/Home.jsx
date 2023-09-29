import {
  ActivityIndicator,
  Alert,
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Header } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

const Home = ({}) => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState("");
  const [characters, setCharacters] = useState([]);
  const [filterCharacters, setFilterCharacters] = useState([]);

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const json = await response.json();
        setCharacters(json.results);
        setFilterCharacters(characters);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    navigation.setOptions({
      title: "HOME FROM COMPONENT",
      headerRight: () => <Text>Right from component</Text>,
      headerSearchBarOptions: {
        placeholder: "Search",
      },
    });
  }, [navigation]);

  const filterData = (e) => {
    setInputValue(e);
    if (inputValue === "") return;
    setFilterCharacters(
      ...characters.filter((character) => character.name === e)
    );
  };

  return (
    <View>
      <Text>hola</Text>
      <TextInput
        value={inputValue}
        onChangeText={(e) => filterData(e)}
        style={{ borderWidth: 1, paddingVertical: 10, paddingHorizontal: 20 }}
      />
      <Text>{inputValue}</Text>
      {filterCharacters.length > 0 &&
        filterCharacters.map((character) => {
          return (
            <View key={character.id}>
              <Text style={{ fontSize: 20 }}>{character.name}</Text>
            </View>
          );
        })}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
