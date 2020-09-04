function numGenerator (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// array vuoto
var randomNumber = [];
var userArrayNumbers = [];
// push 5 numeri in array
for(i=0; i<5; i++){
 randomNumber.push(numGenerator(1,100)) ;
}

// espongo i numeri
function tempAlert(msg,duration)
{
 var el = document.createElement("div");
 el.setAttribute("style","position:absolute;top:40%;left:20%;background-color:white;");
 el.innerHTML = msg;
 setTimeout(function(){
  el.parentNode.removeChild(el);
 },duration);
 document.body.appendChild(el);
}

tempAlert(randomNumber,30000);

setTimeout(
  function(){
    for(i=0; i<5; i++) {
      var userNumber = parseInt(prompt("Inserisci 1 dei 5 numeri che hai visto prima"));
      userArrayNumbers.push(userNumber);
    }
  },31000);


console.log(randomNumber);
console.log(userArrayNumbers);

// RISULTATO
var equalNumbers = [];

setTimeout(
  function(){
    for (i=0; i<5; i++) {
      randomNumber.sort();
      userArrayNumbers.sort();
      if (randomNumber[i] == userArrayNumbers[i]){
        equalNumbers.push(userArrayNumbers[i]);
      }
    }
    alert("hai preso" + equalNumbers.length +""+"numeri su 5");
  },32000);
console.log(equalNumbers)
