import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Admin",
      username: "admin",
      password: "admin",
    },
    {
      id: 2,
      name: "Alan",
      username: "1",
      password: "1",
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

  const handleRegister = (name, username, password) => {
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
      return true;
    }
  };

  const handleLogout = () => {
    setUser(null);
    return true;
  };

  const isLogged = () => !!user;

  const handleUpdate = (id, name, username, password) => {
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
