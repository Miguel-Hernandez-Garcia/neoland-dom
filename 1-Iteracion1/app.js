/*1.1 Usa querySelector para mostrar por consola el botón con la clase .showme*/

const showShowMe = document.querySelector(".showme");
console.log("🚀 ~ showShowMe:", showShowMe);

/*1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado*/

const showPillado = document.querySelector("#pillado");
console.log("🚀 ~ showPillado:", showPillado);

/*1.3 Usa querySelector para mostrar por consola todos los p*/

const showAllP = document.querySelectorAll("p");
console.log("🚀 ~ showAllP:", showAllP);

/*1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon*/

const showAllPokemon = document.querySelectorAll(".pokemon");
console.log("🚀 ~ showAllPokemon:", showAllPokemon);

/*1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".*/

const showAllTestMe = document.querySelectorAll("[data-function='testMe']");
console.log("🚀 ~ showAllTestMe:", showAllTestMe);

/*1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".*/

console.log(showAllTestMe[2]);