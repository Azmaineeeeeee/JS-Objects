// Access the golden rod color value in output.

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// TASK 1 

const colors = {
        red: "#ff0000",
        green: "#00ff00",
        blue: "#0000ff",
        "golden rod": '#daa520'
    }; 
console.log(colors["golden rod"]);

// For this object below add a property named passenger capacity with value 5

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// TASK-2

const car = {
        make: "Toyota",
        model: "Corolla",
        year: 2020
    };

car.passenger = 5;
console.log(car);

// TASK-3
// Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(student.physics.marks);

// TASK-4
// Count the number of properties.



let student1 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let propertySum = 0;
for(const keys in student1){
    propertySum++;
}
console.log(propertySum);


// TASK-5 (Hard)
// Loop through an object and print the key-value pairs with their types

// Output:
// key: name | type:  string
// key: age | type:  number
// key: city | type:  string
// key: isStudent | type:  boolean

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };

for(const key in myObject){
    const dataType = typeof(myObject[key]);
    console.log(`key: ${key} | ${dataType}`);
}