import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import BottomTab from "../components/BottomTab";
import { Feather } from "@expo/vector-icons";
import data from "../data/AppliedJobs.json";

const { width, height } = Dimensions.get("window");
export default function AppliedJobs() {
  const Item = ({
    title,
    company,
    logo,
    status,
    location,
    date,
    requirements,
  }) => (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.JobTitle}>{title}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={{ uri: logo }} style={styles.CompanyLogo} />
        <Text>{company}</Text>
        <Text style={{ color: "grey", marginLeft: 5 }}>•</Text>
        <Text style={{ color: "grey", marginLeft: 5 }}>{location}</Text>
      </View>
      <Text style={{ color: "grey", marginLeft: 5, marginTop: 10 }}>
        Applied on {date}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 5,
          alignItems: "center",
        }}
      >
        <Pressable>
          <Text style={{ textDecorationLine: "underline" }}>See Details</Text>
        </Pressable>
        <Pressable
          style={[
            styles.StatusButton,
            {
              backgroundColor: status === "Declined" ? "red" : "orange",
            },
          ]}
        >
            
           
          <Text>{status}</Text>
        </Pressable>
      </View>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      company={item.company}
      logo={item.logo}
      status={item.status}
      location={item.location}
      date={item.date}
      requirements={item.requirements}
    />
  );
  return (
    <View style={{ height: "99.5%" }}>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.Title}>Applied Jobs</Text>
          <Feather name="filter" size={24} color="black" />
        </View>
        {/*FlatList here */}
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <BottomTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: width / 3,
  },
  Title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  JobTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  CompanyLogo: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  StatusButton: {
    padding: 8,
    // borderWidth: 0.4,
    borderColor: "grey",
    borderRadius: 4,
  },
});
