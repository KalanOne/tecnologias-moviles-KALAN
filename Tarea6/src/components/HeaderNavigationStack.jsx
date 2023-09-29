import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

export const HeaderNavigationStack = ({ title, subtitle }) => {
  const { canGoBack, goBack } = useNavigation();
  return (
    <>
      <View style={styles.container}>
        {canGoBack() ? (
          <TouchableOpacity onPress={() => goBack()}>
            <MaterialIcons name="arrow-back-ios" size={15} color="#a8a8a8" />
          </TouchableOpacity>
        ) : (
          <Text></Text>
        )}
        <Text style={styles.title}>{title}</Text>
        {canGoBack() ? (
          <TouchableOpacity onPress={() => goBack()}>
            <Entypo name="cross" size={24} color="#a8a8a8" />
          </TouchableOpacity>
        ) : (
          <Text></Text>
        )}
      </View>
      {subtitle && (
        <View>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#b052ff",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingBottom: 10,
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  subtitle: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
  },
});
