import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const CustomDate = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      setCurrentDate(date);
      setCurrentTime(time);
    }, 1000); // Actualiza cada segundo

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fecha actual: {currentDate}</Text>
      <Text style={styles.text}>Hora actual: {currentTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});

export default CustomDate;
