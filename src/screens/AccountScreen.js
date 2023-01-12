import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BottomTab from "../components/BottomTab";

export default function AccountScreen() {
  return (
    <View style={{ height: "99.5%" }}>
      <View style={styles.container}>
        <Text>Account Screen</Text>
      </View>
      <BottomTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal:20
  },
});
