// CONSTRUCTORES DEL JUEGO
class Personaje {
    constructor(tipo, vida, ataques) {
        this.tipo = tipo;
        this.vida = vida;
        this.ataques = ataques;
    }
}

class AtaquePj {
    constructor(id, nombre, daño) {
        this.id = id;
        this.nombre = nombre;
        this.daño = daño;
    }
}

class Monstruos {
    constructor(tipo, vida, daño) {
        this.tipo = tipo;
        this.vida = vida;
        this.daño = daño;
    }
}

//=====================================================================================================
//MAGO
const ataqueMago1 = new AtaquePj(1, "Bola de fuego", 20);
const ataqueMago2 = new AtaquePj(2, "Rayo", 25);
const ataqueMago3 = new AtaquePj(3, "Rayo de escarcha", 20);

const ataqueMago = [ataqueMago1, ataqueMago2, ataqueMago3];

const mago = new Personaje("Mago", 100, ataqueMago);

//=====================================================================================================
//GUERRERO
const ataqueGuerrero1 = new AtaquePj(1, "Filo resonante", 20);
const ataqueGuerrero2 = new AtaquePj(2, "Destierro", 25);
const ataqueGuerrero3 = new AtaquePj(3, "Estallido de filos", 20);

const ataqueGuerrero = [ataqueGuerrero1, ataqueGuerrero2, ataqueGuerrero3];

const guerrero = new Personaje("Guerrero", 100, ataqueGuerrero);

//=====================================================================================================
//ARQUERA
const ataqueArquera1 = new AtaquePj(1, "Flecha de cristal", 20);
const ataqueArquera2 = new AtaquePj(2, "Disparo de halcon", 25);
const ataqueArquera3 = new AtaquePj(3, "Flecha de fuego", 20);

const ataqueArquera = [ataqueArquera1, ataqueArquera2, ataqueArquera3];

const arquera = new Personaje("Arquera", 100, ataqueArquera);

//=====================================================================================================
//MONSTRUO

const espiritu = new Monstruos("Espiritu", 40, 5);
const huargo = new Monstruos("Huargo", 60, 15);
const orco = new Monstruos("Orco", 70, 20);
const troll = new Monstruos("Troll", 90, 25);
const balrog = new Monstruos("Balrog", 120, 35);


const monstruosArray = [espiritu, huargo, orco, troll, balrog];

//=====================================================================================================
//VARIABLES Y CONSTANTES
let enemigo;
let indicador;
let critico;
let pjJSON;
let seleccionPersonaje;

const vidaPj = document.getElementById('vidaPj');
const vidaMonstruo = document.getElementById('vidaMonstruo');

//=====================================================================================================
//FUNCIONES
function esconderBotonPersonajes() {
    document.getElementById('personajes').style.display = 'none';
    document.getElementById('btnSeleccionarEnemigo').style.display = 'block';
}

function esconderBotonSelecEnemigo() {
    selecEnemigo();
    vidaMonstruo.innerText = `${enemigo.tipo} vida ${enemigo.vida}`;
    document.getElementById('btnSeleccionarEnemigo').style.display = 'none';
    document.getElementById('btnComenzar').style.display = 'block';
    let divCajaTexto = document.getElementById('divTexto');
    divCajaTexto.innerText = `La montaña maldita.
Muchos años atrás en Carnicabunstein ,un pueblo cercano a la gran montaña, un grupo de magos forjo una daga mágica. Esta daga le otorga a su portador la habilidad de controlar a los dragones. El pueblo entro en guerra tras guerra ya que todos querían poseer el poder otorgado por el filoso tesoro. Tal fue el daño causado por la daga que sus creadores tomaron la drástica decisión de perderla en las catacumbas de la montaña y sellar la entrada con una maldición.
Cientos de años pasaron y una gran amenaza se fue haciendo más fuerte en el continente. Los ciudadanos de Carnicabunstein necesitan nuevamente la ayuda de los dragones, pero para poder controlarlos la daga deberán recuperar.Estas listo para encontrar la daga y enfrentarte a las maldiciones de los antiguos magos?`;
}

