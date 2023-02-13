import { getStorage } from "@utils/storage";

export const getTheme = () => {
  const storedTheme = getStorage("theme", "");

  if (storedTheme !== null) {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "";
};
