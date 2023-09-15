import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Welcome from "../components/Welcome";
import Stories from "../components/Stories";
import Pills from "../components/common/Pills";
import Chats from "../components/Chats";
import Menu from "../components/Menu";

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Welcome />
      <Text style={styles.stories}>Stories</Text>
      <Stories />
      <Pills />
      <Chats />
      <Menu />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    minHeight: "10%",
  },
  stories: {
    color: "lightgray",
    fontSize: 20,
  },
});
