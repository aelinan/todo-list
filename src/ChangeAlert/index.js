import React from "react";
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css'

function ChangeAlert({ sincronize }) {
    const { show, toggleShow } = useStorageListener(sincronize);
    if(show) {
        return (
            <div className="container">
                <p>Hubo cambios</p>
                <button 
                    onClick={toggleShow}
                >
                    Refrescar
                </button>
            </div>
        );
    } else {
        return null;
    }
}

export { ChangeAlert }