
let a = prompt("Enter Your age ?");
a = Number.parseInt(a);
console.log(a);

if(a<0)
{
    alert("Invalid age")
}
else if(a<9){
    alert("You are a kid. But you can Drive in GTA ")
}
else if(a>=9 && a<=18){
    alert("You are a kid. But you can Think Drive After 18")
}
else{
    alert("You can Drive")
}