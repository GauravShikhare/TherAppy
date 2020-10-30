import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../config/colors";

const AppText = ({ children, style, color, onChangeText }) => {
  return (
    <Text style={[styles.text, style, color]} onChangeText={onChangeText}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.darkGrey,
    ...Platform.select({
      android: {
        fontSize: 20,
        fontFamily: "Roboto",
      },
    }),
  },
});
export default AppText;
