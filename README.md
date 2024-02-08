# Laboratorio 11A - Expresiones regulares

Vamos a leer IBAN de cuentas de bancos españoles, ver que estar bien formado, validarlo y extraer información del mismo.

Un IBAN en España tiene el siguiente formato:

WW 0000 0000 00 0000000000

WW: código de país 00: dígito de control 0000: código de banco 0000: código de sucursal 00: dígito de control 0000000000: número de cuenta

Queremos poder leer IBAN con espacios, sin espacios o  guiones.

Valida que un IBAN este bien formado.

Después valida que sea correcto, para ello puedes usar esta librería

https://github.com/Simplify/ibantools

Después extrae el código de sucursal:

Muestra:

- El banco al que pertenece, para ello:
- La oficina.
- El digito de control.
- La cuenta.

Para sacar el nombre del banco extrae el código de banco y compara con una tabla de bancos españoles.
