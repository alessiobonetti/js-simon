function numGenerator (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// array vuoto
var randomNumber = [];
// push 5 numeri in array
for(i=0; i<5; i++){
 randomNumber.push(numGenerator(1,100)) ;
}

// espongo i numeri
