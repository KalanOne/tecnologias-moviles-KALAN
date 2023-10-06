import React from "react";
import {
  Text,
  StyleSheet,
  useColorScheme,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { usetheme } from "../hooks/useThemeContext";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Data = [
  {
    id: 1,
    name: "Esther Coleman",
    creditNumber: "****3294",
  },
  {
    id: 2,
    name: "Esther Coleman",
    creditNumber: "****3294",
  },
  {
    id: 3,
    name: "Esther Coleman",
    creditNumber: "****3294",
  },
  {
    id: 4,
    name: "Esther Coleman",
    creditNumber: "****3294",
  },
  {
    id: 5,
    name: "Esther Coleman",
    creditNumber: "****3294",
  },
];

const Screen1 = () => {
  const [theme, toggleTheme] = usetheme();
  const navigation = useNavigation();

  const navigateToScreen3 = () => {
    navigation.navigate("Transfer"); // 'Screen3' debe coincidir con el nombre de la pantalla que deseas navegar
  };
  const navigateToScreen2 = () => {
    navigation.navigate("Transactions"); // 'Screen3' debe coincidir con el nombre de la pantalla que deseas navegar
  };
  return (
    <View
      style={[
        styles.container,
        theme == "light" ? { backgroundColor: "#E0E0E0" } : null,
      ]}
    >
      <StatusBar style={theme == "light" ? "dark" : "light"} />
      <Header />
      <View style={styles.creditCardsContainer}>
        <Text
          style={[
            styles.title,
            theme == "light" ? { color: "#000" } : { color: "#fff" },
          ]}
        >
          My cards
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.addCreditCard}>
            <AntDesign name="plus" size={24} color="black" />
          </View>
          <View style={styles.creditCard}>
            <View style={styles.creditCardTop}>
              <View style={styles.visaContainer}>
                <View style={styles.visaLeft}></View>
                <View style={styles.visaRight}></View>
              </View>
              <Text style={styles.creditCardNumbers}>*****1012</Text>
            </View>
            <View style={styles.creditCardBottom}>
              <Text style={styles.creditCardAmmount}>$13,900.69</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionItem} onPress={navigateToScreen3}>
          <Ionicons name="wallet-outline" size={24} color="white" />
          <Text style={styles.actionText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Ionicons name="wallet-outline" size={24} color="white" />
          <Text style={styles.actionText}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem} onPress={navigateToScreen2}>
          <Ionicons name="wallet-outline" size={24} color="white" />
          <Text style={styles.actionText}>Swap</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navPillsContainer}>
        <View style={styles.navPill}>
          <Text style={styles.navPillText}>Activity</Text>
        </View>
        <View style={styles.navPill}>
          <Text style={styles.navPillText}>Activity</Text>
        </View>
        <View style={styles.navPill}>
          <Text style={styles.navPillText}>Activity</Text>
        </View>
        <View style={styles.navPill}>
          <Text style={styles.navPillText}>Activity</Text>
        </View>
      </View>
      <View style={styles.contactsContainer}>
        <View style={styles.contactsTitle}>
          <Text style={styles.contactsTitleText}>My Contacts</Text>
          <Ionicons name="search" size={24} color="white" />
        </View>
        <FlatList
          data={Data}
          renderItem={({ item }) => (
            <View style={styles.contactItemContainer}>
              <Image
                source={{
                  uri: "https://static.wikia.nocookie.net/horrormovies/images/9/9c/Esther_coleman.jpg/revision/latest?cb=20200630180539",
                }}
                style={styles.image}
              />
              <View style={styles.contactTexts}>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactNumber}>{item.creditNumber}</Text>
              </View>
              <Entypo name="dots-three-vertical" size={24} color="white" />
            </View>
          )}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 20, flex: 1 }}
        />
      </View>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    backgroundColor: "#0d0d0d",
  },
  creditCardsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    flex: 0.7,
  },
  title: {
    color: "#fff",
    fontSize: 40,
    // fontWeight: "bold",
    marginBottom: 10,
  },
  addCreditCard: {
    height: 150,
    width: 80,
    backgroundColor: "#eaf984",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  creditCard: {
    height: 150,
    // width: 200,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 10,
    // paddingHorizontal: 10,
  },
  creditCardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  visaContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  visaLeft: {
    height: 50,
    width: 50,
    backgroundColor: "#6f6f6f",
    opacity: 0.5,
    borderRadius: 50,
  },
  visaRight: {
    height: 50,
    width: 50,
    backgroundColor: "#6f6f6f",
    opacity: 0.5,
    borderRadius: 50,
    transform: [{ translateX: -20 }],
  },
  mutedText: {
    color: "#707070",
    fontSize: 15,
  },
  creditCardNumbers: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  creditCardBottom: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  creditCardAmmount: {
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  actionItem: {
    height: 70,
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#1f1f1f",
    justifyContent: "center",
    alignItems: "center",
  },
  actionText: {
    color: "#eaf984",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  navPillsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 10,
    marginTop: 10,
  },
  navPill: {
    flex: 1,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: "#0d0d0d",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#cfcfcf",
    borderWidth: 1,
  },
  navPillText: {
    color: "#fff",
    fontWeight: "bold",
  },
  contactsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    flex: 1,
    backgroundColor: "#1f1f1f",
    marginHorizontal: 10,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingTop: 10,
  },
  contactsTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contactsTitleText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  contactItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  contactTexts: {
    marginLeft: 10,
    flex: 1,
  },
  contactName: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
  contactNumber: {
    color: "#707070",
    fontSize: 15,
  },
});
