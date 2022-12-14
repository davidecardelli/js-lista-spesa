// Consegna:
// Data una lista della spesa (inventatela), stampare in pagina gli elementi della lista individualmente con un ciclo while.  (anche brutalmente, basta che si vedano)
// Bonus:
// Provare a stampare sia con i template literals che con i nodi, manipolando il DOM.
// Consigli:
// - Ricordiamoci di inizializzare le variabili  che servono alla condizione FUORI dal ciclo while, altrimenti verranno azzerate ad ogni ciclo
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while

// Creo array con i prodotti
const productList = ["Frutta", "Verdura", "Pasta", "Ortaggi", "Pane"];
console.log(productList.length);

// Prendo elemento dal DOM
const shoppingList = document.getElementById('shopping-list');


// Creo ciclo WHILE che mi stampi all'interno del DOM ogni singolo elemento dell'array

elementList = '';
i = 0;

while (i < productList.length) {
    elementList += `<li> ${productList[i]} </li>`;
    i++
}

shoppingList.innerHTML = elementList;

