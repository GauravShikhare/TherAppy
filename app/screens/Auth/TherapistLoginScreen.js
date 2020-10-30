import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/AppTextInput";
import * as Animatable from "react-native-animatable";
export default function TherapistLoginScreen({ navigation }) {
  return (
    <Animatable.View
      animation="fadeInUpBig"
      duration={500}
      style={{ flex: 1, backgroundColor: "white" }}
    >
      <View style={styles.therapistContainer}>
        <FontAwesome
          style={{ marginBottom: 10 }}
          name="user-md"
          size={150}
          color="rgb(240, 91, 50)"
        />
        <View>
          <AppTextInput placeholder="Username" icon="email"></AppTextInput>
        </View>
        <View>
          <AppTextInput
            placeholder="Password"
            secureTextEntry={true}
            icon="key"
          ></AppTextInput>
        </View>

        <AppButton
          title="Login"
          color="primary"
          onPress={() => {
            navigation.navigate("MessageScreen");
          }}
        />

        <AppButton
          title="Create New Account"
          color="secondary"
          onPress={() => {
            navigation.navigate("SignupScreen");
          }}
        />
        <View>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  therapistContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  therapistIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  forgotText: {
    fontSize: 17,
    fontStyle: "italic",
    fontWeight: "600",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
