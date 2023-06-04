import { Canal } from "./Canal.js"

export  class Streamer{


     /**
     * Attributes
     */
    nickname:string
    descripcion:string
    redesSociales:string[] //Sería un arreglo pues son varias
    canales:Canal[]


    /**
     * Constructor
     * @param nickname 
     * @param descripcion 
     * @param redesSociales 
     * @param canales 
     */
    constructor(nickname:string, descripcion:string, redesSociales:string[]){ //Canal no puede ser opcional, mínimo 1. Es un arreglo porque el streamer puede tener varios
        this.nickname = nickname
        this.descripcion = descripcion
        this.redesSociales = redesSociales
        this.canales = [] //Al crearse el Streamer, no necesariamente hay un canal creado aún.
    }

    /**
     * Class Methods
     */

    //Agregar Canales 
    agregarCanal(canal:Canal){
        this.canales.push(canal)
    }

    //Mostrar detalle de un Streamer opcion 1
    mostrarDetalleStreamerOpcion1(){
        console.log(`Nombre:  "${this.nickname}"`)
        console.log(`Banner:  ${this.descripcion}`)
        console.log(`Description:  ${this.redesSociales}`)
    }

    //Mostrar detalle de un Streamer opcion 2
    mostrarDetalleStreamerOpcion2(){
        console.log(this)
    }




    
}