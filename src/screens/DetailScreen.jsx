import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailScreen = ({ route }) => {
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.date}>{event.date}</Text>
      <Text style={styles.description}>Event details go here...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  date: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#333",
  },
});

export default DetailScreen;
