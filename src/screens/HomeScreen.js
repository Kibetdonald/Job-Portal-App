import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { Feather, Ionicons, EvilIcons, Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";
import TabComponent from "../components/TabComponent";

const { width, height } = Dimensions.get("window");
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.WelcomeText}>Welcome John👋</Text>
      <Text style={styles.text1}>Lets find your job</Text>
      <View style={styles.headerWrapper}>
        <Image
          source={require("../../assets/profile.png")}
          style={styles.profile}
        />
        <View style={styles.profileText}>
          <Text style={styles.text2}>John Doe</Text>
          <Text style={styles.text3}>Job Seeker</Text>
        </View>
        <View style={styles.leftHeader}>
          <Feather name="bookmark" size={24} color="black" />
          <Ionicons name="notifications" size={24} color="black" />
        </View>
      </View>
      {/* Search Bar */}
      <View style={styles.InputView}>
        <EvilIcons
          name="search"
          size={24}
          color="black"
          style={{ marginLeft: 10 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Jobs, Company, Skill, City, etc."
        />
        <Pressable style={styles.searchButton}>
          <Text style={{ color: "#fff" }}>Search</Text>
        </Pressable>
      </View>
      {/* Priorities */}
      <View style={styles.Priorities}>
        <Pressable style={styles.PriorityBtn}>
          <EvilIcons name="location" size={24} color="white" />
          <View style={{width: 5}}/>
          <Text style={{ color: "#fff" }}>Location</Text>
        </Pressable>
        <Pressable style={styles.PriorityBtn}>
        <Entypo name="suitcase" size={22} color="white" /> 
        <View style={{width: 5}}/>
          <Text style={{ color: "#fff" }}>
           UX/UI Designer
          </Text>
        </Pressable>
        <Pressable style={styles.PriorityBtn}>
          <Ionicons name="timer-outline" size={20} color="white" />
          <View style={{width: 5}}/>
          <Text style={{ color: "#fff" }}>2 Years</Text>
        </Pressable>
      </View>
      <View style={{ height: 20 }} />
      <View style={styles.Priorities}>
        <Pressable style={styles.PriorityBtn}>
        <AntDesign name="laptop" size={20} color="white" />
        <View style={{width: 5}}/>
          <Text style={{ color: "#fff" }}>Remote</Text>
        </Pressable>
        <Pressable style={styles.PriorityBtn}>
        <MaterialIcons name="security" size={20} color="white" />
        <View style={{width: 5}}/>
          <Text style={{ color: "#fff" }}>Full Time</Text>
        </Pressable>
        <Pressable style={styles.PriorityBtn}>
        <AntDesign name="antdesign" size={20} color="white" />
        <View style={{width: 5}}/>
          <Text style={{ color: "#fff" }}>Design</Text>
        </Pressable>
      </View>
      {/* Tabs */}
      <TabComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  WelcomeText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  text1: {
    textAlign: "center",
    fontSize: 16,
    color: "grey",
    marginTop: 2,
  },
  text2: {
    fontSize: 18,
    marginTop: 2,
  },
  text3: {
    fontSize: 16,
    color: "grey",
    marginTop: 2,
  },
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },

  profileText: {
    marginLeft: 5,
  },
  leftHeader: {
    marginLeft: width / 2.5,
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
  },
  textInput: {
    width: width / 1.2,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
  },
  InputView: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    width: "60%",
  },
  searchButton: {
    backgroundColor: "#FF725E",
    padding: 15,
    width: 80,
    height: 50,
    alignItems: "center",
    marginLeft: "5%",
    borderRadius: 5,
  },
  Priorities: {
    flexDirection: "row",
    justifyContent: "center"
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

});
