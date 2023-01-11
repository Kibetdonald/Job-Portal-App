import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Feather, EvilIcons } from "@expo/vector-icons";

export default function LoginScreen() {
  const navigation = useNavigation();
  const signUpNavigate = () => {
    navigation.navigate("SignUp");
  };
  const dashboardNavigate = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View>
      <View style={styles.topWrapper} />
      <Image
        style={styles.signupImage}
        source={require("../../assets/signin.png")}
      />
      <View style={{ height: "2%" }} />
      <Text style={styles.started}>Login</Text>
      {/* Enter email */}
      <View style={styles.InputView}>
        <EvilIcons
          name="user"
          size={28}
          color="black"
          style={{ marginLeft: 10 }}
        />
        <TextInput style={styles.input} placeholder="Enter email" />
      </View>
      {/* Enter password */}
      <View style={styles.InputView}>
        <Feather
          name="lock"
          size={20}
          color="black"
          style={{ marginLeft: 10 }}
        />
        <TextInput style={styles.input} placeholder="Enter password" />
        <Feather
          name="eye-off"
          size={20}
          color="black"
          style={{ marginLeft: 10 }}
        />
      </View>

      <View style={{ height: "2%" }} />
      <Pressable style={styles.btn} onPress={dashboardNavigate}>
        <Text style={styles.loginText}>Login</Text>
      </Pressable>
      <View style={styles.alreadyHaveAccount}>
        <Text>Don't have an account?</Text>
        <Pressable style={styles.btnQuestion} onPress={signUpNavigate}>
          <Text style={{ color: "blue" }}> Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topWrapper: {
    height: 40,
    width: "100%",
    backgroundColor: "#FF725E",
  },
  started: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    textAlign: "center",
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
    width: "76%",
  },
  signupImage: {
    width: 250,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "25%",
    marginTop: "10%",
  },
  googleImage: {
    width: 20,
    height: 20,
  },
  btn: {
    backgroundColor: "#FF725E",
    padding: 15,
    width: "90%",
    alignItems: "center",
    marginLeft: "5%",
    borderRadius: 5,
  },
  alreadyHaveAccount: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  btnQuestion: {
    width: "15%",
  },
  loginText:{
    color: '#fff',
    fontSize: 16
  }
});
