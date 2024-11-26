import React, { useEffect } from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getEvents } from "../../redux/slices/EventSlice";

const HomeScreen = ({ navigation }) => {
  const events = [
    {
      id: "1",
      title: "BAF Festival Perlengkapan Rumah Tangga",
      date: "2024/11/19",
      image: "https://via.placeholder.com/150", // Ganti dengan URL gambar
    },
    {
      id: "2",
      title: "BAF Festival Motor Baru Yamaha",
      date: "2024/11/18",
      image: "https://via.placeholder.com/150", // Ganti dengan URL gambar
    },
    {
      id: "3",
      title: "BAF Expo Batulicin",
      date: "2024/11/18",
      image: "https://via.placeholder.com/150", // Ganti dengan URL gambar
    },
  ];
  // const dispatch = useDispatch();
  // const { events, loading, error } = useSelector((state) => state.event);

  // useEffect(() => {
  //   dispatch(getEvents());
  // }, [dispatch]);

  const renderEvent = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Detail", { event: item })}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </TouchableOpacity>
  );

  // if (loading) {
  //   return <Text>Loading...</Text>;
  // }

  // if (error) {
  //   return <Text>Error: {error}</Text>;
  // }

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={renderEvent}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
});

export default HomeScreen;
