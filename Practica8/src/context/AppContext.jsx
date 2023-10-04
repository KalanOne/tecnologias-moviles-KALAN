import { createContext, useState } from "react";

const person = {
  id: 1,
  name: "Alan",
  lastName: "Garcia",
  age: 20,
  country: "Mexico",
  city: "Morelia",
  school: "ITM",
  isActive: false,
};

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [personState, setPersonState] = useState(person);
  const handleActive = () => {
    setPersonState({ ...personState, isActive: !personState.isActive });
  };
  const values = {
    handleActive,
    person: personState,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
