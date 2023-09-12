import React from "react";
import ResultItem from "./common/ResultItem";
import { ScrollView, StyleSheet, Text } from "react-native";
import { titleColor } from "../theme/constanst";

const data = [
  {
    image:
      "https://diamondfilms.com/img/noticias/615c6c8e33468f3e5221994f1.jpg",
    hash: "#Miniso",
    title: "Miniso",
    ammount: "$15.00",
  },
  {
    image:
      "https://pbs.twimg.com/profile_images/1650303290788249605/PrqfLtwv_400x400.jpg",
    hash: "#Smallest FM",
    title: "Manual FM",
    ammount: "$48.32",
  },
  {
    image:
      "data:image/jpeg;base64,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",
    hash: "#Smallest FM",
    title: "Manual FM",
    ammount: "$48.32",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod/images/jennifer-lawrence-leading-actress-and-producer-at-the-news-photo-1686907579.jpg?crop=0.669xw:1.00xh;0.0651xw,0&resize=1200:*",
    hash: "#Smallest FM",
    title: "Manual FM",
    ammount: "$48.32",
  },
];

const Results = () => {
  return (
    <>
      <Text style={styles.title}>Popular Product</Text>
      <ScrollView
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {/* <ResultItem
          image={
            "https://diamondfilms.com/img/noticias/615c6c8e33468f3e5221994f1.jpg"
          }
          hash={"#Miniso"}
          title={"Miniso"}
          ammount={"$ 15.00"}
        />
        <ResultItem
          image={
            "https://diamondfilms.com/img/noticias/615c6c8e33468f3e5221994f1.jpg"
          }
          hash={"#Smallest FM"}
          title={"Manual FM"}
          ammount={"$ 48.32"}
        /> */}
        {data.map((item, index) => (
          <ResultItem
            image={item.image}
            hash={item.hash}
            title={item.title}
            ammount={item.ammount}
            key={index}
          />
        ))}
      </ScrollView>
    </>
  );
};

export default Results;

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    marginTop: 5,
    paddingHorizontal: 20,
    // marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    color: titleColor,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
});
