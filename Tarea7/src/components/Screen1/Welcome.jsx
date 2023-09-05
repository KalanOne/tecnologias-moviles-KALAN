import { SimpleLineIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Toast } from "react-native-toast-message/lib/src/Toast";

function Welcome() {
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "No tienes notificaciones",
      position: "bottom",
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.wallet}>Wallet</Text>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.shadow} onPress={showToast}>
          <SimpleLineIcons name="bell" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shadow}>
          <Image
            source={{
              uri: "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg",
            }}
            style={styles.image}
          />
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
    color: "white",
    fontWeight: "900",
    fontSize: 20,
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
