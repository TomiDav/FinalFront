import { Children, createContext, useState } from "react";
import App from "../../App";

export const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState('white');

  function toggleTheme(){
    theme == 'white' ? setTheme('dark') : setTheme('white');
  }

  const exposedValue = {
    theme : theme,
    toggle : toggleTheme
  }
  return (
    <ThemeContext.Provider value={exposedValue}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
