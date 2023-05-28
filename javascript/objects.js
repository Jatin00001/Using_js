// making a const,let,var object
const a = {
    name : "Jatin"
}
console.log(a);
// we use const that why we does not change a for example 
// a = 45; //  we try to give singhle number but utsb throw an error
a["place"] = "Delhi"
a["Age"] = 47

// WAY TO ACCESS A OBJECT VALUE!
console.log(typeof (a["Age"])) // 1.) To Type of way to access.
console.log(a.Age); // we use dot and Value name !
