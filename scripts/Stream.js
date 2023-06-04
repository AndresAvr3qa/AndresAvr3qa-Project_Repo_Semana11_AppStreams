export class Stream {
    constructor(fecha, duracion, categorias, canal) {
        this.fecha = fecha;
        this.duracion = duracion;
        this.categorias = categorias;
        for (let i = 0; i < categorias.length; i++) { //Con este IF tan pronto se instancia un Stream, y se le asigna una o varias categorias, le indicamos que a la Categoria(s), les asigne también el Stream. De esta forma podemos ver qué Streams comparten la misma categoria.
            categorias[i].agregarStream(this);
        }
        if (canal) {
            this.canal = canal;
            canal.agregarStream(this); //Tan pronto se crea el stream, se le asigna canal
        }
        else {
            this.canal = undefined;
        }
    }
    agregarCategoria(categoria) {
        this.categorias.push(categoria);
    }
    mostrarDetalleStreamOpcion1() {
        console.log(this);
    }
    mostrarDetalleStreamOpcion2() {
        console.log(`Nombre:  "${this.fecha}"`);
        console.log(`Banner:  ${this.duracion}`);
        console.log(`Description:  ${this.canal}`);
        console.log(`Description:  ${this.categorias}`);
    }
}
