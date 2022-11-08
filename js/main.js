// CONSTRUCTORES DEL JUEGO
class Personaje {
    constructor(tipo, vida, ataques, objetos, inventario) {
        this.tipo = tipo;
        this.vida = vida;
        this.ataques = ataques;
        this.objetos = objetos;
        this.inventario = inventario;
    }
}

class AtaquePj {
    constructor(id, nombre, daño) {
        this.id = id;
        this.nombre = nombre;
        this.daño = daño;
    }
}

class ObjetoPj {
    constructor(nombre, vida, daño) {
        this.nombre = nombre;
        this.vida = vida;
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

const objetoMago1 = new ObjetoPj("baston", 0, 30);
const objetoMago2 = new ObjetoPj("capa", 50, 0);
const objetoMago3 = new ObjetoPj("gorro", 20, 10);

const objMago = [objetoMago1, objetoMago2, objetoMago3];

const inventarioMago = [];

const mago = new Personaje("Mago", 100, ataqueMago, objMago, inventarioMago);

//=====================================================================================================
//GUERRERO
const ataqueGuerrero1 = new AtaquePj(1, "Filo resonante", 20);
const ataqueGuerrero2 = new AtaquePj(2, "Destierro", 25);
const ataqueGuerrero3 = new AtaquePj(3, "Estallido de filos", 20);

const ataqueGuerrero = [ataqueGuerrero1, ataqueGuerrero2, ataqueGuerrero3];

const objetoGuerrero1 = new ObjetoPj("espada", 0, 30);
const objetoGuerrero2 = new ObjetoPj("armadura", 50, 0);
const objetoGuerrero3 = new ObjetoPj("guantes", 20, 10);

const objGuerrero = [objetoGuerrero1, objetoGuerrero2, objetoGuerrero3];

const inventarioGuerrero = [];

const guerrero = new Personaje("Guerrero", 100, ataqueGuerrero, objGuerrero, inventarioGuerrero);

//=====================================================================================================
//ARQUERA
const ataqueArquera1 = new AtaquePj(1, "Flecha de cristal", 20);
const ataqueArquera2 = new AtaquePj(2, "Disparo de halcon", 25);
const ataqueArquera3 = new AtaquePj(3, "Flecha de fuego", 20);

const ataqueArquera = [ataqueArquera1, ataqueArquera2, ataqueArquera3];

const objetoArquera1 = new ObjetoPj("arco", 0, 30);
const objetoArquera2 = new ObjetoPj("pechera", 50, 0);
const objetoArquera3 = new ObjetoPj("flecha", 20, 10);

const objArquera = [objetoArquera1, objetoArquera2, objetoArquera3];

const inventarioArquera = [];

const arquera = new Personaje("Arquera", 100, ataqueArquera, objArquera, inventarioArquera);

//=====================================================================================================
//MONSTRUO

const espiritu = new Monstruos("Espiritu", 40, 15);
const huargo = new Monstruos("Huargo", 60, 20);
const orco = new Monstruos("Orco", 70, 30);
const troll = new Monstruos("Troll", 90, 40);
const balrog = new Monstruos("Balrog", 120, 55);


const monstruosArray = [espiritu, huargo, orco, troll, balrog];

//=====================================================================================================
//VARIABLES Y CONSTANTES
let enemigo;
let objeto;
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

function esconderBotonSelecEnemigo(){
    selecEnemigo();
    document.getElementById('btnSeleccionarEnemigo').style.display = 'none';
    document.getElementById('btnComenzar').style.display = 'block';
    let divCajaTexto = document.getElementById('divTexto');
    divCajaTexto.innerText = `La montaña maldita.
Muchos años atrás en Carnicabunstein ,un pueblo cercano a la gran montaña, un grupo de magos forjo una daga mágica. Esta daga le otorga a su portador la habilidad de controlar a los dragones. El pueblo entro en guerra tras guerra ya que todos querían poseer el poder otorgado por el filoso tesoro. Tal fue el daño causado por la daga que sus creadores tomaron la drástica decisión de perderla en las catacumbas de la montaña y sellar la entrada con una maldición.
Cientos de años pasaron y una gran amenaza se fue haciendo más fuerte en el continente. Los ciudadanos de Carnicabunstein necesitan nuevamente la ayuda de los dragones, pero para poder controlarlos la daga deberán recuperar.Estas listo para encontrar la daga y enfrentarte a las maldiciones de los antiguos magos?`;
}

function esconderBotonComenzar() {
    document.getElementById('btnComenzar').style.display = 'none';
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
    document.getElementById('btnTurnoEnemigo').style.display = 'block';
}

function esconderBotonTurnoEnemigo() {
    document.getElementById('btnAtaque1').style.display = 'block';
    document.getElementById('btnAtaque2').style.display = 'block';
    document.getElementById('btnAtaque3').style.display = 'block';
    document.getElementById('btnPocima').style.display = 'block';
    document.getElementById('btnTurnoEnemigo').style.display = 'none';
}

function selecEnemigo(){
    let enemigo = monstruosArray[0];
    console.table(enemigo);
    console.log(enemigo.vida);
    return enemigo;
}

function selecMago() {
    seleccionPersonaje = mago;
    let pjJSON = JSON.stringify(mago);
    localStorage.setItem("Personaje seleccionado", pjJSON);
    console.table(mago);
    esconderBotonPersonajes();
    return seleccionPersonaje;
}

function selecGuerrero() {
    seleccionPersonaje = guerrero;
    let pjJSON = JSON.stringify(guerrero);
    localStorage.setItem("Personaje seleccionado", pjJSON);
    console.table(guerrero);
    esconderBotonPersonajes();
    return seleccionPersonaje;
}

function selecArquera() {
    seleccionPersonaje = arquera;
    let pjJSON = JSON.stringify(arquera);
    localStorage.setItem("Personaje seleccionado", pjJSON);
    console.table(arquera);
    esconderBotonPersonajes();
    return seleccionPersonaje;
}

function dropObjetosArray() {
    seleccionPersonaje.objetos[Math.floor(Math.random() * seleccionPersonaje.objetos.length)];
    return seleccionPersonaje.objetos;
}

function enemigoTurno() {
    if (monstruosArray.length > 0) {
        enemigo = monstruosArray[0];
        if (enemigo.vida < 0 || enemigo.vida == 0) {
            /*             let objeto = dropObjetosArray(seleccionPersonaje);
                        seleccionPersonaje.inventario.push(objeto);
                        const last = seleccionPersonaje.inventario[seleccionPersonaje.inventario.length - 1];
                        console.log(last);
                        seleccionPersonaje.vida += last.vida;
                        seleccionPersonaje.daño += last.daño;
                        console.table(seleccionPersonaje);  */
            monstruosArray.shift();
            console.table(enemigo);
        } else if (enemigo.vida > 0 && enemigo.vida < 16) {
            enemigo.vida += 15;
            console.table(enemigo);
        } else {
            seleccionPersonaje.vida -= enemigo.daño;
            console.table(seleccionPersonaje);
        }
    } else {
        console.log("GANASTE");
    }
    esconderBotonTurnoEnemigo();
}

function pocima() {
    seleccionPersonaje.vida += 25;
    console.table(seleccionPersonaje);
    esconderBotonAtaques();
    return seleccionPersonaje.vida;
}

function ataque01() {
    let ataque1 = seleccionPersonaje.ataques[0];
    console.log(ataque1);
    let indicador = Math.floor(Math.random() * 4) + 1;
    console.log(indicador);
    if (indicador == 4) {
        console.log("Ataque crítico");
        enemigo.vida -= ataque1.daño * 1.5;
    } else {
        enemigo.vida = enemigo.vida - ataque1.daño;
    }
    console.table(enemigo);
    esconderBotonAtaques();
}

function ataque02() {
    let ataque1 = seleccionPersonaje.ataques[1];
    console.log(ataque1);
    let indicador = Math.floor(Math.random() * 8) + 1;
    console.log(indicador);
    if (indicador == 8) {
        console.log("Ataque crítico");
        enemigo.vida -= ataque1.daño * 1.5;
    } else {
        enemigo.vida -= ataque1.daño;
    }
    console.table(enemigo);
    esconderBotonAtaques();
}

function ataque03() {
    let ataque1 = seleccionPersonaje.ataques[2];
    console.log(ataque1);
    let indicador = Math.floor(Math.random() * 4) + 1;
    console.log(indicador);
    if (indicador == 4) {
        console.log("Ataque crítico");
        enemigo.vida -= ataque1.daño * 1.5;
    } else {
        enemigo.vida -= ataque1.daño;
    }
    console.table(enemigo);
    esconderBotonAtaques();
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