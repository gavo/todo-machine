import React from 'react';


function useLocalStorage(itemName, initialValue){
    let localStorageItem = localStorage.getItem(itemName);
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      localStorageItem = initialValue;
    }
    const [item, setItems] = React.useState(JSON.parse(localStorageItem));
    const saveItem = (newItems) => {
      localStorage.setItem(itemName, JSON.stringify(newItems));
      setItems([...newItems]);
    };
    return [item, saveItem];
  }

  export {useLocalStorage};