import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { UseAuth } from "../../hooks/UseAuth";

const LogOut = () => {
  const { handleLogout } = UseAuth();
  const navigation = useNavigation();

  useEffect(() => {
    // Esta función se ejecutará después de que el componente se haya renderizado
    // y solo si user ha cambiado
    const handleLocalLogout = () => {
      handleLogout();
      navigation.navigate("Welcome");
    };
    handleLocalLogout();
  }, []);

  return <></>;
};

export default LogOut;
