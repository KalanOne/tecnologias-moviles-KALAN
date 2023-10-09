import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    name: "Admin",
    username: "admin",
    password: "admin",
  });
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Admin",
      username: "admin",
      password: "admin",
    },
  ]);

  const handleLogin = (username, password) => {
    const user = users.find((user) => user.username === username);
    if (user && user.password === password) {
      setUser(user);
      return true;
    } else {
      return false;
    }
  };

  const handleRegister = (username, password, name) => {
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
      return true;
    }
  };

  const handleLogout = () => {
    setUser(null);
    return true;
  };

  const isLogged = () => !!user;

  const values = { user, handleLogin, handleRegister, handleLogout, isLogged };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
