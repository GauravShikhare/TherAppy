import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

export default function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.pickerText}>{label}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  pickerText: {
    padding: 20,
    borderStyle: "dashed",
  },
});
