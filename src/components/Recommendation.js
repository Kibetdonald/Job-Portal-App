import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import JobRecommendations from "../data/JobsRecommended.json";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
export default function Recommendation() {
  const navigation = useNavigation();

  const Item = ({
    title,
    company,
    logo,
    description,
    location,
    date,
    requirements,
  }) => (
    <View style={styles.Recommendation}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Feather name="bookmark" size={24} color="black" />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: width / 2.2,
        }}
      >
        <Image source={{ uri: logo }} style={styles.logo} />
        <Text>{company}</Text>
        <Text>{location}</Text>
      </View>
      <Text>Description</Text>
      <Text>{description}</Text>
      <View style={styles.RecommendationFooter}>
        <Text>{date}</Text>
        <Pressable
          style={styles.ApplyBtn}
          onPress={() => {
            navigation.navigate("Apply", {
              logo,
              title,
              date,
              company,
              location,
              description,
              requirements,
            });
          }}
        >
          <Text style={{ color: "#fff" }}>Apply</Text>
        </Pressable>
      </View>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      company={item.company}
      logo={item.logo}
      description={item.description}
      location={item.location}
      date={item.date}
      requirements={item.requirements}
    />
  );
  return (
    <FlatList
      data={JobRecommendations}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
  },
  Recommendation: {
    padding: 10,
  },
  ApplyBtn: {
    backgroundColor: "#FF725E",
    padding: 10,
    width: 60,
    alignItems: "center",
    marginLeft: "5%",
    borderRadius: 5,
  },
  RecommendationFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
