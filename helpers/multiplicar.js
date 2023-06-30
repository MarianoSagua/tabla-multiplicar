const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 1, listar = false, limit = 10) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= limit; i++) {
      consola += `${colors.bold.blue(base)} ${"X".blue} ${colors.bold.blue(i)} ${"=".blue} ${colors.bold.blue(base * i)}\n`;
      salida += `${base} X ${i} = ${base * i}\n`;
    }

    if (listar === true) {
      console.log("=====================".blue);
      console.log("    Tabla del".bold.blue, colors.bold.blue(base));
      console.log("=====================".blue);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo: crearArchivo,
};
