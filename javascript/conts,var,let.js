// zada tar conts use krna chaiye!

// var :- var esleai use ne krte kyuke var ko hum coding krte vakt same name s bnana de to var error throw nahi krta h esleai ne krte use !
// ab java script (ES6) mai var ek global variable bnata h esleai var zada use ne krte !
//  var ko hum chahe block me lekhe ya bahr lekhe but vo global h 



// let : - let use krne s hum ek br he use krte h and error throw krta h !
//   1) let ek scope use h 1)


// const a = 45
// console.log(a);

// const b = 45.45
// console.log(b);
// console.log(typeof(b))
// const Admin = "Jatin";
// console.log(typeof(Admin))

const admindetails = {
    name : "Jatin", // objects have key and value pair`
    Date : "none" // Date is -- Key & none --> value
}
console.log("admin details is ",admindetails)
const Details_of_student = {
    "name" : "Jatin",
    "phone_num" : "931212335",
    "Marks": 64,
    "Pass" : true,
    "Fail": false,
    49 : "fourty nine"
}
// console.log("Student Details",Details_of_student)

// console.log(Details_of_student[49] = 10)

// console.log("Student Details",Details_of_student)
// for(let item of Object.keys(Details_of_student)){
//     console.log(item)
// }
// for(let item of Object.values(Details_of_student)){
//     console.log(item)
// }
for(let i of Object.values(admindetails)){
    console.log(typeof i)
}