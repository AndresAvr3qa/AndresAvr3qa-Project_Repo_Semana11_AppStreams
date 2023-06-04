/**
 * Author: Carlos Andres Avila Reyes
 * Group 3
 */



import { Aplicacion } from "./Aplicacion.js"
import { Canal } from "./Canal.js"
import { Categoria } from "./Categoria.js"
import { Plataforma } from "./Plataforma.js"
import { Stream } from "./Stream.js"
import { Streamer } from "./Streamer.js"

console.log("APP Streamings")

/**
* APPLICATIONS
*/
let app = new Aplicacion("Google Streamer App")                                     



/**
 * PLATFORMS
 */

let twitchPlatform = new Plataforma("Twitch", 
                                    "https://upload.wikimedia.org/wikipedia/commons/1/19/Twitch.jpg", 
                                    "Twitch is an interactive livestreaming service for content spanning gaming, entertainment, sports, music, and more. There's something for everyone on ..", 
                                    "Amazon, Inc.")

let youTuBePlatform = new Plataforma("Youtube", 
                                     "https://1000marcas.net/wp-content/uploads/2020/02/Logotipo-negro-de-YouTube.png", 
                                     "YouTube es un sitio web de origen estadounidense dedicado a compartir videos. Presenta una variedad de clips de películas, programas de televisión y vídeos musicales, así como contenidos amateur como videoblogs y YouTube Gaming", 
                                     "Google")                                    


let facebookLivePlatform = new Plataforma("Facebook Live", 
                                     "https://assets.stickpng.com/thumbs/585e4da1cb11b227491c339c.png", 
                                     "Usa Facebook para transmitir en vivo una conversación, un espectáculo, una sesión de preguntas y respuestas o un evento virtual. Puedes transmitir en vivo ...", 
                                     "Meta")     


app.agregarPlataforma(facebookLivePlatform)
app.agregarPlataforma(youTuBePlatform)
app.agregarPlataforma(twitchPlatform)

//console.log(app)


/**
 * STREAMERS
 */
let streamer1 = new Streamer("Ibai Llanos",
                            "Ibai Llanos Garatea es un streamer, youtuber y presentador de deportes electrónicos español.​​En Twitch cuenta con más de 11 millones de seguidores, lo que le coloca en el cuarto puesto global de los canales con más seguidores de la plataforma.​",
                            ["https://twitter.com/IbaiLlanos", "https://fb.com/IbaiLlanos", "https://linkedin.com/IbaiLlanos"],)

let streamer2 = new Streamer("Auron",
                             "Traducción del inglés-Raúl Álvarez Genes, más conocido como AuronPlay o simplemente Auron, es un YouTuber, streamer de Twitch y comediante español.​",
                            ["https://twitter.com/auronplay"])                            

let streamer3 = new Streamer("Nate Gentile",
                            "José Ignacio Gentile, ​ más conocido como Nate Gentile es un youtuber uruguayo con más de dos millones de suscriptores en su canal homónimo dedicado a la informática doméstica, especialmente al análisis y montaje de potentes equipos y componentes.​",
                           ["https://www.youtube.com/@NateGentile7", "https://twitter.com/nategentile7"])     
                           

//console.log(streamer1)                           
//console.log(streamer2)
//console.log(streamer3)

/**
 * CHANNELS
 */

let canal1 = new Canal("Ibai Sports", 
                       "https://bannerEsportsIbaiLlanos.png",
                       "Canal dedicado a deportes, eventos relacionados, narración y streaming de eventos deportivos blah blah",
                       streamer1,
                       twitchPlatform)

let canal2 = new Canal("Ibai Gaming", 
                       "https://bannerGamingIbaiLlanos.png",
                       "Canal dedicado a gameplays y blah blah",
                       streamer1, 
                       twitchPlatform)

let canal3 = new Canal("Ibai E-Sports", 
                       "https://bannerEsportsIbaiLlanos.png",
                       "Canal dedicado a deportes, eventos relacionados, narración y streaming de eventos deportivos blah blah",
                       streamer1,
                       youTuBePlatform)

