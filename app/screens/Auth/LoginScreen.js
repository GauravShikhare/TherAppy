import React, { Component, useContext, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import AppButton from "../../components/AppButton";
import colors from "../../config/colors";

import AppTextInput from "../../components/AppTextInput";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Animatable from "react-native-animatable";
import { AuthContext } from "../../components/context";

export default function LoginScreen({ navigation }) {
  //Using Context here
  const { Login } = useContext(AuthContext);
  const [data, setData] = useState({
    username: "",
    password: "",
    isValidUser: true,
    isValidPassword: true,
    checkTextInputChange: false,
    secureTextEntry: true,
  });
  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        checkTextInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        checkTextInputChange: false,
        isValidUser: false,
      });
    }
  };
  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };
  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };
  return (
    <Animatable.View
      animation="fadeInUpBig"
      duration={500}
      style={{ flex: 3, backgroundColor: "white" }}
    >
      <View style={styles.loginContainer}>
        <View style={styles.loginLogoContainer}>
          <FontAwesome
            style={{ marginBottom: 10 }}
            name="user"
            size={150}
            color="#192A56"
          />
        </View>
        <View>
          <AppTextInput
            placeholder="Username"
            icon="email"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          ></AppTextInput>
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMessage}>
              Username must be 4 characters long!
            </Text>
          </Animatable.View>
        )}
        <View>
          <AppTextInput
            placeholder="Password"
            secureTextEntry={true}
            icon="lock"
            onChangeText={(val) => handlePasswordChange(val)}
          ></AppTextInput>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMessage}>
              Password must be 8 characters long!
            </Text>
          </Animatable.View>
        )}

        <AppButton
          title="Login"
          color="primary"
          onPress={() => {
            Login();
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
  errorMessage: {
    color: "#FF0000",
    fontSize: 14,
  },
  loginContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  loginLogoContainer: {
    marginLeft: 15,
  },
  forgotText: {
    fontSize: 17,
    fontStyle: "italic",
    fontWeight: "600",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
