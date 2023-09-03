import { Image, StyleSheet, Text, View } from "react-native";

export default function App({ name, type, ammount, sign, image }) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.shadow}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.type}>{type}</Text>
        </View>
      </View>
      <Text style={styles.ammount}>
        {sign}${ammount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#373855",
    backgroundColor: "#0E0F30",
    borderRadius: 10,
    padding: 5,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  name: {
    color: "white",
    fontWeight: "900",
    fontSize: 17,
  },
  type: {
    color: "#787a98",
    fontSize: 10,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    borderRadius: 50,
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
});
