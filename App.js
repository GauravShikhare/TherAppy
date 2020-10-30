import React, { useEffect, useState, useMemo } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
  Platform,
  Button,
  StatusBar,
} from "react-native";

import Routes from "./app/Routes";
import context from "./app/components/context";

import colors from "./app/config/colors";
import { Swing } from "react-native-animated-spinkit";
import AuthContext from "./app/components/context";
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const authContext = useMemo(() => ({
    Login: () => {
      setUserToken("abcd");
      setIsLoading(false);
    },
    Logout: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    SignUp: () => {
      setUserToken("abcd");
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Swing size={50} color={colors.navyBlue} />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <Routes />
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});
