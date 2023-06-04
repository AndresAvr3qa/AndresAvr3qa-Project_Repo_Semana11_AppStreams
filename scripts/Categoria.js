export class Categoria {
    constructor(nombre, img, descripcion) {
        this.nombre = nombre;
        this.img = img;
        this.descripcion = descripcion;
        this.streamings = [];
    }
    agregarStream(stream) {
        this.streamings.push(stream);
    }
}
