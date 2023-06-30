const argv = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        describe: "Es la base de la tabla de multiplicar",
        demandOption: true
    })
    .option("l", {
        alias: "listar",
        type: "boolean",
        describe: "Muestra la tabla en consola",
        default: false
    })
    .option("h", {
        alias: "hasta",
        type: "number",
        describe: "El limite de hasta que numero se quiere multiplicar",
        default: 10
    })
    .check((argv, options) => {
        if(isNaN(argv.b)){
            throw "La base tiene que ser un numero!"
        }else{
            return true;
        }
    })
    .check((argv, options) => {
        if(isNaN(argv.h)){
            throw "El limite tiene que ser un numero!"
        }else{
            return true;
        }
    })
    .argv;


module.exports = argv;