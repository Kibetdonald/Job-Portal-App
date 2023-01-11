import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons, Entypo, EvilIcons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");
export default function ApplyJob() {
  const route = useRoute();
  const navigation= useNavigation();
  const GoBack=()=>{
    navigation.navigate("Dashboard")
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/banner.jpg")}
        style={styles.banner}
      />
      <View style={styles.header}>
        <Ionicons onPress={GoBack} name="arrow-back" size={28} color="black" />
        <Ionicons name="ios-bookmark-sharp" size={28} color="black" />
      </View>
      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.title}>{route.params.title}</Text>
          <Text style={styles.date}>{route.params.date}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text>{route.params.company}</Text>
          <View style={{ width: 10 }} />
          <Text style={{ color: "grey" }}>•</Text>
          <View style={{ width: 8 }} />
          <Text>{route.params.location}</Text>
        </View>
      </View>
      {/* Priorities */}
      <View style={styles.Priorities}>
        <Pressable style={styles.PriorityBtn}>
          <EvilIcons name="location" size={24} color="white" />
          <View style={{ width: 5 }} />
          <Text style={{ color: "#fff" }}>Location</Text>
        </Pressable>
        <Pressable style={styles.PriorityBtn}>
          <Entypo name="suitcase" size={22} color="white" />
          <View style={{ width: 5 }} />
          <Text style={{ color: "#fff" }}>UX/UI Designer</Text>
        </Pressable>
        <Pressable style={styles.PriorityBtn}>
          <Ionicons name="timer-outline" size={20} color="white" />
          <View style={{ width: 5 }} />
          <Text style={{ color: "#fff" }}>2 Years</Text>
        </Pressable>
      </View>
      {/* Company Overview */}
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          Company Overview
        </Text>
      </View>
      <ScrollView
        horizontal={true}
        style={styles.ScrollView}
        showsHorizontalScrollIndicator={false}
      >
        <Image
          source={require("../../assets/Company1.jpg")}
          style={styles.companyImage}
        />
        <Image
          source={require("../../assets/Company2.jpeg")}
          style={styles.companyImage}
        />
        <Image
          source={require("../../assets/Company3.jpg")}
          style={styles.companyImage}
        />
        <Image
          source={require("../../assets/Company4.jpg")}
          style={styles.companyImage}
        />
      </ScrollView>
      <View style={{ paddingHorizontal: 20, marginTop: 2 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          Job Description
        </Text>
        <Text>{route.params.description}</Text>
        <View style={{ height: 20 }} />
        {/* Requirements */}
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          Position Requirements
        </Text>
        <Text>{route.params.requirements}</Text>
      </View>
      <Pressable style={styles.ApplyJob}>
        <Text style={{ color: "#fff" }}>Apply Job</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: width,
    position: "absolute",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    position: "relative",
    marginTop: 60,
    alignItems: "center",
  },
  bottomSection: {
    marginTop: height / 5.2,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: "500",
  },
  date: {
    color: "grey",
  },

  Priorities: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  PriorityBtn: {
    backgroundColor: "#000044",
    padding: 15,
    height: 50,
    alignItems: "center",
    marginLeft: "5%",
    borderRadius: 5,
    flexDirection: "row",
  },
  ScrollView: {
    marginHorizontal: 10,
    marginTop: 5,
    maxHeight: 160,
  },
  companyImage: {
    height: 150,
    width: 150,
    borderRadius: 10,
    marginLeft: 20,
  },
  ApplyJob: {
    backgroundColor: "#FF725E",
    justifyContent: "center",
    height: 50,
    alignItems: "center",
    marginLeft: "5%",
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 20,
  },
});
