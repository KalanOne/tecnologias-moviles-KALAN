import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import CustomPerson from "./src/components/Common/CustomPerson";
import CustomSeparator from "./src/components/Common/CustomSeparator";

export default function App() {
  const DATA = [
    {
      id: "1",
      name: "Sarah Catherine",
      lastName: "Hook",
      image:
        "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg",
      movies: [
        "La primera muerte (2022)",
        "El conjuro 3: el diablo me obligó a hacerlo (2021)",
      ],
    },
    {
      id: "2",
      name: "Isabelle",
      lastName: "Furhman",
      image:
        "https://es.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/71/74/63/19147588.jpg",
      movies: [
        "La huérfana (2009)",
        "La Huérfana: el origen (2022)",
        "Después de la Tierra (2013)",
      ],
    },
    {
      id: "3",
      name: "Camilla",
      lastName: "Belle",
      image:
        "https://images.fanpop.com/images/image_uploads/The-Quiet-camilla-belle-681121_592_336.jpg",
      movies: [
        "Un alma en silencio (2005)",
        "Héroes (2022)",
        "El mundo perdido: Jurassic Park (1997)",
      ],
    },
  ];

  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <FlatList
        data={DATA}
        renderItem={({ item: { name, lastName, image, movies }, index }) => (
          // <View
          //   style={{
          //     backgroundColor: index % 2 === 0 ? '#fff' : 'blue',
          //     width: Dimensions.get('window').width,
          //     height: 100,
          //     justifyContent: 'center',
          //     alignItems: 'center'
          //   }}
          // >
          //   <Text>{item.title}</Text>
          //   <TextInput
          //     style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          //     // onChangeText={text => onChangeText(text)}
          //     value={item.title}
          //   />
          // </View>
          <CustomPerson
            name={name}
            lastName={lastName}
            image={image}
            movies={movies}
            index={index}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={<CustomSeparator />}
      />
      {/* <StatusBar style="auto" /> */}
      <StatusBar
        translucent
        backgroundColor="#BC91FF"
        barStyle="dark-content"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
});
