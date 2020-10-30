import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import AppButton from "../../components/AppButton";
import { AntDesign } from "@expo/vector-icons";
import AppTextInput from "../../components/AppTextInput";
import colors from "../../config/colors";

export default function SignupScreen({ navigation }) {
  return (
    <View style={styles.signupContainer}>
      <View style={styles.signupLogoContainer}>
        <AntDesign name="adduser" size={150} color={colors.darkBlue} />
      </View>
      <View>
        <AppTextInput placeholder="Username/Email" icon="email"></AppTextInput>

        <AppTextInput
          placeholder="Password"
          secureTextEntry={true}
          icon="lock"
        ></AppTextInput>

        <AppTextInput
          placeholder="Medical Details"
          icon="account-card-details-outline"
        ></AppTextInput>
      </View>

      <AppButton
        title="Sign Up"
        color="red"
        onPress={() => {
          navigation.navigate("LoginScreen");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  signupInput: {
    width: "100%",
    backgroundColor: "rgba(211,211,211,0.5)",
    padding: 10,
    marginBottom: 10,
    borderRadius: 25,
    marginRight: 4,
  },
  signupContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  logoPosition: {
    flexDirection: "row",
  },
  signupLogoContainer: {
    marginLeft: 15,
    marginBottom: 10,
  },
});
