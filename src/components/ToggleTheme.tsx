import { useEffect, useState } from "react";
import { getStorage, updateStorage } from "src/utils/storage";

function ToggleTheme() {
  const [toggle, setToggle] = useState(false);
  const html = document.documentElement;
  const storedTheme = getStorage("theme", "");

  useEffect(() => {
    const getTheme = () => {
      if (storedTheme !== null) {
        return storedTheme;
      }

      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "";
    };

    const currentTheme = getTheme();

    if (currentTheme === "dark") {
      setToggle(true);
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    updateStorage("theme", currentTheme);
  }, []);

  const handleToggle = () => {
    html.classList.toggle("dark");
    setToggle((toggle) => !toggle);
    updateStorage("theme", toggle ? "" : "dark");
  };

  return (
    <>
      <div
        className={`flex items-center p-0.5 cursor-pointer w-16 h-7 rounded-full ${
          toggle ? "bg-black" : "bg-blue-400"
        }`}
        onClick={handleToggle}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
            toggle ? `translate-x-[calc(100%+0.75rem)]` : ""
          }`}
        ></div>
      </div>
    </>
  );
}

export default ToggleTheme;
