import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../config/colors";

export default function Header({ title, color }) {
  return (
    <View style={[styles.header, { backgroundColor: color }]}>
      <Text style={styles.textSize}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: hp(10),
    width: wp(100),
    paddingTop: hp(1),
  },
  textSize: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Roboto",
    letterSpacing: 1,
  },
});
