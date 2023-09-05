import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  StatusBar as ReactStatus,
  Platform,
} from "react-native";
import Welcome from "../components/Screen1/Welcome";
import Money from "../components/Screen1/Money";
import Actions from "../components/Screen1/Actions";
import Assets from "../components/Screen1/Assets";

const Screen1 = ({ onWalletClick }) => {
  return (
    <>
      <View style={styles.container}>
        <Welcome />
        <Money />
        <Actions onWalletClick={onWalletClick} />
        <Assets />
      </View>
      <StatusBar style="inverted" />
    </>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#d76741",
    backgroundColor: Platform.select({
      ios: "#d76741",
      android: "#d76741",
      web: "#2596be",
    }),
    paddingTop: ReactStatus.currentHeight,
  },
});
