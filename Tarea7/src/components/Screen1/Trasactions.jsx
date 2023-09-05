import { Image, StyleSheet, Text, View } from "react-native";

const Trasactions = ({ icon, color, title, subtitle, ammount, subammount }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={[styles.shadow, { backgroundColor: color }]}>{icon}</View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      <View style={styles.container3}>
        <Text style={styles.ammount}>{ammount}</Text>
        <Text style={styles.subtitle}>{subammount}</Text>
      </View>
    </View>
  );
};

export default Trasactions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  container3: {
    alignItems: "flex-end",
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: 17,
  },
  subtitle: {
    color: "#c1c1c1",
    fontSize: 13,
  },
  shadow: {
    backgroundColor: "#373855",
    borderRadius: 50,
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  ammount: {
    color: "white",
    fontWeight: "900",
  },
  ammount: {
    color: "black",
    fontWeight: "400",
    fontSize: 15,
  },
});
