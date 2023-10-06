import { createContext, useState } from "react";
import { Appearance } from "react-native";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(Appearance.getColorScheme());
  
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const values = [theme, toggleTheme];
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
