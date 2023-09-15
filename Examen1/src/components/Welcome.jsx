import { SimpleLineIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image
          source={{
            uri: "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg",
          }}
          style={styles.image}
        />
        <Text style={styles.wallet}>Hey Kalan</Text>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity>
          <SimpleLineIcons name="bell" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <SimpleLineIcons name="bell" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    minHeight: "10%",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  wallet: {
    color: "black",
    fontWeight: "bold",
  },
  container2: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: "cover",
    borderRadius: 50,
  },
  shadow: {
    backgroundColor: "#ffe9d2",
    borderRadius: 50,
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
});
