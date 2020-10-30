import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { AppText } from "../components";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";
import Header from "../components/Header";

const initialMessages = [
  {
    id: 1,
    title: "Gaurav Shikhare",
    description: "Mental State:Happy",
    image: require("../assets/mypic.jpeg"),
  },
  {
    id: 2,
    title: "Raju",
    description: "Mental State:Stressed",
    image: require("../assets/mypic.jpeg"),
  },
  {
    id: 3,
    title: "Nishu",
    description: "Mental State:Irritated",
    image: require("../assets/mypic.jpeg"),
  },
  {
    id: 4,
    title: "Pradnyal",
    description: "Mental State:Relaxed",
    image: require("../assets/mypic.jpeg"),
  },
];

export default function MessageScreen() {
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <View>
      <Header title="Therapist Homescreen" color="#4b2c20" />
      <AppText style={{ textAlign: "center" }}>Patient List</AppText>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </View>
  );
}
const styles = StyleSheet.create({});
