import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const ShadowCustom = ({ children }) => {
  return (
    <TouchableOpacity style={styles.shadow}>
      {/* <Image
        source={{
          uri: "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg",
        }}
        style={styles.image}
      /> */}
      {children}
    </TouchableOpacity>
  );
};

export default ShadowCustom;

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
