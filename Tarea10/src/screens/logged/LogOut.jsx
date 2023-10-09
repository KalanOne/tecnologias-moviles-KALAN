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
      navigation.reset({
        index: 0,
        routes: [{ name: "Welcome" }],
      });
    };

    handleLocalLogout();

    return () => {
      // Limpia el efecto si es necesario
    };
  }, []);

  return <></>;
};

export default LogOut;
