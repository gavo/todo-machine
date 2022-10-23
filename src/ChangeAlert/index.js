import React from "react";
import { useStorageListener } from "./useStorageListener";

function ChangeAlert({ sincronize }) {
    const { show, toogleShow } = useStorageListener(sincronize);

    if (show) {
        return (
            <div className="ModalBackground">
                <div className="TodoConfirmation-container">
                    <p className="TodoConfirmation-message">Hubo Cambios desde otra pestaña o ventana para la lista de tareas programada</p>
                    <button className="TodoConfirmation-button TodoConfirmation-accept"
                        onClick={() => toogleShow()}
                    >
                        Recargar
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export { ChangeAlert };