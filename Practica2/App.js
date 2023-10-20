import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Camara from "./src/components/Camara";
import Home from "./src/screens/Home";
import { useState } from "react";
import VideoMaribanda from "./src/components/VideoMaribanda";

export default function App() {
  const [camera, setCamera] = useState(false);
  const [video, setVideo] = useState(false);
  const [shared, setShared] = useState([]);

  const handleCamera = () => {
    setCamera((prev) => !prev);
    setVideo(false);
  };

  const handleVideo = () => {
    setVideo((prev) => !prev);
    setCamera(false);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      {/* <Camara /> */}
      <Home setCamera={handleCamera} setVideo={handleVideo} />
      {camera && <Camara setShared={setShared} shared={shared} />}
      {video && <VideoMaribanda setShared={setShared} shared={shared} />}
      <Text>{shared.length > 0 && JSON.stringify(shared)}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});
