import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { userToken } from "../App";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import colors from "./config/colors";
import {
  WelcomeScreen,
  LoginScreen,
  SignupScreen,
  TherapistLoginScreen,
} from "./screens/Auth";

import { Homescreen, Journal, Profile, Notifications } from "./screens/Patient";
import MessageScreen from "./screens/MessageScreen";
import TherapistList from "./screens/Patient/TherapistList";
import Header from "./components/Header";

//Stack navigator
const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName={"WelcomeScreen"}
    screenOptions={{
      headerStyle: { backgroundColor: colors.lightGrey },
      headerTintColor: colors.black,
      headerTitleAlign: "center",
      headerShown: false,
    }}
  >
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen
      name="WelcomeScreen"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="TherapistLoginScreen"
      component={TherapistLoginScreen}
    />
    <Stack.Screen name="SignupScreen" component={SignupScreen} />
    <Stack.Screen name="Homescreen" component={Homescreen} />
    <Stack.Screen name="MessageScreen" component={MessageScreen} />
    <Stack.Screen
      name="Journal"
      component={Journal}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const Tab = createMaterialBottomTabNavigator();
const TabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Homescreen"
        component={Homescreen}
        options={{
          tabBarLabel: "Home",
          tabBarColor: colors.navyBlue,
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Journal"
        component={Journal}
        options={{
          headerShown: false,
          tabBarLabel: "Journal",
          tabBarColor: colors.magenta,
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-journal" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Therapist List"
        component={TherapistList}
        options={{
          tabBarLabel: "Therapist List",

          tabBarColor: colors.darkGreen,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarColor: colors.darkred,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const rootStack = createStackNavigator();
export default function Routes() {
  {
    return (
      <NavigationContainer>
        <rootStack.Navigator>
          {userToken !== null ? (
            <rootStack.Screen
              name="HomeScreen"
              component={TabScreen}
              options={{
                headerTintColor: colors.white,
                headerTitleAlign: "center",
                headerStyle: { backgroundColor: colors.peach },
                headerShown: false,
              }}
            />
          ) : (
            <rootStack.Screen
              name="StackNavigator"
              component={StackNavigator}
              options={{
                headerShown: false,
              }}
            />
          )}
        </rootStack.Navigator>
      </NavigationContainer>
    );
  }
}
