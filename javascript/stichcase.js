let a = prompt("Enter fruit  name is ")
switch (a){
    case "apple" :
        console.log(`this is ${a} section and its price is $44`)
        alert(`this is ${a} section and its price is $44`)
        break;
    case "papaya" :
        console.log(`this is ${a} section and its price is $40`);
        alert(`this is ${a} section and its price is $40`);
        break;
    default:    
        console.log("Not in our data");
        alert("Not in our data")
}