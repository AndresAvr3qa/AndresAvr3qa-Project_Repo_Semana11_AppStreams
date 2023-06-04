export class Aplicacion {
    /**
     * Constructor
     * @param plataforma
     */
    constructor(nombre, plataformas) {
        this.nombre = nombre;
        if (plataformas) {
            this.plataformas = plataformas;
        }
        else {
            this.plataformas = [];
        }
    }
    agregarPlataforma(plataformas) {
        this.plataformas.push(plataformas);
    }
    listarPlataformas() {
        console.log(this.plataformas);
    }
}
