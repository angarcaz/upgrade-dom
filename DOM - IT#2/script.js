'use strict'

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const newDiv = document.createElement('div');
document.body.append(newDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
newDiv.innerHTML += ("<p>Soy un párrafo insertado desde javascript</p>")

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const sixDiv = document.createElement('div');
const sixDivParrafo = document.createElement('p');
sixDiv.append(sixDivParrafo);

for (let i = 1; i < 7; i++) {
    const sixDivParrafo = document.createElement('p');
    sixDivParrafo.innerText = 'Párrafo ' + i;
    sixDiv.append(sixDivParrafo);
}

document.body.append(sixDiv);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const miParrafo = document.createElement('p');
miParrafo.innerText = ('soy dinámico!');
document.body.append(miParrafo);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const miH2 = document.querySelector('.fn-insert-here');
miH2.innerText = 'Wubba Lubba dub dub';

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista = document.createElement("ul");

for(let i=0; i<apps.length; i++){
    const listItem = document.createElement("li");
    listItem.innerText = apps[i];
    lista.append(listItem);
}
document.body.append(lista);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const eliminar = document.querySelectorAll('.fn-remove-me');
    for (let i = 0; i < eliminar.length; i++) {
        eliminar[i].remove();        
    }

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const parrafoB = document.createElement('p');
const emptyDiv = document.querySelectorAll('div');
parrafoB.innerText = 'Voy en medio!';
document.body.insertBefore(parrafoB, emptyDiv[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const insertar = document.querySelectorAll('.fn-insert-here');

for (let i = 0; i < insertar.length; i++) {
        const miTexto = document.createElement('p');
        miTexto.innerHTML = "Voy dentro!";
        insertar[i].append(miTexto);
    }

