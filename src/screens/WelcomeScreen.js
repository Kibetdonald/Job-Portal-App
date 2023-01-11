import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native"

const { width, height } = Dimensions.get("window");
export default function WelcomeScreen() {
    const navigation= useNavigation();
    const getStarted=()=>{
        navigation.navigate("Login")
    }

  return (
    <View style={styles.container}>
      <View style={styles.topWrapper} />
      <Image
        source={require("../../assets/welcome.png")}
        style={styles.banner}
      />
      <Text style={styles.text1}>Find your dream job</Text>
      <Text style={styles.text2}>
        Job portal will aid you search and help you to land into your dream job.
      </Text>
      <Pressable style={styles.button} onPress={getStarted}>
        <Text style={styles.text3}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  topWrapper: {
    height: 40,
    width: "100%",
    backgroundColor: "#FF725E",
  },
  banner: {
    width: width,
    height: height / 2,
    marginTop:30,
  },
  text1: {
    fontSize: 26,
    fontWeight: "bold",
  },
  text2: {
    paddingHorizontal: 50,
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
    color: "grey"
  },
  text3: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
  },
  button: {
    backgroundColor: "#FF725E",
    padding: 15,
    width: "80%",
    alignItems: "center",
    marginLeft: "5%",
    borderRadius: 5,
    marginTop: 30
  },
});
