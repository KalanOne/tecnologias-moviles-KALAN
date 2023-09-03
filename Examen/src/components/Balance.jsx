import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.balance}>Your balance</Text>
      <Text style={styles.dinero}>$1600,00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "100%",
  },
  balance: {
    color: "#8a8ba7",
    fontSize: 20,
  },
  dinero: {
    color: "white",
    fontSize: 60,
    fontWeight: "900",
  },
});
