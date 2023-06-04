import { Canal } from "./Canal.js"
import { Categoria } from "./Categoria.js"

export class Stream{
    
    /**
     * Attributes
     */

    fecha:Date
    duracion:string
    canal:Canal | undefined
    categorias:Categoria[]

    /**
     * Constructor
     * @param fecha 
     * @param duracion 
     * @param categorias 
     * @param canal 
     */

    constructor(fecha:Date, duracion:string, categorias:Categoria[], canal?:Canal){
        this.fecha = fecha
        this.duracion = duracion
        this.categorias = categorias
        for(let i=0; i<categorias.length; i++){ //Con este IF tan pronto se instancia un Stream, y se le asigna una o varias categorias, le indicamos que a la Categoria(s), les asigne también el Stream. De esta forma podemos ver qué Streams comparten la misma categoria.
            categorias[i].agregarStream(this)
        }
        if(canal){
            this.canal = canal
            canal.agregarStream(this) //Tan pronto se crea el stream, se le asigna canal
        }else{
            this.canal = undefined
        }
    }

    /**
     * Class Methods
     */

    agregarCategoria(categoria:Categoria){
        this.categorias.push(categoria)
    }

    mostrarDetalleStreamOpcion1(){
        console.log(this)
    }

    mostrarDetalleStreamOpcion2(){
        console.log(`Nombre:  "${this.fecha}"`)
        console.log(`Banner:  ${this.duracion}`)
        console.log(`Description:  ${this.canal}`)
        console.log(`Description:  ${this.categorias}`)
    }
    
}
