export class Plataforma {
    /**
     * Constructor
     * @param nombre
     * @param logo
     * @param descripcion
     * @param patrocinador
     * @param aplicacion
     */
    constructor(nombre, logo, descripcion, patrocinador, aplicacion) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.patrocinador = patrocinador;
        if (aplicacion) {
            this.aplicacion = aplicacion;
        }
        else {
            this.aplicacion = undefined;
        }
        this.canales = [];
    }
    /**
     * Class Methods
     */
    //Agregar Canales a la plataforma
    agregarCanal(canal) {
        this.canales.push(canal); //Agregamos un canal nuevo al arreglo
        canal.agregarPlataform(this); //agregamos plataforma para que quede asociada al canal
    }
    //Este método sobre escribe la aplicación: Ya que la aplicación es solo 1 para la plataforma
    modificarAplicacion(aplicacion) {
        this.aplicacion = aplicacion;
        aplicacion.agregarPlataforma(this);
    }
    mostrarDetallePlataforma() {
        console.log(this);
    }
    listarCanales() {
        console.log(this.canales);
    }
    listarStreamers() {
        for (let i = 0; i < this.canales.length; i++) {
            console.log(this.canales[i].mostrarStreamer());
        }
    }
}
