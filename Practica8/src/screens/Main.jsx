import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const Main = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
  ];

  return (
    <View>
      {/* <FlatList
        data={DATA}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Text>Header</Text>}
        ListFooterComponent={<Text>Footer</Text>}
        ListEmptyComponent={<Text>Empty</Text>}
      /> */}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
