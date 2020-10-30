import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground, Button } from "react-native";

import { AppButton } from "../../components";
import * as Animatable from "react-native-animatable";
function WelcomeScreen({ navigation }) {
  useNavigation();
  return (
    <Animatable.View animation="fadeInUp" style={{ flex: 1 }}>
      <ImageBackground
        style={styles.welcomeScreenBackground}
        source={require("../../assets/Appy.png")}
      >
        <View style={styles.buttonContainer}>
          <AppButton
            title="Client Login"
            color="primary"
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title="Therapist Login"
            color="secondary"
            onPress={() => {
              navigation.navigate("TherapistLoginScreen");
            }}
          />
        </View>
      </ImageBackground>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  welcomeScreenBackground: {
    flex: 1,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    backgroundColor: "#fff",
  },
  buttonContainer: {
    marginLeft: 7,
    backgroundColor: "#fff",
  },
});
export default WelcomeScreen;
