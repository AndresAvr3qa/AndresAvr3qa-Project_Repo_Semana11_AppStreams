export class Streamer {
    /**
     * Constructor
     * @param nickname
     * @param descripcion
     * @param redesSociales
     * @param canales
     */
    constructor(nickname, descripcion, redesSociales) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
        this.canales = []; //Al crearse el Streamer, no necesariamente hay un canal creado aún.
    }
    /**
     * Class Methods
     */
    //Agregar Canales 
    agregarCanal(canal) {
        this.canales.push(canal);
    }
    //Mostrar detalle de un Streamer opcion 1
    mostrarDetalleStreamerOpcion1() {
        console.log(`Nombre:  "${this.nickname}"`);
        console.log(`Banner:  ${this.descripcion}`);
        console.log(`Description:  ${this.redesSociales}`);
    }
    //Mostrar detalle de un Streamer opcion 2
    mostrarDetalleStreamerOpcion2() {
        console.log(this);
    }
}
