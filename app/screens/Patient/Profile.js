import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "../../components/Screen";
import Header from "../../components/Header";
import { AppButton } from "../../components";
import colors from "../../config/colors";
import { useNavigation } from "@react-navigation/native";

export default function Profile({ navigation }) {
  useNavigation();
  return (
    <View style={styles.profileContainer}>
      <Header title="Profile" color="#AE1438" />
      <View>
        <Text>This is profile screen</Text>
      </View>
      <View style={styles.profileButtons}>
        <AppButton title="Settings" color="primary" />
        <AppButton title="Appointments" color="steel" />
        <AppButton
          title="Logout"
          color="charcoal"
          onPress={() => navigation.navigate("LoginScreen")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
  },
});