function esconderBotonComenzar() {
    document.getElementById('btnComenzar').style.display = 'none';
    vidaPj.innerText = `${seleccionPersonaje.tipo} vida ${seleccionPersonaje.vida}`;
    document.getElementById('divTexto').style.display = 'none';
    document.getElementById('btnAtaque1').style.display = 'block';
    document.getElementById('btnAtaque2').style.display = 'block';
    document.getElementById('btnAtaque3').style.display = 'block';
    document.getElementById('btnPocima').style.display = 'block';
}

function esconderBotonAtaques() {
    document.getElementById('btnAtaque1').style.display = 'none';
    document.getElementById('btnAtaque2').style.display = 'none';
    document.getElementById('btnAtaque3').style.display = 'none';
    document.getElementById('btnPocima').style.display = 'none';
}

function esconderBotonTurnoEnemigo() {
    document.getElementById('btnAtaque1').style.display = 'block';
    document.getElementById('btnAtaque2').style.display = 'block';
    document.getElementById('btnAtaque3').style.display = 'block';
    document.getElementById('btnPocima').style.display = 'block';
    document.getElementById('btnTurnoEnemigo').style.display = 'none';
}

function selecEnemigo() {
    enemigo = monstruosArray[0];
    return enemigo;
}

function selecMago() {
    seleccionPersonaje = mago;
    let pjJSON = JSON.stringify(mago);
    localStorage.setItem("Personaje seleccionado", pjJSON);
    esconderBotonPersonajes();
    return seleccionPersonaje;
}

function selecGuerrero() {
    seleccionPersonaje = guerrero;
    let pjJSON = JSON.stringify(guerrero);
    localStorage.setItem("Personaje seleccionado", pjJSON);
    esconderBotonPersonajes();
    return seleccionPersonaje;
}

function selecArquera() {
    seleccionPersonaje = arquera;
    let pjJSON = JSON.stringify(arquera);
    localStorage.setItem("Personaje seleccionado", pjJSON);
    esconderBotonPersonajes();
    return seleccionPersonaje;
}

function enemigoTurno() {
    if (monstruosArray.length > 0) {
        if (enemigo.vida <= 0) {
            seleccionPersonaje.vida += 25;
            monstruosArray.shift();
            esconderBotonAtaques();
            document.getElementById('btnTurnoEnemigo').style.display = 'none';
            document.getElementById('btnSeleccionarEnemigo').style.display = 'block';
        } else if (enemigo.vida > 0 && enemigo.vida < 16) {
            enemigo.vida += 15;
            vidaMonstruo.innerText = `${enemigo.tipo} vida ${enemigo.vida}`;
            vidaPj.innerText = `${seleccionPersonaje.tipo} vida ${seleccionPersonaje.vida}`;
            esconderBotonTurnoEnemigo();
        } else {
            seleccionPersonaje.vida -= enemigo.daño;
            vidaMonstruo.innerText = `${enemigo.tipo} vida ${enemigo.vida}`;
            vidaPj.innerText = `${seleccionPersonaje.tipo} vida ${seleccionPersonaje.vida}`;
            esconderBotonTurnoEnemigo();
        }
    } else {
        let divCajaTexto = document.getElementById('divTexto');
        divCajaTexto.innerText = `Felicitaciones joven ${seleccionPersonaje}!, has logrado recuperar la daga. Con ella y la ayuda de los dragones lograremos traer la paz a nuestro pueblo. FELICITACIONES, HAS GANADO! `;
        esconderBotonAtaques();
    }
}

function pocima() {
    seleccionPersonaje.vida += 25;
    vidaMonstruo.innerText = `${enemigo.tipo} vida ${enemigo.vida}`;
    vidaPj.innerText = `${seleccionPersonaje.tipo} vida ${seleccionPersonaje.vida}`;
    esconderBotonAtaques();
    document.getElementById('btnTurnoEnemigo').style.display = 'block';
    return seleccionPersonaje.vida;
}

