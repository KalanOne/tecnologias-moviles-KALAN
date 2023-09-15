import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ChatItem from "./common/ChatItem";

const data = [
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg",
    name: "Sarah",
    text: "Hola Alan",
    date: "yesterday",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg",
    name: "Sarah",
    text: "Hola Alan",
    date: "yesterday",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg",
    name: "Sarah",
    text: "Hola Alan",
    date: "yesterday",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg",
    name: "Sarah",
    text: "Hola Alan",
    date: "yesterday",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg",
    name: "Sarah",
    text: "Hola Alan",
    date: "yesterday",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg",
    name: "Sarah",
    text: "Hola Alan",
    date: "yesterday",
  },
];

const Chats = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        {/* <ChatItem
          image={
            "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg"
          }
          name={"Sarah"}
          text={"Hola"}
          date={"12:00am"}
        /> */}
        {data.map((item, index) => {
          return (
            <ChatItem
              image={item.image}
              name={item.name}
              text={item.text}
              date={item.date}
              key={index}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Chats;

const styles = StyleSheet.create({
  container: {
    height: 400,
    // backgroundColor: "purple",
    marginVertical: 10,
  },
  text: {
    color: "black",
    // fontSize: 20,
    fontWeight: "bold",
  },
  pill: {
    width: "30%",
    height: "90%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  pillActive: {
    width: "30%",
    backgroundColor: "white",
    height: "90%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
