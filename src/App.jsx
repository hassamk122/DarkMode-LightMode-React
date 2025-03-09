import { useEffect, useState } from "react";
import { ThemeProvider } from "./Contexts/Theme";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

function App() {
  
  const [themeMode, setThemeMode] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen flex-col gap-2 bg-white dark:bg-gray-700">
        <div className="flex items-center justify-center p-2 ">
          <ThemeBtn />
        </div>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
