import {
    extraerCodigoSucursal,
    extraerDigitoControl,
    extraerNombreBanco,
    extraerNumeroCuenta
} from "./validator.helper";

const validarIBAN = () => {
    const ibanInput = document.getElementById("ibanInput");
    if (ibanInput !== null && ibanInput !== undefined && ibanInput instanceof HTMLInputElement) {
        const ibanValue = ibanInput.value;
        if (ibanValue) {
            const patronIban = /^(?<codigoPais>[A-Z]{2})(?<digitoControl1>\d{2})(\s|-)?(?<codigoBanco>\d{4})(\s|-)?(?<codigoSucursal>\d{4})(\s|-)?(?<digitoControl>\d{2})(\s|-)?(?<numeroCuenta>\d{10})$/;
            const coincidencia = patronIban.exec(ibanValue);

            if (coincidencia !== null && coincidencia !== undefined) {
                const nombreBanco = extraerNombreBanco(coincidencia.groups);
                const codigoSucursal = extraerCodigoSucursal(coincidencia.groups);
                const digitoControl = extraerDigitoControl(coincidencia.groups);
                const numeroCuenta = extraerNumeroCuenta(coincidencia.groups);

                const mensaje = `Banco: ${nombreBanco}\nCódigo de Sucursal: ${codigoSucursal}\nDigito de control: ${digitoControl}\nNúmero de cuenta: ${numeroCuenta}`;

                const resultadoElement = document.getElementById('resultado');
                if (resultadoElement !== null && resultadoElement !== undefined) {
                    resultadoElement.innerText = mensaje;
                }
            } else {
                const resultadoElement = document.getElementById('resultado');
                if (resultadoElement !== null && resultadoElement !== undefined) {
                    resultadoElement.innerText = `Este IBAN no es válido. Revíselo de nuevo.`;
                }
            }
        }
    }
};

const botonElement = document.getElementById("botonValidar");
if (botonElement !== null && botonElement !== undefined) {
    botonElement.addEventListener('click', validarIBAN);
}
