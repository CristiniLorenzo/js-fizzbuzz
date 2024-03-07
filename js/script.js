// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”

// STAMPO I NUMNERI DA 1 A 100 
for(let i = 1; i <=100; i++) {
    console.log(i);
    
    let fizOrBuzz;

    // SE MULTIPLI SIA DI 3 CHE DI 5 SCRIVO FIZZBUZZ
    if (i % 5 === 0 & i % 3 === 0) {
        fizOrBuzz = i + ` fizzBuzz`;
        console.log(fizOrBuzz)
    }

    // SE MULTIPLI DI 3 SCRIVO FIZZ
    else if (i % 3 === 0) {
        fizOrBuzz = i + ` fizz`;
        console.log(fizOrBuzz)
    }
    // SE MULTIPLI DI 5 SCRIVO BUZZ
     else if (i % 5 === 0) {
        fizOrBuzz = i + ` buzz`;
        console.log(fizOrBuzz)
    }

    

}