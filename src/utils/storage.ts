const storage = window.localStorage;

export const getStorage = (key: string, defaultValue: string): string => {
  try {
    const storedValue = storage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  } catch (e) {
    console.error(e);
    return defaultValue;
  }
};

export const updateStorage = (key: string, value: string): void => {
  storage.setItem(key, JSON.stringify(value));
};
