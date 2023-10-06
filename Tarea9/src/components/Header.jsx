import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { usetheme } from "../hooks/useThemeContext";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title }) => {
  const [theme, toggleTheme] = usetheme();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {navigation.canGoBack() ? (
        <TouchableOpacity
          style={[
            styles.iconContainer,
            theme == "light" ? { backgroundColor: "#000" } : null,
          ]}
          onPress={navigation.goBack}
        >
          <Ionicons name="ios-arrow-back-sharp" size={24} color="white" />
        </TouchableOpacity>
      ) : (
        <Image
          source={{
            uri: "https://static.wikia.nocookie.net/horrormovies/images/9/9c/Esther_coleman.jpg/revision/latest?cb=20200630180539",
          }}
          style={styles.image}
        />
      )}
      <Text
        style={[
          styles.text,
          theme == "light" ? { color: "#000" } : { color: "#fff" },
        ]}
      >
        {title}
      </Text>
      <TouchableOpacity
        style={[
          styles.iconContainer,
          theme == "light" ? { backgroundColor: "#000" } : null,
        ]}
        onPress={toggleTheme}
      >
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight + 5,
    // paddingTop: 5,
    paddingHorizontal: 20,
  },
  iconContainer: {
    height: 55,
    width: 55,
    borderRadius: 20,
    borderColor: "#cfcfcf",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    height: 55,
    width: 55,
    borderRadius: 20,
  },
});
