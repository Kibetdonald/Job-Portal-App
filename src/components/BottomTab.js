import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import React from "react";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const {height, width} = Dimensions.get("window")
export default function BottomTab() {
  const navigation = useNavigation();
  const HomeScreen = () => {
    navigation.navigate("Dashboard");
  };
  const AppliedJobs = () => {
    navigation.navigate("Applied");
  };
  const InboxScreen = () => {
    navigation.navigate("Inbox");
  };
  const AccountScreen = () => {
    navigation.navigate("Account");
  };
  return (
    <View style={styles.BottomTab}>
      <Pressable onPress={HomeScreen} style={{ alignItems: "center" }}>
        <FontAwesome name="home" size={20} color="#FF725E" />
        <Text style={styles.BottomTabText}>Home</Text>
      </Pressable>
      <Pressable onPress={AppliedJobs} style={{ alignItems: "center" }}>
        <MaterialCommunityIcons
          name="playlist-edit"
          size={24}
          color="#FF725E"
        />
        <Text style={styles.BottomTabText}>Applied</Text>
      </Pressable>
      <Pressable onPress={InboxScreen} style={{ alignItems: "center" }}>
        <Entypo name="chat" size={20} color="#FF725E" />
        <Text style={styles.BottomTabText}>Inbox</Text>
      </Pressable>
      <Pressable onPress={AccountScreen} style={{ alignItems: "center" }}>
        <Entypo name="user" size={20} color="#FF725E" />
        <Text style={styles.BottomTabText}>Account</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  BottomTab: {
    borderTopColor: "#ddd",
    borderTopWidth: 0.5,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    alignItems: "center"
  },
  BottomTabText: {
    color: "grey",
    fontSize: 14,
  },
});
