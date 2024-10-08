// Importamos la clase Pokemon desde el archivo Pokemon.js
import Champ from './Champ.js';

// Creamos un array para los 151 pokemons que obtendremos desde la API
var champs = [];

const welcome = new Audio('../assets/songs/welcome.mp3');

// Seleccionamos el elemento button del DOM usando querySelector 
const button = document.querySelector("button");
// Agregamos un event listener al botón para que se mantenga a la espera de hacer click en él
// Cuando se recibe el click, se ejecuta la función flecha
button.addEventListener("click", () => {
    
    welcome.play();
    // Al hacer click sobre el botón, cambiamos su visibilidad y lo ocultamos
    document.querySelector('#button').style.visibility = 'hidden';
    // También cambiamos la visibilidad del elemento #pokedex, y lo mostramos en pantalla
    document.querySelector('#wiki').style.visibility = 'visible';
    // LLamada a la función startPokedex() que comenzará el proceso de mostrar los Pokemon
    startWiki();
});

const startWiki = async () => {

    await fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json")
    .then(function (result) {
        return result.json();

    }).then(function (result) {
        for (let champion in result.data) {
            let data = result.data[champion];
            let champ = new Champ(data);
            champ.setImg(`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg`);
            champ.setSkin(`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_1.jpg`);
            pushChamp(champ);
            console.log(champ);
        }
    });

    await showWiki();
};

// Esta función añade el Pokemon que se le pasa como parámetro al array
function pushChamp(champ) {
    champs.push(champ);
}

