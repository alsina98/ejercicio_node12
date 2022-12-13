import * as Controller from './controller.js';
import chalk from 'chalk';

const suma = Controller.suma(4, 5)
const multiplicacion = Controller.multiplicacion(1, 2);

const log = console.log;

log(suma);
log(chalk.green(multiplicacion));


// Este proyecto debe tener las librerias:
// - npm i chalk
