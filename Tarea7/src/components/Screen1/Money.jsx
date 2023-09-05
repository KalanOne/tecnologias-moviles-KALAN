import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Clipboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";

const Money = () => {
  const copyToClipboard = () => {
    Clipboard.setString("1234567890");
    // alert("Texto copiado al portapapeles");
    showToast("Texto copiado al portapapeles");
  };
  const showToast = (message) => {
    Toast.show({
      type: "success",
      text1: message,
      position: "bottom",
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.dinero}>$23,867</Text>
      <TouchableOpacity
        style={styles.walletIDButton}
        onPress={() => copyToClipboard()}
      >
        <Text style={styles.walletID}>Wallet ID: 1234567890 </Text>
        <MaterialCommunityIcons name="content-copy" size={15} color="#f2987c" />
      </TouchableOpacity>
    </View>
  );
};

export default Money;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    width: "100%",
  },
  walletID: {
    color: "#f2987c",
    fontSize: 15,
    textAlign: "center",
  },
  dinero: {
    color: "white",
    fontSize: 60,
    fontWeight: "900",
    textAlign: "center",
  },
  walletIDButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
