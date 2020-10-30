import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function ListItem(props) {
  return (
    <Swipeable renderRightActions={props.renderRightActions}>
      <TouchableHighlight
        underlayColor={colors.lightGrey}
        onPress={props.onPress}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={props.image} />
          <View>
            <AppText style={styles.title}>{props.title}</AppText>
            <AppText style={styles.subTitle}>{props.subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});
