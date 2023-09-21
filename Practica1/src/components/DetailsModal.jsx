import React, { useState } from "react";
import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import CustomButton from "./CustomButton";

const DetailsModal = ({ todo, handleCloseModal, modalVisible }) => {
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
        statusBarTranslucent={true}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Informacion detallada de la tarea
            </Text>
            <View style={styles.infoContainer}>
              <View style={styles.infoItem}>
                <Text style={styles.infoText}>ID</Text>
                <Text style={styles.infoTextDetail}>{todo.id}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoText}>Nombre de la tarea</Text>
                <Text style={styles.infoTextDetail}>{todo.name}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoText}>Fecha de creacion</Text>
                <Text style={styles.infoTextDetail}>{todo.createdDate}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoText}>Fecha de actualizacion</Text>
                <Text style={styles.infoTextDetail}>
                  {todo.updatedDate
                    ? todo.updatedDate
                    : "No se ha actuallizado"}
                </Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoText}>Estado de la tarea</Text>
                <Text style={styles.infoTextDetail}>
                  {todo.done ? "Completado" : "Pendiente"}
                </Text>
              </View>
            </View>
            <CustomButton
              light={true}
              onPress={handleCloseModal}
              text="Cerrar"
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default DetailsModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "#5687ff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  infoContainer: {
    width: "100%",
    marginBottom: 10,
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  infoText: {
    color: "#fff",
    fontSize: 15,
    width: "45%",
    // backgroundColor: "#000",
  },
  infoTextDetail: {
    color: "#fff",
    fontSize: 15,
    width: "45%",
    // backgroundColor: "#000",
    textAlign: "right",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
