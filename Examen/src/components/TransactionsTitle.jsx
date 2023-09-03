import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.trans}>Transactions</Text>
      <Text style={styles.point}>. .</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // paddingRight: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "#fff",
  },
  trans: {
    color: "white",
    fontWeight: "900",
    fontSize: 20,
  },
  point: {
    color: "white",
    fontWeight: "900",
    fontSize: 20,
    paddingBottom: 10,
  },
});
