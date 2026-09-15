import { Personaje } from "./Personaje";

export class Soldado extends Personaje {
    constructor() {
        super();
        this.setVida(1);
        this.setEscudo(1);
        this.setArma("Pistola");
    }
}