import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import colors from "../config/colors";

function AppButton(props) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[props.color] }]}
      onPress={() => {
        props.onPress();
      }}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: wp("90%"),
    marginLeft: 16,
    marginVertical: 15,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    alignContent: "center",
  },
});

export default AppButton;
