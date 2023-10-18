import { createContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  //   [
  //   {
  //     id: 1,
  //     name: "Admin",
  //     username: "admin",
  //     password: "admin",
  //   },
  //   {
  //     id: 2,
  //     name: "Alan",
  //     username: "1",
  //     password: "1",
  //   },
  // ]

  const handleLogin = async (username, password) => {
    const user = users.find((user) => user.username === username);
    const usersLocal = await SecureStore.getItemAsync("users");
    console.log("usersLocal", usersLocal);
    if (user && user.password === password) {
      setUser(user);
      await SecureStore.setItemAsync("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  };

  const handleRegister = async (name, username, password) => {
    const user = users.find((user) => user.username === username);
    if (user) {
      return false;
    } else {
      const maxId = users.reduce(
        (max, user) => (user.id > max ? user.id : max),
        0
      );
      const newUser = {
        id: maxId + 1,
        name,
        username,
        password,
      };
      setUsers([...users, newUser]);
      setUser(newUser);
      await SecureStore.setItemAsync(
        "user",
        JSON.stringify(newUser).toString()
      );
      await SecureStore.setItemAsync(
        "users",
        JSON.stringify([...users, newUser]).toString()
      );
      return true;
    }
  };

  const handleLogout = async () => {
    setUser(null);
    await SecureStore.deleteItemAsync("user");
    return true;
  };

  const isLogged = () => !!user;

  useEffect(() => {
    const loadUser = async () => {
      const userLocal = await SecureStore.getItemAsync("user");
      if (userLocal) {
        setUser(JSON.parse(userLocal));
        console.log("userLocal", userLocal);
      }
    };
    const getUsers = async () => {
      const usersLocal = await SecureStore.getItemAsync("users");
      if (usersLocal) {
        setUsers(JSON.parse(usersLocal));
        console.log("usersLocal", usersLocal);
      }
    };
    loadUser();
    getUsers();
  }, []);

  const handleUpdate = async (id, name, username, password) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      const newUsers = users.map((user) => {
        if (user.id === id) {
          return {
            id,
            name,
            username,
            password: password ? password : user.password,
          };
        } else {
          return user;
        }
      });
      setUsers(newUsers);
      setUser(newUsers.find((user) => user.id === id));
      await SecureStore.setItemAsync("users", JSON.stringify(newUsers));
      await SecureStore.setItemAsync("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  };

  const values = {
    user,
    handleLogin,
    handleRegister,
    handleLogout,
    isLogged,
    handleUpdate,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
