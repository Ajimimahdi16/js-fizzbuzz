//Scrivi un programma che stampi i numeri da 1 a 100,
for (let i = 0; i <= 100; i++) {  //scrittura programmma con ripetizione fino a 100
    //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    if (i % 3 === 0 && i % 5 === 0 ) { //condizione per multipli di 3 e 5
        console.log("FizzBuzz");  //stampa FizzBuzz
    }
    //ma per i multipli di 3 stampi “Fizz” al posto del numero
    else if ( i % 3 === 0 ) { //condizione per multipli di 3
        console.log("Fizz");  //stampa Fizz
    }
    else if ( i % 5 === 0 ) { //condizione per multipli di 5
        console.log("Buzz");  //stampa Buzz
    }
    //  e per i multipli di 5 stampi Buzz.
    else {
        console.log(i);  //stampa il numero
    }

 
}
 
//importante per non dimenticare per le prossime esercitazioni 

// % serve per calcolare e indicare se il numero e multiplo di un altro numero
// === serve per indicare che il valore a sinistra e uguale al valore a destra
// && serve per indicare che devono essere vere entrambe le condizioni
// i++ serve per indicare che il valore di i aumenta di 1 ogni ciclo
    






