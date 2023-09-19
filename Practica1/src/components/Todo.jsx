import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CheckBox from "./CheckBox";

const Todo = ({
  id,
  name,
  done,
  createdDate,
  handleDeleteTodo,
  handleDoneTodo,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = (value) => {
    setIsChecked(value);
  };

  const formatCreatedDate = (createdDate) => {
    const now = new Date();
    const taskDate = new Date(createdDate);
    const diffInDays = Math.floor(
      (now - taskDate) / (1000 * 60 * 60 * 24) // Diferencia en días
    );

    let dateText = "";

    if (diffInDays === 0) {
      dateText = `Today, ${taskDate.toLocaleTimeString()}`;
    } else if (diffInDays === 1) {
      dateText = `Yesterday, ${taskDate.toLocaleTimeString()}`;
    } else {
      dateText = `${taskDate.toLocaleDateString()}, ${taskDate.toLocaleTimeString()}`;
    }

    // Si ha pasado más de 5 días, cambia el color a "corallight"
    if (diffInDays > 5) {
      return <Text style={styles.corallight}>{dateText}</Text>;
    } else {
      return <Text style={styles.date}>{dateText}</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{name}</Text>
        {formatCreatedDate(createdDate)}
      </View>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity onPress={() => handleDeleteTodo(id)}>
          <MaterialCommunityIcons name="delete" size={25} color="lightgray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="edit" size={25} color="lightgray" />
        </TouchableOpacity>
        <CheckBox isChecked={done} onToggle={() => handleDoneTodo(id)} />
      </View>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    minHeight: 80,
  },
  name: {
    fontSize: 20,
    letterSpacing: 1.3,
  },
  corallight: {
    fontSize: 12,
    color: "coral", // Cambia el color a "corallight"
  },
  date: {
    fontSize: 12,
    color: "gray",
  },
  buttoncontainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
