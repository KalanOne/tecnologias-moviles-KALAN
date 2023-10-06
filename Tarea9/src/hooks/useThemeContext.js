import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const usetheme = () => useContext(ThemeContext);

export { usetheme };
