// let n = Math.random() * 100;
let n = Math.floor((Math.random() * 100) + 1);
// console.log( n)
let chances = 0;

// taking first
let user;
while(1){
    user = prompt("Enter a number")
    user = Number.parseInt(user);
    if(user == n){
        console.log("You did it")
        
        break;
    }
}