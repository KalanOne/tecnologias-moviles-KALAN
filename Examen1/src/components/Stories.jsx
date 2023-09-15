import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import StoriesItem from "./common/StoriesItem";

const data = [
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg",
    name: "Sarah",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg",
    name: "Isabelle",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg",
    name: "Esther",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg",
    name: "Sarah",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg",
    name: "Isabelle",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg",
    name: "Esther",
  },
];

const Stories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}
    >
      {/* <StoriesItem
        image={
          "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg"
        }
        name={"Sarah"}
      /> */}
      {data.map(() => {
        return (
          <StoriesItem
            image={
              "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg"
            }
            name={"Sarah"}
          />
        );
      })}
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({
  scroll: {
    width: "100%",
    // paddingHorizontal: 20,
    minHeight: "10%",
    flexGrow: 0,
    // backgroundColor: "red",
    marginTop: 10,
  },
  stories: {
    color: "lightgray",
  },
});
