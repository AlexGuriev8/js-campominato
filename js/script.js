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
var trovato = false;
do{
    var scelta = parseInt(prompt('Inserisci un numero per la scelta 0, 1 oppure 2)'));
} while(scelta >2 || scelta <0);


switch (scelta) {
    case 0:
        var  massimo = 100;
    break;
    case 1:
        var  massimo = 80;
    break;
    case 2:
        var  massimo = 50;
    break;

    default:
        var massimo = 100;
        break;
}

while(list.length < 16 ){
    var numero = getRndInteger(1, massimo);
    if (!trovaElemento(list, numero)){
        list.push(numero);
    } 
    i++;
}
console.log(list);


var possibilita = massimo - list.length;

while(numeriUtente.length < possibilita && trovato ==false) {
    var numeroUtente = parseInt(prompt('Inserisci un numero da 1 a '+ massimo));
    while (numeroUtente <= 0 || numeroUtente > massimo){
        var numeroUtente = parseInt(prompt('Attenzione, hai inserito un numero fuori dal range! Inserisci un numero da 1 a' + massimo));
    }
  
    //controllo se il numero è una bomba
    if (trovaElemento(list, numeroUtente)){
        trovato = true;
    } else if (trovaElemento(numeriUtente, numeroUtente) == false) {
        numeriUtente.push(numeroUtente);
    } else {
        alert('Il numero è gia presente')
    }
}
console.log(numeriUtente);


if(trovato){
    alert('Hai perso! Con punteggio ' + numeriUtente.length)
    
}else {
    alert('Hai vinto');
}

/* while (numeriUtente.length < (max - 16)) {
    var numeroUtente = parseInt(prompt('Inserisci un numero'));
    var numeroTrovato = trovaElemento(numeriUtente, numeroUtente);
    
    if (trovaElemento(numeriUtente, numeroUtente)) {
        alert('Non puoi inserire lo stesso numero');
    } else if ((numeroUtente < min || numeroUtente > max)){
        alert('Il numero non rientra nel range');
    } else{
        switch (trovaElemento(list, numeroUtente)) {
            case true:
                alert('Hai perso');
                console.log('Hai inserito un numero consentito ' + numeriUtente.length + ' volte');
                console.log(numeriUtente);
                numeriUtente = [];
                break;
            case false:
                numeriUtente.push(numeroUtente);
                break;
        }
        if (numeriUtente.length == (max - 16)) {
            console.log('Hai vinto in ' + numeriUtente.length + ' tentativi');
            console.log(numeriUtente);
        }
    }
    
    i++;
} */


//function

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function trovaElemento(lista, elemento) {
     var i=0;
     while (i < lista.length ) {
         if( elemento == lista[i]){
             return  true;
         }
         i++;
     }
     return false;
 }