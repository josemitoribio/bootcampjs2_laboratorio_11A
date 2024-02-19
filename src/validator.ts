import {
    pintarMensajeOk,
    pintarMensajeError
} from "./validator.helper";

import * as ibantools from 'ibantools';

const validarIBAN = () => {
    const ibanInput = document.getElementById("ibanInput");
    if (ibanInput !== null 
        && ibanInput !== undefined 
        && ibanInput instanceof HTMLInputElement) {
        const ibanValue = ibanInput.value;
        if (ibanValue) {
            const isValid = ibantools.isValidIBAN(ibanValue);

            if (isValid) {
                pintarMensajeOk(ibanValue);
            } else {
                pintarMensajeError();
            }
        }
    }
};

const botonElement = document.getElementById("botonValidar");
if (botonElement !== null && botonElement !== undefined) {
    botonElement.addEventListener('click', validarIBAN);
}
