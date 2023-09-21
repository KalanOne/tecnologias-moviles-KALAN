import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CheckBox from "./CheckBox";
import { AntDesign } from "@expo/vector-icons";

const Todo = ({
  id,
  name,
  done,
  createdDate,
  updatedDate,
  handleDeleteTodo,
  handleDoneTodo,
  handleEditTodo,
  handleInfoTodo,
}) => {
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
      return (
        <>
          <Text style={styles.corallight}>Created at:</Text>
          <Text style={styles.corallight}>{dateText}</Text>
        </>
      );
    } else {
      return (
        <>
          <Text style={styles.date}>Created at:</Text>
          <Text style={styles.date}>{dateText}</Text>
        </>
      );
    }
  };

  const formatUpdatedDate = (updatedDate) => {
    const now = new Date();
    const taskDate = new Date(updatedDate);
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

    return dateText;
  };

  return (
    <View style={styles.container}>
      <View style={styles.container3}>
        <Text style={[styles.name, done == true ? styles.completed : null]}>
          {name}
        </Text>
        {formatCreatedDate(createdDate)}
      </View>
      <View style={styles.container2}>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity onPress={() => handleInfoTodo(id)}>
            <AntDesign name="eyeo" size={25} color="lightgray" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDeleteTodo(id)}>
            <MaterialCommunityIcons name="delete" size={25} color="lightgray" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleEditTodo(id)}>
            <FontAwesome name="edit" size={25} color="lightgray" />
          </TouchableOpacity>
          <CheckBox isChecked={done} onToggle={() => handleDoneTodo(id)} />
        </View>
        {updatedDate && (
          <>
            <Text style={styles.date}>Updated at:</Text>
            <Text style={styles.date}>{formatUpdatedDate(updatedDate)}</Text>
          </>
        )}
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
    // width: 100,
  },
  container2: {
    alignItems: "flex-end",
    width: "40%",
  },
  container3: {
    alignItems: "flex-start",
    width: "60%",
  },
  completed: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});
