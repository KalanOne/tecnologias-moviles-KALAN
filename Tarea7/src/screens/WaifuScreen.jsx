import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LoadingData from "../components/LoadingData";

const WaifuScreen = () => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);

  const getApiData = async () => {
    try {
      const response = await fetch("https://api.waifu.im/search");
      const json = await response.json();
      setResponse(json.images[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    setLoading(true);
    getApiData();
    delay(5000).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          setLoading(true);
          getApiData();
          delay(5000).then(() => {
            setLoading(false);
          });
        }}
        title="Get waifu"
      />
      {loading ? (
        <LoadingData />
      ) : response ? (
        <View>
          <Image
            source={{ uri: response.url }}
            style={{
              width: "80%",
              aspectRatio: response.width / response.height,
              alignSelf: "center",
              height: undefined,
            }}
            resizeMode="contain" // Esto mantiene la relación de aspecto
          />
        </View>
      ) : (
        <View>
          <Text>Error al cargar la api</Text>
        </View>
      )}
    </View>
  );
};

export default WaifuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#8236FF",
  },
});
