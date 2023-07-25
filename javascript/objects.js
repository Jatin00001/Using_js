// making a const,let,var object
const a = {
    AdmiN : "Jatin",
    firstName : "jatin",
    lastName : "jatin",
    fullName : function() {
        return this.firstName + " " + this.lastName;
        // return( this.firstName + " " + this.lastName);
      }
}
// let full  = a.fullName();
console.log(a.fullName())
// we use const that why we does not change a for example 
// a = 45; //  we try to give singhle number but utsb throw an error
// a["place"] = "Delhi"
// a["Age"] = 47

// WAY TO ACCESS A OBJECT VALUE!
// console.log(typeof (a["Age"])) // 1.) To Type of way to access.
// console.log(a.Age); // we use dot and Value name !


// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   let name1 = person.fullName();
//   console.log(typeof(name1))
