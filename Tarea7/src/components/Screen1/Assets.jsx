import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Trasactions from "./Trasactions";
import Separator from "../../common/Separator";

const Assets = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("Home");

  const handleMenuItemClick = (itemName) => {
    setActiveMenuItem(itemName);
  };

  const data = [
    {
      id: 1,
      icon: <FontAwesome5 name="ethereum" size={24} color="black" />,
      color: "#d3683f",
      title: "Etherium",
      subtitle: "29.74% ($28,015)",
      ammount: "79.006 ETH",
      subammount: "$100,000.00",
    },
    {
      id: 2,
      icon: (
        <FontAwesome5
          name="acquisitions-incorporated"
          size={24}
          color="black"
        />
      ),
      color: "#f1b50c",
      title: "Binance",
      subtitle: "15.96% ($28,015)",
      ammount: "107.70 BNB",
      subammount: "$30,812.92",
    },
    {
      id: 3,
      icon: <FontAwesome5 name="rockrms" size={24} color="black" />,
      color: "#849e5a",
      title: "Theter usd",
      subtitle: "29.74% ($28,015)",
      ammount: "79.006 ETH",
      subammount: "$100,000.00",
    },
    {
      id: 4,
      icon: <FontAwesome5 name="btc" size={24} color="black" />,
      color: "#d3683f",
      title: "Bitcoin",
      subtitle: "29.74% ($28,015)",
      ammount: "79.006 BTC",
      subammount: "$1,000,000.00",
    },
    {
      id: 5,
      icon: <FontAwesome5 name="accusoft" size={24} color="black" />,
      color: "#f1b50c",
      title: "Binance",
      subtitle: "15.96% ($28,015)",
      ammount: "107.70 BNB",
      subammount: "$30,812.92",
    },
  ];
  return (
    <>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonActive]}>
          <Text style={styles.buttonText}>My Assets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonInactive]}>
          <Text style={styles.buttonMutedText}>My Transactions</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({
            item: { icon, color, title, subtitle, ammount, subammount },
            index,
          }) => {
            return (
              <Trasactions
                icon={icon}
                color={color}
                title={title}
                subtitle={subtitle}
                ammount={ammount}
                subammount={subammount}
              />
            );
          }}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={<Separator />}
        />
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemClick("Home")}
          >
            <AntDesign
              name="home"
              size={24}
              color={activeMenuItem === "Home" ? activeColor : "black"}
            />
            <Text
              style={activeMenuItem === "Home" ? styles.menuItemActive : null}
            >
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemClick("Wallet")}
          >
            <Ionicons
              name="wallet-outline"
              size={24}
              color={activeMenuItem === "Wallet" ? activeColor : "black"}
            />
            <Text
              style={activeMenuItem === "Wallet" ? styles.menuItemActive : null}
            >
              Wallet
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemClick("Chart")}
          >
            <Feather
              name="pie-chart"
              size={24}
              color={activeMenuItem === "Chart" ? activeColor : "black"}
            />
            <Text
              style={activeMenuItem === "Chart" ? styles.menuItemActive : null}
            >
              Chart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemClick("Settings")}
          >
            <Ionicons
              name="settings-outline"
              size={24}
              color={activeMenuItem === "Settings" ? activeColor : "black"}
            />
            <Text
              style={
                activeMenuItem === "Settings" ? styles.menuItemActive : null
              }
            >
              Settings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Assets;

const activeColor = "#d76741";

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginHorizontal: 5,
    marginTop: 30,
    backgroundColor: "#fff",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  buttonText: {
    // fontWeight: "300",
    fontSize: 15,
    textAlign: "center",
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    marginBottom: 5,
    backgroundColor: "#fff",
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  menu: {
    backgroundColor: "white",
    minHeight: 50,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    marginHorizontal: -10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  menuItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  menuItemActive: {
    color: activeColor,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: Platform.select({
      ios: 0,
      android: 0,
      web: -1,
    }),
  },
  buttonActive: {
    width: "50%",
    borderTopEndRadius: 50,
  },
  buttonInactive: {
    // backgroundColor: "#d76741",
    backgroundColor: Platform.select({
      ios: "#d76741",
      android: "#d76741",
      web: "#2596be",
    }),
    width: "52%",
    borderBottomStartRadius: 25,
    borderTopStartRadius: 0,
    // position: "absolute",
    // marginLeft: -23,
    marginLeft: Platform.select({
      ios: -23,
      android: -23,
      web: -41,
    }),
  },
  buttonMutedText: {
    // fontWeight: "300",
    fontSize: 15,
    textAlign: "center",
    color: "#f2987c",
  },
});
