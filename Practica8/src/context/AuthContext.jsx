import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const handleLogin = async (username, password) => {
    if (username === "admin" && password === "admin") {
      setUser({
        username,
        password,
      });
      await AsyncStorage.setItem(
        "user",
        JSON.stringify({ username, password })
      );
      return true;
    }
    return false;
  };

  const handleLogout = async () => {
    setUser("");
    await AsyncStorage.removeItem("user");
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const userValue = await AsyncStorage.getItem("user");
        if (userValue) {
          setUser(JSON.parse(userValue));
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
