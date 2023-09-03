import { StatusBar } from "expo-status-bar";
import { FlatList, StatusBar as KLN, StyleSheet, View } from "react-native";
import Separator from "./src/common/Separator";
import Actions from "./src/components/Actions";
import Balance from "./src/components/Balance";
import Trasactions from "./src/components/Transactions";
import TransactionsTitle from "./src/components/TransactionsTitle";
import Welcome from "./src/components/Welcome";

export default function App() {
  const data = [
    {
      id: 1,
      name: "LTC",
      type: "Productive",
      ammount: "3,676.76",
      sign: "-",
      image:
        "https://br.web.img3.acsta.net/c_310_420/pictures/19/12/16/19/44/3151767.jpg",
    },
    {
      id: 2,
      name: "Facebook",
      type: "Entertainment",
      ammount: "2,500.50",
      sign: "-",
      image:
        "https://es.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/71/74/63/19147588.jpg",
    },
    {
      id: 3,
      name: "Google",
      type: "Technology",
      ammount: "1,500.50",
      sign: "-",
      image:
        "https://images.fanpop.com/images/image_uploads/The-Quiet-camilla-belle-681121_592_336.jpg",
    },
    {
      id: 4,
      name: "Apple",
      type: "Technology",
      ammount: "3,738.92",
      sign: "+",
      image:
        "https://vanlifewanderer.com/wp-content/uploads/2023/06/mackenzie_foy_interstellar.jpg",
    },
    {
      id: 5,
      name: "Amazon",
      type: "Technology",
      ammount: "930.50",
      sign: "-",
      image:
        "https://br.web.img3.acsta.net/c_310_420/pictures/19/12/16/19/44/3151767.jpg",
    },
    {
      id: 6,
      name: "Netflix",
      type: "Entertainment",
      ammount: "7,000.00",
      sign: "+",
      image:
        "https://es.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/71/74/63/19147588.jpg",
    },
    {
      id: 7,
      name: "WhatsApp",
      type: "Cross-Platform",
      ammount: "1,578.00",
      sign: "-",
      image:
        "https://images.fanpop.com/images/image_uploads/The-Quiet-camilla-belle-681121_592_336.jpg",
    },
  ];
  return (
    <View style={styles.container}>
      <Welcome />
      <Balance />
      <Actions />
      <TransactionsTitle />
      <FlatList
        data={data}
        renderItem={({ item: { name, type, ammount, sign, image }, index }) => (
          <Trasactions
            name={name}
            type={type}
            ammount={ammount}
            sign={sign}
            image={image}
            index={index}
          />
        )}
        keyExtractor={(item) => item.id}
        style={{
          width: "100%",
          paddingHorizontal: 10,
          height: 370,
        }}
        ItemSeparatorComponent={<Separator />}
      />
      <StatusBar style="inverted" backgroundColor="#00092d" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#00092d",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: KLN.currentHeight,
  },
  container2: {
    // flex: 1,
    // backgroundColor: "#00092d",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 20,
    width: "100%",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
  },
});
