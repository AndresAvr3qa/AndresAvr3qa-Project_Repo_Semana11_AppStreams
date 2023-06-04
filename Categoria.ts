import { Stream } from "./Stream.js"

export class Categoria{

    /**
     * Attributes
     */

    nombre:string
    img:string
    descripcion:string
    streamings:Stream[] //de 1 a muchas con Streamings

    /**
     * Constructor
     * @param nombre 
     * @param img 
     * @param descripcion 
     */

    constructor(nombre:string, img:string, descripcion:string){

        this.nombre = nombre
        this.img = img
        this.descripcion = descripcion
        this.streamings = []
    }

    /**
     * Class Methods
     */
    agregarStream(stream:Stream){
        this.streamings.push(stream)
    }
    
}