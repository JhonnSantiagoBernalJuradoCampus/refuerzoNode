//app.js
import dotenv from "dotenv";
/**
 * ? Cargamos el archivo .env
 * Todo: Por defecto la ruta se encuentra en la raiz del proyecto
 */
dotenv.config();
/**
 * ? Mostramos los datos guardados en el .env
 */
console.log(process.env.NOMBRE);