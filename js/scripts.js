// Creazione array lista cognomi 
var lista = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
// Chiedere all'utente di inserire il proprio cognome
var cognome = prompt('Inserisci il tuo cognome');
// Trasformare la prima lettera in maiuscolo 
cognome = cognome[0].toUpperCase() + cognome.substring(1);
// Stampare la lista non in ordine 
console.log("La lista non ordinata è", lista);
// Aggiungere il cognome alla lista 
lista.push(cognome)
// Stampare la lista dei cognomi in ordine alfabetico
console.log("La lista ordinata è", lista.sort())
// Posizione umana del cognome inserito rispetto alla lista 
console.log("La tua posizione nell'elenco è", lista.indexOf(cognome)+1)