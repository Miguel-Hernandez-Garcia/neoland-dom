/*2.1 Inserta dinamicamente en un html un div vacio con javascript.*/

const insertEmptyDiv = document.createElement("div");
document.body.appendChild(insertEmptyDiv);

/*2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.*/

const insertDivWithP = document.createElement("div");
const pInserted = document.createElement("p");
pInserted.textContent = "Esta p está insertada dentro del div";
insertDivWithP.appendChild(pInserted);
document.body.appendChild(insertDivWithP);

/*2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.*/

const DivWithSixPs = document.createElement("div");

for (let i=0; i<6; i++){
    const newP = document.createElement("p");
    newP.textContent = `Esta es una nueva p con el índice ${i + 1}`;

    DivWithSixPs.appendChild(newP);
}

document.body.appendChild(DivWithSixPs);

/*2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.*/

const pDinamica = document.createElement("p");
pDinamica.textContent = `Soy dinámica!`;
document.body.appendChild(pDinamica);

/*2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.*/

const hTwoInsert = document.querySelector("h2.fn-insert-here");
hTwoInsert.textContent = `Wubba Lubba dub dub`;


/*2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const uListApps = document.createElement("ul");

apps.forEach((app)=>{
    const newLi=document.createElement("li");
    newLi.textContent= app
    uListApps.appendChild(newLi)
})

document.body.appendChild(uListApps);

/*2.7 Elimina todos los nodos que tengan la clase .fn-remove-me*/

const removeAllFunction = document.querySelectorAll(".fn-remove.me");

removeAllFunction.forEach((element)=>{
    element.remove();
});

/*2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.*/

    const pInTheMiddle = document.createElement("p");
    pInTheMiddle.textContent = `Voy en medio!`;

    const divsToInsert = document.querySelector("div.fn-insert-here");
    const secondDiv = divsToInsert[1];
    document.body.insertBefore(pInTheMiddle, secondDiv);

/*2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here*/

const pVoyDentro = document.createElement("P");
pVoyDentro.textContent = `Voy dentro!`;
const divsVoyDentro = document.querySelectorAll("div.fn-insert-here");
divsVoyDentro.forEach((element) =>{
    element.appendChild(pVoyDentro)
})