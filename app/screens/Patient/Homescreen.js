import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ListItem from "../../components/ListItem";
import Screen from "../../components/Screen";
import Header from "../../components/Header";
import colors from "../../config/colors";

export default function Homescreen() {
  return (
    <View>
      <Header title="Homescreen" color="#0A3D62" />
      <View style={styles.listContainer}>
        <ListItem
          image={require("../../assets/mypic.jpeg")}
          title="Gaurav Shikhare"
          subTitle="Emotion:Feeling Annoyed"
        />

        <ListItem
          image={require("../../assets/raju.jpg")}
          title="Raju"
          subTitle="Emotion:Feeling Happy"
        />
        <ListItem
          image={require("../../assets/mypic.jpeg")}
          title="Gaurav Shikhare"
          subTitle="Emotion:Feeling Stressed"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    marginVertical: 10,
  },
});
