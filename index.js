// Code your solutions in this file

for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`)
    debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);



//const peeps = ["Charlie", "Samip", "Ali"];


function writeCards(arrayOfPeeps, event){

    let i = 0;
    let giftMessages = [];
    while (i < arrayOfPeeps.length){
        
        
        giftMessages[i] = `Thank you, ${arrayOfPeeps[i]}, for the wonderful ${event} gift!`; 
        
        i++;

    }
    return giftMessages;
    
}

function countDown(number){
    let i = 0;
    while (number >= i){
        console.log(number);
        number = number -1; 
    }

}
