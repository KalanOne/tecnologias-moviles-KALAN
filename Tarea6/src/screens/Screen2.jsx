import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { HeaderNavigationStack } from "../components/HeaderNavigationStack";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const data = [
  { id: "1", text: "Elemento 1", checked: true },
  { id: "2", text: "Elemento 2", checked: false },
  { id: "3", text: "Elemento 3", checked: false },
  { id: "4", text: "Elemento 4", checked: true },
  { id: "5", text: "Elemento 5", checked: true },
  { id: "6", text: "Elemento 6", checked: false },
  { id: "7", text: "Elemento 7", checked: false },
  { id: "8", text: "Elemento 8", checked: true },
];

export const Screen2 = () => {
  return (
    <View style={styles.container}>
      <HeaderNavigationStack
        title={"$234 000 000"}
        subtitle={"UroMillions"}
      ></HeaderNavigationStack>
      <View style={styles.calendarContainer}>
        <View style={styles.calendarItemContainer}>
          <EvilIcons name="calendar" size={30} color="black" />
          <Text style={styles.calendarText}>Today</Text>
        </View>
        <View style={styles.calendarItemContainer}>
          <Feather name="clock" size={22} color="black" />
          <Text style={styles.calendarText}>10:11:00</Text>
        </View>
      </View>
      <View style={styles.ticketContainer}>
        <View style={styles.topTicket}>
          <Text style={{ color: "#fff", fontSize: 17 }}>Ticket 1</Text>
          <Feather name="repeat" size={20} color="#d6d6d6" />
        </View>
        <View style={styles.bottomTicket}>
          <View style={styles.circle}>
            <Text style={styles.ticketsText}>1</Text>
          </View>
          <View style={styles.circle}>
            <Text style={styles.ticketsText}>7</Text>
          </View>
          <View style={styles.circle}>
            <Text style={styles.ticketsText}>14</Text>
          </View>
          <View style={styles.circle}>
            <Text style={styles.ticketsText}>16</Text>
          </View>
          <View style={styles.circle}>
            <Text style={styles.ticketsText}>19</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        style={{
          width: "95%",
          marginBottom: 20,
          marginTop: 10,
        }}
        renderItem={({ item, index }) => (
          <>
            <View style={styles.squareContainer}>
              <View style={styles.topSquareContainer}>
                <Text style={styles.subtitleSquare}>Rate type</Text>
                <Text style={styles.titleSquare}>{item.text}</Text>
              </View>
              <View style={styles.bottomSquareContainer}>
                <Text></Text>
                <View
                  style={[
                    styles.cirlceSquareContainer,
                    item.checked
                      ? { backgroundColor: "#f8793c" }
                      : { backgroundColor: "#efeeec" },
                  ]}
                >
                  <Feather
                    name="check"
                    size={24}
                    color={item.checked ? "#fff" : "lightgray"}
                  />
                </View>
              </View>
            </View>
            {index % 2 === 0 && <View style={{ flex: 1 }}></View>}
          </>
        )}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Watch Results</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ecdcc2",
    alignItems: "center",
  },
  calendarContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    backgroundColor: "#e3cdab",
    width: "60%",
    borderRadius: 20,
    minHeight: 50,
    alignItems: "center",
  },
  calendarItemContainer: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  calendarText: {
    fontSize: 15,
  },
  ticketContainer: {
    width: "95%",
    padding: 10,
    backgroundColor: "#016f48",
    borderRadius: 20,
    marginTop: 20,
    gap: 20,
    paddingBottom: 20,
  },
  topTicket: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
  },
  bottomTicket: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fed339",
    justifyContent: "center",
    alignItems: "center",
  },
  ticketsText: {
    fontSize: 17,
    fontWeight: "bold",
  },
  button: {
    width: 200,
    height: 70,
    backgroundColor: "#0e6e49",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  squareContainer: {
    width: 180,
    height: 180,
    backgroundColor: "#fffffe",
    borderRadius: 20,
    justifyContent: "space-between",
    padding: 20,
    marginBottom: 20,
  },
  topSquareContainer: {
    gap: 5,
  },
  bottomSquareContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subtitleSquare: {
    fontSize: 15,
    color: "lightgray",
  },
  titleSquare: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cirlceSquareContainer: {
    width: 30,
    height: 30,
    borderRadius: 50,
    // backgroundColor: "#f8793c",
    justifyContent: "center",
    alignItems: "center",
  },
});
