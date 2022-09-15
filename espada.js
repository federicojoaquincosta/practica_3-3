class Espada {
    #nombre = "nombre por defecto";
    #tieneFilo = true;
    #esMagica = false;
    #estaEnfundada = true;

    constructor(nombre, esFilosa, esMagica, estaEnfundada){
        this.#nombre = nombre;
        this.#tieneFilo = esFilosa;
        this.#esMagica = esMagica;
        this.#estaEnfundada = estaEnfundada;
    }



    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }

    setFilo(booleano){
        this.#tieneFilo = booleano;
    }

    getFilo(){
        return this.#tieneFilo;
    }

    setEsMagica(booleano){
        this.#esMagica = booleano;
    }

    getEsMagica(){
        return this.#esMagica
    }

    setEstaEnfundada(booleano){
        this.#estaEnfundada = booleano;
    }

    getEstaEnfundada(){
        return this.#estaEnfundada;
    }



    declararNombre(){
        return "El nombre de esta espada es " + this.getNombre(); 
    }



   desenfundarse(){
    if (this.getEsMagica() == true) {
        this.setEstaEnfundada(false);
        console.log(this.getNombre() + " ha salido sola de su funda!");
    }
   }

   lanzarse(humano) {
    if (this.getEsMagica() == true && this.getEstaEnfundada() == false) {
        humano.setDiasDesdeUltimoAccidente(0);
        console.log(this.getNombre() + " le ha provocado un accidente a " + humano.getNombre() + "! han pasado " + humano.getDiasDesdeUltimoAccidente() + "  días desde su ultimo accidente.")
    }
   }

   liberar(espada){
    if (this.getEsMagica() == true && espada.getEstaEnfundada() == true) {
        espada.setEstaEnfundada(false);
        console.log("Oh no! " + this.getNombre() + " ha sacado de su funda a " + espada.getNombre() + "!")
    }
   }


}

module.exports = Espada;