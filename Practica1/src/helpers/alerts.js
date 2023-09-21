import { Alert } from "react-native";

export const handleShowerror = (error) => {
  Alert.alert("Error", error, [
    {
      text: "Aceptar",
      style: "ok",
    },
  ]);
};
