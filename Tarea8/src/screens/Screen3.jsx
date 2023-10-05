import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";

const Screen3 = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.infoContainer}>
        <View style={styles.imagesContainer}>
          <Image
            source={{
              uri: "https://static.wikia.nocookie.net/horrormovies/images/9/9c/Esther_coleman.jpg/revision/latest?cb=20200630180539",
            }}
            style={styles.image}
          />
          <View style={styles.iconContainer}>
            <Ionicons name="wallet-outline" size={24} color="black" />
          </View>
        </View>
        <Text style={styles.nameText}>Esther Coleman</Text>
        <Text style={styles.creditNumberText}>****3294</Text>
      </View>
      <View style={styles.ammountContainer}>
        <Text style={styles.ammountText}>$340</Text>
        <Text style={styles.mutedText}>.00</Text>
      </View>
      <View style={styles.numberKeyboardContainer}>
        <View style={styles.rowNumberKeyboard}>
          <TouchableOpacity style={styles.numberContainer}>
            <Text style={styles.numberText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberContainer}>
            <Text style={styles.numberText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberContainer}>
            <Text style={styles.numberText}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowNumberKeyboard}>
          <TouchableOpacity style={styles.numberContainer}>
            <Text style={styles.numberText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberContainer}>
            <Text style={styles.numberText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberContainer}>
            <Text style={styles.numberText}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowNumberKeyboard}>
          <TouchableOpacity style={styles.numberContainer}>
            <Text style={styles.numberText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberContainer}>
            <Text style={styles.numberText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberContainer}>
            <Text style={styles.numberText}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowNumberKeyboard}>
          <TouchableOpacity style={styles.numberContainer}>
            <Ionicons name="chevron-back-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberContainer}>
            <Text style={styles.numberText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.numberContainer}>
            <Text style={styles.numberText}>.</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen3;

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    justifyContent: "space-between",
  },
  infoContainer: {
    alignItems: "center",
    // marginTop: 20,
  },
  imagesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  iconContainer: {
    height: 45,
    width: 45,
    borderRadius: 50,
    backgroundColor: "#f3fe7c",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ translateX: -10 }],
  },
  nameText: {
    color: "#fff",
    fontSize: 20,
    // fontWeight: "bold",
    marginTop: 10,
  },
  creditNumberText: {
    color: "#707070",
    fontSize: 15,
    marginTop: 5,
  },
  ammountContainer: {
    flexDirection: "row",
    // marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  ammountText: {
    color: "#fff",
    fontSize: 50,
    alignSelf: "center",
  },
  mutedText: {
    color: "#707070",
    fontSize: 50,
    alignSelf: "center",
  },
  numberKeyboardContainer: {
    // marginTop: 50,
    paddingHorizontal: 20,
  },
  rowNumberKeyboard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 10,
  },
  numberContainer: {
    height: 70,
    flex: 1,
    borderRadius: 30,
    backgroundColor: "#1f1f1f",
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: "#fff",
    fontSize: 30,
  },
  sendButton: {
    height: 70,
    marginHorizontal: 20,
    borderRadius: 50,
    backgroundColor: "#eaf984",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "600",
  },
};