function ataque01() {
    if (seleccionPersonaje.vida <= 0) {
        esconderBotonAtaques();
        let divCajaTexto = document.getElementById('divTexto');
        divCajaTexto.innerText = `Joven ${seleccionPersonaje} tu camino ha llegado al fin, la muerte se ha echo una contigo.`;
    } else {
        let ataque = seleccionPersonaje.ataques[0];
        let indicador = Math.floor(Math.random() * 4) + 1;
        if (indicador == 4) {
            enemigo.vida -= ataque.daño * 1.5;
            vidaMonstruo.innerText = `${enemigo.tipo} vida ${enemigo.vida}`;
            vidaPj.innerText = `${seleccionPersonaje.tipo} vida ${seleccionPersonaje.vida}`;
        } else {
            enemigo.vida -= ataque.daño;
            vidaMonstruo.innerText = `${enemigo.tipo} vida ${enemigo.vida}`;
            vidaPj.innerText = `${seleccionPersonaje.tipo} vida ${seleccionPersonaje.vida}`;
        }
        esconderBotonAtaques();
        document.getElementById('btnTurnoEnemigo').style.display = 'block';
    }
}

function ataque02() {
    if (seleccionPersonaje.vida <= 0) {
        let divCajaTexto = document.getElementById('divTexto');
        divCajaTexto.innerText = `Joven ${seleccionPersonaje.tipo} tu camino ha llegado al fin. Vuelve a comenzar con otro Pj para intentar recuperar la daga perdida. `;
    } else {
        let ataque1 = seleccionPersonaje.ataques[1];
        let indicador = Math.floor(Math.random() * 8) + 1;
        if (indicador == 8) {
            enemigo.vida -= ataque1.daño * 1.5;
            vidaMonstruo.innerText = `${enemigo.tipo} vida ${enemigo.vida}`;
            vidaPj.innerText = `${seleccionPersonaje.tipo} vida ${seleccionPersonaje.vida}`;
        } else {
            enemigo.vida -= ataque1.daño;
            vidaMonstruo.innerText = `${enemigo.tipo} vida ${enemigo.vida}`;
            vidaPj.innerText = `${seleccionPersonaje.tipo} vida ${seleccionPersonaje.vida}`;
        }
        esconderBotonAtaques();
        document.getElementById('btnTurnoEnemigo').style.display = 'block';
    }
}

function ataque03() {
    if (seleccionPersonaje.vida <= 0) {
        let divCajaTexto = document.getElementById('divTexto');
        divCajaTexto.innerText = `Joven ${seleccionPersonaje.tipo} tu camino ha llegado al fin. Vuelve a comenzar con otro Pj para intentar recuperar la daga perdida. `;
    } else {
        let ataque2 = seleccionPersonaje.ataques[2];
        let indicador = Math.floor(Math.random() * 4) + 1;
        if (indicador == 4) {
            enemigo.vida -= ataque2.daño * 1.5;
            vidaMonstruo.innerText = `${enemigo.tipo} vida ${enemigo.vida}`;
            vidaPj.innerText = `${seleccionPersonaje.tipo} vida ${seleccionPersonaje.vida}`;
        } else {
            enemigo.vida -= ataque2.daño;
            vidaMonstruo.innerText = `${enemigo.tipo} vida ${enemigo.vida}`;
            vidaPj.innerText = `${seleccionPersonaje.tipo} vida ${seleccionPersonaje.vida}`;
        }
        esconderBotonAtaques();
        document.getElementById('btnTurnoEnemigo').style.display = 'block';
    }
}
//=====================================================================================================
//BOTONES
const btnMago = document.getElementById('mago').addEventListener("click", selecMago);
const btnGuerrero = document.getElementById('guerrero').addEventListener("click", selecGuerrero);
const btnArquera = document.getElementById('arquera').addEventListener("click", selecArquera);
const btnPocima = document.getElementById('btnPocima').addEventListener("click", pocima);
const btnAtaque1 = document.getElementById('btnAtaque1').addEventListener("click", ataque01);
const btnAtaque2 = document.getElementById('btnAtaque2').addEventListener("click", ataque02);
const btnAtaque3 = document.getElementById('btnAtaque3').addEventListener("click", ataque03);
const btnEnemigo = document.getElementById('btnSeleccionarEnemigo').addEventListener("click", esconderBotonSelecEnemigo);
const btnComenzar = document.getElementById('btnComenzar').addEventListener("click", esconderBotonComenzar);
const btnTurnoEnemigo = document.getElementById('btnTurnoEnemigo').addEventListener("click", enemigoTurno);