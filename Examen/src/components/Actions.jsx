import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <View style={[styles.shadow, styles.shadowRight]}>
          <Image
            source={{
              uri: "https://vanlifewanderer.com/wp-content/uploads/2023/06/mackenzie_foy_interstellar.jpg",
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.accion}>Send</Text>
      </View>
      <View style={styles.connection}>
        <View style={styles.connect}></View>
        <View style={styles.connect}></View>
      </View>
      <View>
        <View style={[styles.shadow, styles.shadowCenter]}>
          <Image
            source={{
              uri: "https://es.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/71/74/63/19147588.jpg",
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.accion}>Receive</Text>
      </View>
      <View style={styles.connection}>
        <View style={styles.connect}></View>
        <View style={styles.connect}></View>
      </View>
      <View>
        <View style={[styles.shadow, styles.shadowLeft]}>
          <Image
            source={{
              uri: "https://images.fanpop.com/images/image_uploads/The-Quiet-camilla-belle-681121_592_336.jpg",
            }}
            style={styles.image}
          />
        </View>
        <Text style={styles.accion}>Add</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  connection: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c203f",
    marginBottom: 30,
    gap: 15,
    borderRadius: 50,
  },
  connect: {
    width: 10,
    height: 20,
    // marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00092d",
    borderRadius: 50,
  },
  shadow: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1c203f",
    borderRadius: 50,
  },
  // shadowCenter: {
  //   borderRadius: 40,
  // },
  // shadowRight: {
  //   borderBottomStartRadius: 50,
  //   borderTopStartRadius: 50,
  //   borderTopEndRadius: 40,
  //   borderBottomEndRadius: 40,
  // },
  // shadowLeft: {
  //   borderBottomStartRadius: 40,
  //   borderTopStartRadius: 40,
  //   borderTopEndRadius: 50,
  //   borderBottomEndRadius: 50,
  // },
  accion: {
    color: "lightgray",
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: "cover",
    borderRadius: 50,
  },
});