let canal4 = new Canal("Auron Gaming", 
                       "https://bannerAuronGaming.png",
                       "Canal dedicado a gameplays en directo y blah blah",
                       streamer2,
                       twitchPlatform)
                       
let canal5 = new Canal("Auron Chatting", 
                       "https://bannerChattingAuron.png",
                       "Canal dedicado a chatting",
                       streamer2,
                       twitchPlatform)

let canal6 = new Canal("Auron Gaming", 
                       "https://bannerAuronGaming.png",
                       "Canal dedicado a gameplays onDemand y blah blah",
                       streamer2,
                       youTuBePlatform)

let canal7 = new Canal("Nate", 
                       "https://bannerTechReviewsNate.png",
                       "Canal dedicado a Tech reviews y avances tecnológicos de la industria",
                       streamer3,
                       twitchPlatform)

let canal8 = new Canal("Nate", 
                       "https://bannerTechReviewsNatefb.png",
                       "Canal dedicado a Tech reviews y avances tecnológicos de la industria",
                       streamer3,
                       facebookLivePlatform)

let canal9 = new Canal("Nate", 
                       "https://bannerTechReviewsNateYoutube.png",
                       "Canal dedicado a Tech reviews y avances tecnológicos de la industria - OnDemand y LiveStream",
                       streamer3,
                       youTuBePlatform)

/**
 * CATEGORIES
 */

let categorySports = new Categoria("Sports", "https://Sports.jpg", "Pro soccer")

let categoryESports = new Categoria("E-Sports", "https://E-Sports.jpg", "Pro E-Sports")                                   

let categoryChatting = new Categoria("Just Chatting", "https://chat.jpg", "Chat time")                                                                      

let categoryShooter = new Categoria("Shooter", "https://shooter.png", "Gampeplays shooters")           
let categoryGaming = new Categoria("Gameplay", "https://gameplay.png", "Gampeplays random")   
                                    
let categoryTechReviews = new Categoria("Tech REviews", "https://techreviews.png", "Tech reviews")                                    

let categoryPcUpgrades = new Categoria("Pc Upgrades", "https://pcmasterrace.png","PC Master Race")                                    
                                    

/**
 * STREAMINGS:
 */
let date:Date = new Date("2019-01-16");

let streaming1 = new Stream(date ,"3 horas", [categorySports, categoryChatting], canal1)
let streaming2 = new Stream(date, "45 min", [categoryGaming],canal2 )
let streaming3 = new Stream(date, "245 min", [categoryESports, categoryChatting], canal3 )
let streaming4 = new Stream(date, "5 min",  [categoryShooter],canal4 )
let streaming5 = new Stream(date, "8 horas",  [categoryChatting],canal5)
let streaming6 = new Stream(date, "45 min",  [categoryGaming],canal6 )
let streaming7 = new Stream(date, "60 min",  [categoryTechReviews],canal7 )
let streaming8 = new Stream(date, "10 horas", [categoryPcUpgrades], canal8 )
let streaming9 = new Stream(date, "25 min", [categoryChatting],canal9 )
let streaming10 = new Stream(date, "25 min", [categoryChatting],canal9 )
let streaming11 = new Stream(date, "25 min", [categoryChatting],canal9 )
let streaming12 = new Stream(date, "25 min", [categoryChatting],canal9 )



//console.log(canal1)


/**
 * ACTIVITY METHODS
 */


/**
 * 1. Mostrar el listado de plataformas
 */

    //1.1 By class method
    app.listarPlataformas()

    //1.2 By object attribute
    console.log(app.plataformas) 


/**
 * 2. Mostrar el detalle de una plataforma
 */

    //2.1 By class method
    facebookLivePlatform.mostrarDetallePlataforma()
    youTuBePlatform.mostrarDetallePlataforma()
    twitchPlatform.mostrarDetallePlataforma()

    //2.2 By printing Platform object directly 
    console.log(twitchPlatform)
    console.log(youTuBePlatform)
    console.log(facebookLivePlatform)

    //2.3 By pulling object from array/object
    console.log(app.plataformas[0])


/**
 * 3. Mostrar el listado de canales
 */

    //3.1 By class method
    twitchPlatform.listarCanales()
    facebookLivePlatform.listarCanales()
    youTuBePlatform.listarCanales()

