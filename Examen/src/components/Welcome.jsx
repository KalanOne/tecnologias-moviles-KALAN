import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
          // width: "100%",
        }}
      >
        <View style={styles.shadow}>
          <Image
            source={{
              uri: "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg",
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.name}>Morning, </Text>
        <Text style={styles.name2}>Sarah Catherine Hook</Text>
      </View>
      <Text style={styles.textPoint}>: :</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    minHeight: "10%",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  name: {
    color: "#787a98",
    paddingLeft: 10,
  },
  name2: {
    color: "white",
    fontWeight: "900",
  },
  textPoint: {
    color: "white",
    fontWeight: "900",
    fontSize: 20,
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
});
