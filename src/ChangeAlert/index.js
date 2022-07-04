import React from "react";
import { withStorageListener } from './withStorageListener';
import './ChangeAlert.css'

function ChangeAlert({ show, toggleShow }) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlert, ChangeAlertWithStorageListener }