/**
 * 4. Mostrar el detalle de un canal
 */

    //4.1 By Class method
    canal1.mostrarDetalleCanal()
    canal2.mostrarDetalleCanal()
    canal3.mostrarDetalleCanal()
    canal4.mostrarDetalleCanal()
    canal5.mostrarDetalleCanal()
    canal6.mostrarDetalleCanal()
    canal7.mostrarDetalleCanal()
    canal8.mostrarDetalleCanal()
    canal9.mostrarDetalleCanal()

    //4.2 By pringint canal object
    /*console.log(canal1)
    console.log(canal2)
    console.log(canal3)
    console.log(canal4)
    console.log(canal5)
    console.log(canal6)
    console.log(canal7)
    console.log(canal8)
    console.log(canal9)*/

/**
 * 5. Mostrar listado de Streamers
 */

    //5.1 By Platform method, which calls Canal method
    facebookLivePlatform.listarStreamers()
    youTuBePlatform.listarStreamers()
    twitchPlatform.listarStreamers()

/**
 * 6. Mostrar detalle de Streamer
 */
    
    //6.1     
    streamer1.mostrarDetalleStreamerOpcion1()

    //6.2
    streamer1.mostrarDetalleStreamerOpcion2()

/**
 * 7. Mostrar Listado de Streams
 */

    //7.1
    canal9.mostarListadoStreamingsOpcion1()

    //7.2
    canal9.mostarListadoStreamingsOpcion2()

/**
 * 8. Mostrar el Detalle de un Stream
 */

    //8.1 
    streaming1.mostrarDetalleStreamOpcion1()    

    //8.2
    streaming1.mostrarDetalleStreamOpcion2()    

/**
 * 9. Agregar Plataforma
 */
    let patreonPlatform = new Plataforma("Patreon",
                                        "https://logpatreon.png",
                                        "Patreon is the best place for creators to build memberships by providing exclusive access to their work and a deeper connection with their communities.",
                                        "Jack Conte Music Records")

    app.agregarPlataforma(patreonPlatform)

    console.log(app.plataformas)

/**
 * 10. Agregar un Canal
 */
    let canal10 = new Canal("Solo Music",
                            "https://solomusic.png",
                            "Solo music creative project for famous songs", 
                            streamer3)

    patreonPlatform.agregarCanal(canal10)


/**
 * 11. Agregar un Streamer
 */

    //El Streamer es único para el canal, por tanto agregar uno nuevo no aplicaría. En su lugar el método lo modifica.
    //Según el modelo, el canal se crea antes del Streamer, por tanto no sería acorde crear un Streamer sin un canal.
    canal10.modificarStreamer(streamer2) 

/**
 * 12. Agregar un Stream
 */

let stream33 = new Stream(date, "689 min", [categoryPcUpgrades])
let stream34 = new Stream(date, "7 min", [categoryPcUpgrades])
let stream36 = new Stream(date, "8 horas", [categoryPcUpgrades])
let stream35 = new Stream(date, "9 min", [categoryPcUpgrades])
let stream37 = new Stream(date, "45 min", [categoryPcUpgrades])
let stream38 = new Stream(date, "15 min", [categoryPcUpgrades])

canal3.agregarStream(stream33)
canal3.agregarStream(stream34)
canal3.agregarStream(stream35)
canal3.agregarStream(stream36)
canal3.agregarStream(stream37)
canal3.agregarStream(stream38)


console.log(canal3)


/**
 * 13. Agregar un Canal a un Streamer
 */
streamer1.agregarCanal(canal9)
//console.log(streamer1)


/**
 * 14. Agregar un Stream a un Streamer
 */

    //De acuerdo al modelo Stream y Streamer no tiene una relación directa, ya que Canales intermedia entre ambas y es la encargada de crear un canal
    //que a su vez está vinculado al streamer respectivo.
    //La clase Streamer no tiene atributos Streamer, ni la clase Streamer tiene atributos Stream

    let stream20 = new Stream(date, "15 min", [categoryPcUpgrades])
    canal3.agregarStream(stream20)



    console.log(categoryChatting)

                               


