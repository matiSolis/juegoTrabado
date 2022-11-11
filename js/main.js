// CONSTRUCTORES DEL JUEGO 
class Monstruos {
    constructor(tipo, vida, daño) {
        this.tipo = tipo;
        this.vida = vida;
        this.daño = daño;
    }
}

//=====================================================================================================
//MONSTRUO

const espiritu = new Monstruos("Espiritu", 40, 5);
const huargo = new Monstruos("Huargo", 60, 15);
const orco = new Monstruos("Orco", 70, 20);
const troll = new Monstruos("Troll", 80, 25);
const balrog = new Monstruos("Balrog", 90, 30);


const monstruosArray = [espiritu, huargo, orco, troll, balrog];

//=====================================================================================================
//VARIABLES Y CONSTANTES
let enemigo;
let indicador;
let critico;
let pjJSON;
let seleccionPersonaje;
let ataque1;
let ataque2;
let ataque3;

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
    vidaPj.innerText = `${seleccionPersonaje.tipo} vida ${seleccionPersonaje.vida}`;
    document.getElementById('btnSeleccionarEnemigo').style.display = 'none';
    document.getElementById('btnComenzar').style.display = 'block';
    let divCajaTexto = document.getElementById('divTexto');
    divCajaTexto.innerText = `La montaña maldita
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
}

function esconderBotonTurnoEnemigo() {
    document.getElementById('btnAtaque1').style.display = 'block';
    document.getElementById('btnAtaque2').style.display = 'block';
    document.getElementById('btnAtaque3').style.display = 'block';
    document.getElementById('btnPocima').style.display = 'block';
    document.getElementById('btnTurnoEnemigo').style.display = 'none';
}

function selecEnemigo() {
    if (monstruosArray.length > 0) {
        enemigo = monstruosArray[0];
        return enemigo;
    } else {
        Swal.fire({
            title: 'LA DAGA ES NUESTRA!',
            text: 'Derrotas al ultimo enemigo y la daga se revela ante nosotros. Con ella lograremos controlar a los dragones!. La victoria de nuestro pueblo es inminente. FELICITACIONES, ERES UN HEROE!',
            imageUrl: './assets/dagaDragon.jpg',
            imageWidth: 200,
            imageHeight: 200,
            background: '#282626',
            imageAlt: 'Victoria',
        })
        document.getElementById('btnComenzar').style.display = 'none';
    }
}

const selecMago = () => {
    fetch("data/data.json")
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((mago) => {
            seleccionPersonaje = mago[0];
            let pjJSON = JSON.stringify(mago[0]);
            localStorage.setItem("Personaje seleccionado", pjJSON);
            esconderBotonPersonajes();
            return seleccionPersonaje;
        })
        .catch((error) => {
            console.log("ERROR" + error);
        })
}

const selecGuerrero = () => {
    fetch("data/data.json")
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((guerrero) => {
            seleccionPersonaje = guerrero[1];
            let pjJSON = JSON.stringify(guerrero[1]);
            localStorage.setItem("Personaje seleccionado", pjJSON);
            esconderBotonPersonajes();
            return seleccionPersonaje;
        })
        .catch((error) => {
            console.log("ERROR" + error);
        })
}

const selecArquera = () => {
    fetch("data/data.json")
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((arquera) => {
            seleccionPersonaje = arquera[2];
            let pjJSON = JSON.stringify(arquera[2]);
            localStorage.setItem("Personaje seleccionado", pjJSON);
            esconderBotonPersonajes();
            return seleccionPersonaje;
        })
        .catch((error) => {
            console.log("ERROR" + error);
        })
}

function enemigoTurno() {
    if (enemigo.vida <= 0) {
        Swal.fire({
            title: 'El enemigo muere',
            text: 'Derrotas a tu enemigo y sigues bajando por la montaña. Descanza, nuevos peligros nos esperan.',
            imageUrl: './assets/muerto.jpg',
            imageWidth: 200,
            imageHeight: 200,
            background: '#282626',
            imageAlt: 'Victoria parcial',
        })
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
        let indicador = Math.floor(Math.random() * 4) + 1;
        if (indicador == 4) {
            seleccionPersonaje.vida -= enemigo.daño * 1.5;
            vidaMonstruo.innerText = `${enemigo.tipo} vida ${enemigo.vida}`;
            vidaPj.innerText = `${seleccionPersonaje.tipo} vida ${seleccionPersonaje.vida}`;
        } else {
            seleccionPersonaje.vida -= enemigo.daño;
            vidaMonstruo.innerText = `${enemigo.tipo} vida ${enemigo.vida}`;
            vidaPj.innerText = `${seleccionPersonaje.tipo} vida ${seleccionPersonaje.vida}`;
            esconderBotonTurnoEnemigo();
        }
    }
}

function pocima() {
    seleccionPersonaje.vida += 30;
    vidaMonstruo.innerText = `${enemigo.tipo} vida ${enemigo.vida}`;
    vidaPj.innerText = `${seleccionPersonaje.tipo} vida ${seleccionPersonaje.vida}`;
    esconderBotonAtaques();
    document.getElementById('btnTurnoEnemigo').style.display = 'block';
    return seleccionPersonaje.vida;
}

function ataque01() {
    let ataque1 = seleccionPersonaje.ataque1;
    if (seleccionPersonaje.vida <= 0) {
        Swal.fire({
            title: 'GAME OVER',
            text: `La muerte te ha alcanzado joven ${seleccionPersonaje.tipo}. Tu alma quedara encerrada en la montaña por el resto de la eternidad`,
            imageUrl: './assets/tumba.jpg',
            imageWidth: 200,
            imageHeight: 200,
            background: '#282626',
            imageAlt: 'Muerte',
        })
        esconderBotonAtaques();
    } else {
        let indicador = Math.floor(Math.random() * 4) + 1;
        if (indicador == 4) {
            enemigo.vida -= ataque1 * 1.5;
            vidaMonstruo.innerText = `${enemigo.tipo} vida ${enemigo.vida}`;
            vidaPj.innerText = `${seleccionPersonaje.tipo} vida ${seleccionPersonaje.vida}`;
        } else {
            enemigo.vida -= ataque1;
            vidaMonstruo.innerText = `${enemigo.tipo} vida ${enemigo.vida}`;
            vidaPj.innerText = `${seleccionPersonaje.tipo} vida ${seleccionPersonaje.vida}`;
        }
        esconderBotonAtaques();
        document.getElementById('btnTurnoEnemigo').style.display = 'block';
    }
}

function ataque02() {
    let ataque2 = seleccionPersonaje.ataque2;
    if (seleccionPersonaje.vida <= 0) {
        Swal.fire({
            title: 'GAME OVER',
            text: `La muerte te ha alcanzado joven ${seleccionPersonaje.tipo}. Tu alma quedara encerrada en la montaña por el resto de la eternidad`,
            imageUrl: './assets/tumba.jpg',
            imageWidth: 200,
            imageHeight: 200,
            background: '#282626',
            imageAlt: 'Muerte',
        })
        esconderBotonAtaques();
    } else {
        let indicador = Math.floor(Math.random() * 8) + 1;
        if (indicador == 8) {
            enemigo.vida -= ataque2 * 1.5;
            vidaMonstruo.innerText = `${enemigo.tipo} vida ${enemigo.vida}`;
            vidaPj.innerText = `${seleccionPersonaje.tipo} vida ${seleccionPersonaje.vida}`;
        } else {
            enemigo.vida -= ataque2;
            vidaMonstruo.innerText = `${enemigo.tipo} vida ${enemigo.vida}`;
            vidaPj.innerText = `${seleccionPersonaje.tipo} vida ${seleccionPersonaje.vida}`;
        }
        esconderBotonAtaques();
        document.getElementById('btnTurnoEnemigo').style.display = 'block';
    }
}

function ataque03() {
    let ataque3 = seleccionPersonaje.ataque3;
    if (seleccionPersonaje.vida <= 0) {
        Swal.fire({
            title: 'GAME OVER',
            text: `La muerte te ha alcanzado joven ${seleccionPersonaje.tipo}. Tu alma quedara encerrada en la montaña por el resto de la eternidad`,
            imageUrl: './assets/tumba.jpg',
            imageWidth: 200,
            imageHeight: 200,
            background: '#282626',
            imageAlt: 'Muerte',
        })
        esconderBotonAtaques();
    } else {
        let indicador = Math.floor(Math.random() * 4) + 1;
        if (indicador == 4) {
            enemigo.vida -= ataque3 * 1.5;
            vidaMonstruo.innerText = `${enemigo.tipo} vida ${enemigo.vida}`;
            vidaPj.innerText = `${seleccionPersonaje.tipo} vida ${seleccionPersonaje.vida}`;
        } else {
            enemigo.vida -= ataque3;
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