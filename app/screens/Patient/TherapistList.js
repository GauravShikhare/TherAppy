import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import Screen from "../../components/Screen";

export default function TherapistList() {
  return (
    <View>
      <Header title="Therapist List" color="#2E8B57" />
      <View>
        <Text>This is a Therapist screen.</Text>
      </View>
    </View>
  );
}
