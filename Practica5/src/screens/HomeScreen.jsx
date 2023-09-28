import React, { useEffect, useState } from "react";
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

const HomeScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const fecthData = async () => {
      try {
        setIsFetching(true);
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        await delay(5000);
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetching(false);
      }
    };
    fecthData();
  }, [isEnabled]);

  return (
    <View style={styles.centeredView}>
      <Switch
        trackColor={{ false: "#8000ff", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor={{ false: "#767577", true: "#81b0ff" }}
        onValueChange={toggleSwitch}
        value={isEnabled}
        accessibilityLabel="Switch"
      />
      {isEnabled && <Text>Hola Guapo</Text>}
      {isFetching && <ActivityIndicator size={"small"} color="#8000ff" />}
      {!isFetching && <Text>Ya cargó</Text>}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
