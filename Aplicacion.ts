import { Plataforma } from "./Plataforma.js"

export class Aplicacion{


    /**
     * Attribures
     */
    nombre: string //Identificador nombre aplicación
    plataformas: Plataforma[] //Aplicacion tiene varias Plataformas


    /**
     * Constructor
     * @param plataforma 
     */
    constructor(nombre:string, plataformas?:Plataforma[]){
        this.nombre = nombre
        if(plataformas){
            this.plataformas = plataformas
        }else{
            this.plataformas = []
        }
    }

    /**
     * Class Methods
     */

    agregarPlataforma(plataformas:Plataforma){
        this.plataformas.push(plataformas)
    }

    listarPlataformas(){
        console.log(this.plataformas)
    }



}