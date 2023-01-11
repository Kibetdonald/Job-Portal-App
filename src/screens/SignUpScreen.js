import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function SignUpScreen() {
  const navigation = useNavigation();
  const signUpNavigate = () => {
    navigation.navigate("Dashboard");
  };
  const loginNavigate = () => {
    navigation.navigate("Login");
  };
  return (
    <View>
      <View style={styles.topWrapper} />
      <Image
        style={styles.signupImage}
        source={require("../../assets/signup.png")}
      />
      <Text style={styles.started}>Create Account</Text>
      <TextInput style={styles.input} placeholder="Enter username" />
      <TextInput style={styles.input} placeholder="Enter email" />
      <TextInput style={styles.input} placeholder="Enter Password" />
      <Pressable style={styles.btn} onPress={signUpNavigate}>
        <Text>Sign Up</Text>
      </Pressable>

      <Pressable style={styles.btnGoogle} onPress={signUpNavigate}>
        <View style={{ flexDirection: "row" }}>
          {/* <Image
            style={styles.googleImage}
            source={require("../assets/images/google.png")}
          /> */}
          <Text style={styles.googleText}>Sign Up With Google</Text>
        </View>
      </Pressable>
      <View style={styles.alreadyHaveAccount}>
        <Text>Already have an account?</Text>
        <Pressable style={styles.btnQuestion} onPress={loginNavigate}>
          <Text style={{color: "blue"}}>  Sign In</Text>
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

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginLeft: "5%",
    borderRadius: 5,
    borderColor: "grey",
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
  btnGoogle: {
    padding: 15,
    width: "90%",
    borderWidth: 1,
    borderColor: "#FF725E",
    alignItems: "center",
    marginLeft: "5%",
    borderRadius: 5,
    marginTop: 10,
  },
  googleText: {
    fontSize: 16,
    paddingLeft: 5,
  },
  alreadyHaveAccount:{
    flexDirection: "row",
    textAlign: 'center',
    justifyContent: "center",
    marginTop: 30
  },
  btnQuestion:{
    width: "10%"
  }
});
