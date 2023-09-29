import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

export const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Play and Win!</Text>
        <Text style={styles.subtitle}>
          Game for anyone who likes to try luck at guessing number
        </Text>
      </View>
      <Image
        source={require("../../assets/Bingo.png")}
        style={{ width: 340, height: 400 }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Screen2")}
      >
        <Text style={styles.textButton}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#016f48",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 50,
  },
  subtitle: {
    fontSize: 20,
    color: "#b6d5da",
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    width: 200,
    height: 70,
    backgroundColor: "#f77639",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
