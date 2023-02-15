import { useEffect, useState } from "react";
import { updateStorage } from "@utils/storage";
import { ReactComponent as Moon } from "@icon/dark_mode.svg";
import { ReactComponent as Sun } from "@icon/light_mode.svg";
import { getTheme } from "@utils/theme";

function ToggleTheme() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const theme = getTheme();
    const $html = document.documentElement;

    if (theme === "dark") {
      setToggle(true);
      $html.classList.add("dark");
    } else {
      $html.classList.remove("dark");
    }

    updateStorage("theme", theme);
  }, []);

  const handleToggle = () => {
    document.documentElement.classList.toggle("dark");
    setToggle((toggle) => !toggle);
    updateStorage("theme", toggle ? "" : "dark");
  };

  return (
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
      >
        {toggle ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
      </div>
    </div>
  );
}

export default ToggleTheme;
