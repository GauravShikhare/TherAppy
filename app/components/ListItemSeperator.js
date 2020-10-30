import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";

export default function ListItemSeperator() {
  return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 1,
    backgroundColor: colors.lightGrey,
  },
});
