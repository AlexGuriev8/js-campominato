/* Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
    BONUS: (da fare solo se funziona tutto il resto)
all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50 */
var list = [];
var numeriUtente = [];
var i = 0;
var cerca = false;

while(list.length < 16 ){
    var numero = getRndInteger(1, 100);
    var elemento = trovaElemento(list, numero);
     if (elemento != true){
        list.push(numero);
    } 
    i++;
}
console.log(list);

while (numeriUtente.length < 5) {
    var numeroUtente = parseInt(prompt('Inserisci un numero'));
    var numeroTrovato = trovaElemento(numeriUtente, numeroUtente);
    
    if (trovaElemento(numeriUtente, numeroUtente)) {
        alert('Non puoi inserire lo stesso numero');
    }
    switch (trovaElemento(list, numeroUtente)) {
        case true:
            alert('Hai perso');
            console.log('Hai inserito un numero consentito ' + numeriUtente.length + ' volte');
            console.log(numeriUtente);
            numeriUtente= [];
            break;
        case false:
            numeriUtente.push(numeroUtente);  
    }
    if (numeriUtente.length == (5)) {
        console.log('Hai vinto in ' + numeriUtente.length + ' tentativi');
        console.log(numeriUtente);
    }
    i++;
}






//function

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function trovaElemento(lista, elemento) {
    var messaggio = false;
     var i=0;
     while (i < lista.length && messaggio == false) {
         if( elemento == lista[i]){
             messaggio = true;
         }
         i++;
     }
     return messaggio;
 }