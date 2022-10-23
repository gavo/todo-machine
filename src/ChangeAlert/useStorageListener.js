import React from "react";

function useStorageListener(sincronize) {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            console.log('Hubo Cambios en TODOS_V1');
            setStorageChange(true);
        }
    });

    const toogleShow = () => {
        sincronize();
        setStorageChange(!storageChange);
    }

    return {
        show: storageChange,
        toogleShow,
    }

}

export { useStorageListener };
