import { View, StyleSheet } from "react-native";
import React from "react";
import Recommendation from "./Recommendation";
import RecentlyViewed from "./RecentlyViewed";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

export default function TabComponent() {
  return (
    <View style={styles.TabComponent}>
      <Tab.Navigator
        initialRouteName="tabComponent"
        // screenOptions={{
        //   tabBarActiveTintColor: "#fff",
        //   tabBarLabelStyle: { fontSize: 12, color: "#000", borderWidth: 0 },
        //   tabBarStyle: { backgroundColor: "transparent", borderWidth: 0 },
        // }}
      >
        <Tab.Screen
          name="Recommendation"
          component={Recommendation}
          options={{ tabBarLabel: "Recommendation" }}
        />
        <Tab.Screen
          name="RecentlyViewed"
          component={RecentlyViewed}
          options={{ tabBarLabel: "Recently Viewed" }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  TabComponent: {
    marginTop: 10,
    height: 500,
  },
});
