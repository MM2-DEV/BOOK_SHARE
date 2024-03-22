export const setLocalStorage = (item, data) => {
  localStorage.setItem(item, JSON.stringify(data || {}));
};

export const getLocalStorageItem = (item) => {
  const data = JSON.parse(localStorage.getItem(item));
  return data;
};

export const removeLocalStorageItem = (item) => {
  localStorage.removeItem(item);
};
