import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.inputTextContainer}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={colors.primary}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.inputText} {...otherProps}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  inputTextContainer: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: wp("90%"),
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    margin: 5,
  },
  textInput: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: colors.darkGrey,
  },
});
