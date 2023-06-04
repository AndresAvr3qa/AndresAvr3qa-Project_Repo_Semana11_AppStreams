import { Plataforma } from "./Plataforma.js"
import { Stream } from "./Stream.js"
import { Streamer } from "./Streamer.js"

export class Canal{

    /**
     * Attributes
     */
    nombre: string
    banner: string
    descripcion: string
    plataforma: Plataforma | undefined//Un Canal solo puede ser creado en 1 plataforma
    streamer:Streamer //Un Canal solo tiene 1 streamer
    streamings:Stream[]

    /**
     * Constructor
     * @param nombre 
     * @param banner 
     * @param descripcion 
     * @param plataforma 
     * @param streamer 
     */    
    constructor(nombre:string, banner:string, descripcion:string, streamer:Streamer, plataforma?:Plataforma){
        this.nombre = nombre
        this.banner = banner
        this.descripcion = descripcion
        if(plataforma){
            this.plataforma = plataforma
            plataforma.agregarCanal(this) //Se agrega el Canal a la plataforma respectiva tan pronto se crea/instancia
        }else{
            plataforma = undefined
        }
        this.streamer = streamer
        streamer.agregarCanal(this) //Se agrega el Canal al Streamer respectivo tan pronto se crea/instancia
        this.streamings = []
    }


    /**
     * Class Methods
     */

    agregarPlataform(platforma:Plataforma){
        this.plataforma = platforma
    }

    agregarStream(stream:Stream){
        this.streamings.push(stream)
    }

    modificarStreamer(streamer:Streamer){
        this.streamer = streamer
    }

    modificarNombreCanal(nombre:string){
        this.nombre = nombre
    }

    modificarBanner(banner:string){
        this.banner = banner
    }

    modificarDescripcion(descripcion:string){
        this.descripcion = descripcion
    }

    mostrarDetalleCanal(){
        console.log(`Nombre:  "${this.nombre}"`)
        console.log(`Banner:  ${this.banner}`)
        console.log(`Description:  ${this.descripcion}`)
    }

    mostrarStreamer(){ return this.streamer }//Solo hay 1 streamer x Canal según el modelo
    
    mostarListadoStreamingsOpcion1(){
        for(let i=0; i<this.streamings.length; i++){
            console.log(this.streamings[i])
        }
    }

    mostarListadoStreamingsOpcion2(){
        console.log(this.streamings)
    }
}