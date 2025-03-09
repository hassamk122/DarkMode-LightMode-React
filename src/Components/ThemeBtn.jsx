
import useTheme from "../Contexts/Theme";

function ThemeBtn() {
  const { themeMode, darkTheme, lightTheme } = useTheme();


  function onChangeBtn() {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  }
  
  return (
    <button onClick={onChangeBtn}>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`text-black dark:text-white lucide lucide-sun-moon cursor-pointer`}
            >
                <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.9 4.9 1.4 1.4" />
                <path d="m17.7 17.7 1.4 1.4" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.3 17.7-1.4 1.4" />
                <path d="m19.1 4.9-1.4 1.4" />
            </svg>
    </button>
  );
}

export default ThemeBtn;
