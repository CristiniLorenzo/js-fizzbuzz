// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”

const numberContainer = document.querySelector('#container')

// STAMPO I NUMNERI DA 1 A 100 
for(let i = 1; i <=100; i++) {
    // console.log(i);
    
    let message ;
    let cssClass;
    // SE MULTIPLI SIA DI 3 CHE DI 5 SCRIVO FIZZBUZZ
    if (i % 5 === 0 && i % 3 === 0) {
        message = 'fizzBuzz';
        cssClass = 'fizz-buzz'
    }

    // SE MULTIPLI DI 3 SCRIVO FIZZ
    else if (i % 3 === 0) {
        message = 'fizz';
        cssClass = 'fizz'
    }
    // SE MULTIPLI DI 5 SCRIVO BUZZ
     else if (i % 5 === 0) {
        message = 'Buzz';
        cssClass = 'buzz'
    }
    else {
        message = i
        cssClass = 'base-color'
    }
    // console.log(message);

    // aggiungere div all html 
    
    const newBox = `<div class="box ${cssClass}">${message}</div>`;
    numberContainer.innerHTML += newBox;

    // const newBox = document.createElement('div');
    // newBox.innerHTML = message;
    // newBox.classList.add('box');
    // newBox.classList.add(cssClass);
    // numberContainer.append(newBox)

}