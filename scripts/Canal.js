export class Canal {
    /**
     * Constructor
     * @param nombre
     * @param banner
     * @param descripcion
     * @param plataforma
     * @param streamer
     */
    constructor(nombre, banner, descripcion, streamer, plataforma) {
        this.nombre = nombre;
        this.banner = banner;
        this.descripcion = descripcion;
        if (plataforma) {
            this.plataforma = plataforma;
            plataforma.agregarCanal(this); //Se agrega el Canal a la plataforma respectiva tan pronto se crea/instancia
        }
        else {
            plataforma = undefined;
        }
        this.streamer = streamer;
        streamer.agregarCanal(this); //Se agrega el Canal al Streamer respectivo tan pronto se crea/instancia
        this.streamings = [];
    }
    /**
     * Class Methods
     */
    agregarPlataform(platforma) {
        this.plataforma = platforma;
    }
    agregarStream(stream) {
        this.streamings.push(stream);
    }
    modificarStreamer(streamer) {
        this.streamer = streamer;
    }
    modificarNombreCanal(nombre) {
        this.nombre = nombre;
    }
    modificarBanner(banner) {
        this.banner = banner;
    }
    modificarDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
    mostrarDetalleCanal() {
        console.log(`Nombre:  "${this.nombre}"`);
        console.log(`Banner:  ${this.banner}`);
        console.log(`Description:  ${this.descripcion}`);
    }
    mostrarStreamer() { return this.streamer; } //Solo hay 1 streamer x Canal según el modelo
    mostarListadoStreamingsOpcion1() {
        for (let i = 0; i < this.streamings.length; i++) {
            console.log(this.streamings[i]);
        }
    }
    mostarListadoStreamingsOpcion2() {
        console.log(this.streamings);
    }
}