// Esta función se encarga de mostrar en el DOM los Pokemon que se han obtenido y almacenado en el array 
const showWiki = async () => {
    // Se obtiene una referencia al elemento con el ID pokedex en el DOM donde se insertarán las tarjetas de los Pokemon.
    const wiki = document.getElementById("wiki");

    for(var i = 0; i < champs.length; i++) {
        //Maná,Pozo sangriento,Energía,Ferocidad,Escudo,Furia,Flujo,Coraje,Calor,Ráfaga carmesí 

        switch (champs[i].barra){
            case "Pozo sangriento":
                wiki.innerHTML +=    `<div class="card">
                                    <img  src="${champs[i].img}">
                                    <img class="front" src="${champs[i].skin}">
                                    <div class="textoCard">
                                        <div class="nombreTitulo">
                                            <div class="nombre">
                                                ${champs[i].name}
                                            </div>
                                            <div class="titulo">
                                                ${champs[i].title}
                                            </div>
                                        </div>
                                        <div class="PozoSangriento">
                                            ${champs[i].barra}
                                        </div>
                                    </div>
                                </div>`
                break;
            case "Energía":
                wiki.innerHTML +=    `<div class="card">
                                    <img  src="${champs[i].img}">
                                    <img class="front" src="${champs[i].skin}">
                                    <div class="textoCard">
                                        <div class="nombreTitulo">
                                            <div class="nombre">
                                                ${champs[i].name}
                                            </div>
                                            <div class="titulo">
                                                ${champs[i].title}
                                            </div>
                                        </div>
                                        <div class="Energía">
                                            ${champs[i].barra}
                                        </div>
                                    </div>
                                </div>`
                break;
            case "Ferocidad":
                wiki.innerHTML +=    `<div class="card">
                                    <img  src="${champs[i].img}">
                                    <img class="front" src="${champs[i].skin}">
                                    <div class="textoCard">
                                        <div class="nombreTitulo">
                                            <div class="nombre">
                                                ${champs[i].name}
                                            </div>
                                            <div class="titulo">
                                                ${champs[i].title}
                                            </div>
                                        </div>
                                        <div class="Ferocidad">
                                            ${champs[i].barra}
                                        </div>
                                    </div>
                                </div>`
                break;
            case "Escudo":
                wiki.innerHTML +=    `<div class="card">
                                    <img  src="${champs[i].img}">
                                    <img class="front" src="${champs[i].skin}">
                                    <div class="textoCard">
                                        <div class="nombreTitulo">
                                            <div class="nombre">
                                                ${champs[i].name}
                                            </div>
                                            <div class="titulo">
                                                ${champs[i].title}
                                            </div>
                                        </div>
                                        <div class="Escudo">
                                            ${champs[i].barra}
                                        </div>
                                    </div>
                                </div>`
                break;
            case "Furia":
                wiki.innerHTML +=    `<div class="card">
                                    <img  src="${champs[i].img}">
                                    <img class="front" src="${champs[i].skin}">
                                    <div class="textoCard">
                                        <div class="nombreTitulo">
                                            <div class="nombre">
                                                ${champs[i].name}
                                            </div>
                                            <div class="titulo">
                                                ${champs[i].title}
                                            </div>
                                        </div>
                                        <div class="Furia">
                                            ${champs[i].barra}
                                        </div>
                                    </div>
                                </div>`
                break;
            case "Flujo":
                wiki.innerHTML +=    `<div class="card">
                                    <img  src="${champs[i].img}">
                                    <img class="front" src="${champs[i].skin}">
                                    <div class="textoCard">
                                        <div class="nombreTitulo">
                                            <div class="nombre">
                                                ${champs[i].name}
                                            </div>
                                            <div class="titulo">
                                                ${champs[i].title}
                                            </div>
                                        </div>
                                        <div class="Flujo">
                                            ${champs[i].barra}
                                        </div>
                                    </div>
                                </div>`
                break;
            case "Coraje":
                wiki.innerHTML +=    `<div class="card">
                                    <img  src="${champs[i].img}">
                                    <img class="front" src="${champs[i].skin}">
                                    <div class="textoCard">
                                        <div class="nombreTitulo">
                                            <div class="nombre">
                                                ${champs[i].name}
                                            </div>
                                            <div class="titulo">
                                                ${champs[i].title}
                                            </div>
                                        </div>
                                        <div class="Coraje">
                                            ${champs[i].barra}
                                        </div>
                                    </div>
                                </div>`
                break;
            case "Calor":
                wiki.innerHTML +=    `<div class="card">
                                    <img  src="${champs[i].img}">
                                    <img class="front" src="${champs[i].skin}">
                                    <div class="textoCard">
                                        <div class="nombreTitulo">
                                            <div class="nombre">
                                                ${champs[i].name}
                                            </div>
                                            <div class="titulo">
                                                ${champs[i].title}
                                            </div>
                                        </div>
                                        <div class="Calor">
                                            ${champs[i].barra}
                                        </div>
                                    </div>
                                </div>`
                break;
            case "Ráfaga carmesí":
                wiki.innerHTML +=    `<div class="card">
                                    <img  src="${champs[i].img}">
                                    <img class="front" src="${champs[i].skin}">
                                    <div class="textoCard">
                                        <div class="nombreTitulo">
                                            <div class="nombre">
                                                ${champs[i].name}
                                            </div>
                                            <div class="titulo">
                                                ${champs[i].title}
                                            </div>
                                        </div>
                                        <div class="RáfagaCarmesí">
                                            ${champs[i].barra}
                                        </div>
                                    </div>
                                </div>`
                break;
                case "Maná":
                    wiki.innerHTML +=    `<div class="card">
                                        <img  src="${champs[i].img}">
                                        <img class="front" src="${champs[i].skin}">
                                        <div class="textoCard">
                                            <div class="nombreTitulo">
                                                <div class="nombre">
                                                    ${champs[i].name}
                                                </div>
                                                <div class="titulo">
                                                    ${champs[i].title}
                                                </div>
                                            </div>
                                            <div class="Maná">
                                                ${champs[i].barra}
                                            </div>
                                        </div>
                                    </div>`
                    break;
            default:
                wiki.innerHTML +=    `<div class="card">
                                    <img  src="${champs[i].img}">
                                    <img class="front" src="${champs[i].skin}">
                                    <div class="textoCard">
                                        <div class="nombreTitulo">
                                            <div class="nombre">
                                                ${champs[i].name}
                                            </div>
                                            <div class="titulo">
                                                ${champs[i].title}
                                            </div>
                                        </div>
                                        <div class="nada">
                                            ${champs[i].barra}
                                        </div>
                                    </div>
                                </div>`
        }
    
    }
}
