import { Aplicacion } from "./Aplicacion.js"
import { Canal } from "./Canal.js"

export class Plataforma{

    /**
     * Attributes
     */
    nombre:string
    logo:string
    descripcion:string
    patrocinador:string
    aplicacion: Aplicacion | undefined //Solo 1 aplicación por plataforma: La plataforma puede existir sin aplicación inicialmente, por lo que es opcional
    canales:Canal[] //Agregacion: una plataforma puede tener varios canales, o ninguno para empezar


    /**
     * Constructor
     * @param nombre 
     * @param logo 
     * @param descripcion 
     * @param patrocinador 
     * @param aplicacion 
     */    
    constructor(nombre:string, logo:string, descripcion:string, patrocinador:string, aplicacion?:Aplicacion){
        this.nombre = nombre
        this.logo = logo
        this.descripcion = descripcion
        this.patrocinador = patrocinador
        if(aplicacion){
            this.aplicacion = aplicacion
        }else{
            this.aplicacion = undefined
        }
        this.canales = [] 
    }

    /**
     * Class Methods
     */

    //Agregar Canales a la plataforma
    agregarCanal(canal:Canal){
        this.canales.push(canal) //Agregamos un canal nuevo al arreglo
        canal.agregarPlataform(this)  //agregamos plataforma para que quede asociada al canal
    }

    //Este método sobre escribe la aplicación: Ya que la aplicación es solo 1 para la plataforma
    modificarAplicacion(aplicacion:Aplicacion){
        this.aplicacion = aplicacion
        aplicacion.agregarPlataforma(this)
    }

    mostrarDetallePlataforma(){
        console.log(this)
    }

    listarCanales(){
        console.log(this.canales)
    }

    listarStreamers(){

        for(let i=0; i<this.canales.length;  i++){
            console.log(this.canales[i].mostrarStreamer())
        }
       
    }

     




}