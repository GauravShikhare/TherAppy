import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

export default function AppPicker({ icon, items, placeholder }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.inputTextContainer}>
          {icon && (
            <MaterialIcons
              name={icon}
              size={30}
              color={colors.primary}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            color={colors.primary}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItem label={item.label} onPress={() => console.log(item)} />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  inputTextContainer: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 5,
  },
  icon: {
    marginRight: 5,
  },
  textInput: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: colors.darkGrey,
  },
  text: {
    flex: 1,
  },
});
