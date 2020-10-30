import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppText } from "../../components";
import AppPicker from "../../components/AppPicker";
import Header from "../../components/Header";
import Screen from "../../components/Screen";
import colors from "../../config/colors";

import * as Animatable from "react-native-animatable";

const EmotionalState = [
  { label: "Happiness", value: 1 },
  { label: "Caring", value: 2 },
  { label: "Depression", value: 3 },
  { label: "Inadequate", value: 4 },
  { label: "Fear", value: 5 },
  { label: "Confusion", value: 6 },
  { label: "Hurt", value: 7 },
  { label: "Anger", value: 8 },
  { label: "Loneliness", value: 9 },
  { label: "Remorse", value: 10 },
];
const Intensity = [
  { label: "High", value: 1 },
  { label: "Medium", value: 2 },
  { label: "Low", value: 3 },
];

export default function Journal() {
  return (
    <View animation="tada">
      <Header title="My Journal" color="#6D214F" />
      <AppText style={{ textAlign: "center" }}>
        What emotion are you feeling right now?
      </AppText>

      <AppPicker
        items={EmotionalState}
        icon="question-answer"
        placeholder="Emotional State"
      ></AppPicker>
      <AppText style={{ textAlign: "center" }}>
        Please specify the intensity of your emotion.
      </AppText>
      <AppPicker
        items={Intensity}
        icon="graphic-eq"
        placeholder="Intensity"
      ></AppPicker>
      <View></View>

      <AppText></AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});
