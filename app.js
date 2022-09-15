const Espada = require("./espada.js");
const Herrero = require("./herrero.js"); 

const excalibur = new Espada("Excalibur", true, false, true);
const masamune = new Espada("Masamune", true, false, true);
const pedrito = new Herrero("Pedrito", true, 0, false);
const carlitos = new Herrero("Carlitos", true, 0, false);


console.log(excalibur.declararNombre());

console.log(pedrito.declararNombre());

pedrito.afeitarse(excalibur);
pedrito.crecerBarba();
pedrito.afilar(excalibur);
pedrito.afeitarse(excalibur);

console.log(carlitos.declararEstadoAnimo());
pedrito.contarChiste(carlitos);
console.log(carlitos.declararEstadoAnimo())
carlitos.encantar(masamune);
masamune.desenfundarse();
masamune.lanzarse(pedrito);
masamune.liberar(excalibur);