import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import ListItem from "./ListItem";

export default function Card({ image, title, subTitle }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subTitle}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mypic.jpeg")}
            title="Gaurav Shikhare"
            subTitle="Emotion:Feeling Happy"
          />
          <ListItem
            image={require("../assets/mypic.jpeg")}
            title="Gaurav Shikhare"
            subTitle="Emotion:Feeling Stressed"
          />
          <ListItem
            image={require("../assets/mypic.jpeg")}
            title="Gaurav Shikhare"
            subTitle="Emotion:Feeling Annoyed"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },

  title: {
    marginBottom: 8,
    color: "#000",
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 50,
  },
});
