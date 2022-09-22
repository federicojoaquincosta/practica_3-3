class Herrero {
    #nombre = "nombrexdefecto";
    #esBarbudo = true;
    #diasDesdeUltimoAccidente = 0;
    #estaContento = false;

    constructor(nombre, esBarbudo, diasDesdeAccidente, estaContento){
        this.#nombre = nombre;
        this.#esBarbudo = esBarbudo;
        this.#diasDesdeUltimoAccidente = diasDesdeAccidente;
        this.#estaContento = estaContento;
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }

    setBarbudo(booleano){
        this.#esBarbudo = booleano;
    }

    getBarbudo(){
        return this.#esBarbudo;
    }

    setDiasDesdeUltimoAccidente(num){
        this.#diasDesdeUltimoAccidente = num;
    }

    getDiasDesdeUltimoAccidente(){
        return this.#diasDesdeUltimoAccidente;
    }

    setEstaContento(booleano){
        this.#estaContento = booleano;
    }

    getEstaContento(){
        return this.#estaContento;
    }



    declararNombre(){
        return "El nombre de este herrero es " + this.getNombre(); 
    }
    
    afilar(espada) {
        espada.setFilo(true);
    }

    desafilar(espada) {
        espada.setFilo(true);
    }

    encantar(espada){
        espada.setEsMagica(true);
        console.log(this.getNombre() + " ha encantado a la espada " + espada.getNombre() + " para que sea mágica");
    }

    declararEstadoAnimo(){
        if (this.getEstaContento() === false)
        return this.getNombre() + " está triste"
        else {
            return this.getNombre() + " está feliz"
        }
    }

    contarChiste(amigo) {
        amigo.setEstaContento(true);
        console.log(this.getNombre() + " le contó un chiste a " + amigo.getNombre());
    }

    crecerBarba(){
        this.setBarbudo(true);
    }

    sumarDiaSinAccidente(){
        this.setDiasDesdeUltimoAccidente((this.getDiasDesdeUltimoAccidente() + 1));
    }
    
    afeitarse(navaja){
        if (this.getBarbudo() === true && navaja.getFilo() === true) {
           this.sumarDiaSinAccidente();
            //this.diasDesdeUltimoAccidente++
            this.setBarbudo(false);
            navaja.setFilo(false);
            console.log(this.getNombre() + " se ha afeitado exitosamente usando a " + navaja.getNombre());
            console.log(this.getNombre() + " lleva " + this.getDiasDesdeUltimoAccidente() + " días sin accidentarse");
        }
        else if (navaja.getFilo() === false){
            this.setDiasDesdeUltimoAccidente(0);
            console.log("Ay! " + this.getNombre() +" se cortó afeitándose. Habrá que tener más cuidado");
        }

    }

}

module.exports = Herrero;