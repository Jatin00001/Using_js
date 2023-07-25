// let n = Math.random() * 100;
let n = Math.floor((Math.random() * 100) + 1);
// console.log( n)

// taking first
let chances = 1;
let user;
while(1){
    user = prompt("Enter a number")
    user = Number.parseInt(user);
    if(user == n){
        console.log("You did it")
        break;
    }
    else if(user < n)
    {
        alert("Your number is smaller --- type bigger num!")
        chances++;
    }
    else{
        alert("YOur number is bigger  ---- type smaller num!")
        chances++;
    }
}
console.log("max score : - ",100 - chances);