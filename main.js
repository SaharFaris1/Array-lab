
// Array



let characters = [
    { name: "Luke Skywalker", height: 177, gender: "male", mass: 77, eyeColor: "brown" },
    { name: "Leia Organa", height: 160, gender: "female", mass: 56, eyeColor: "blue" },
    { name: "Han Solo", height: 180, gender: "male", mass: 80, eyeColor: "brown" },
    { name: "Chewie", height: 222, gender: "male", mass: 190, eyeColor: "black" },
    { name: "kevien", height: 106, gender: "male", mass: 32.2, eyeColor: "red" },
];

  //Map

  let names = characters.map(function(character) {
    return character.name;
});

let heights = characters.map(function(character) {
    return character.height;
});

console.log(names);
console.log(heights);

console.log(names);
console.log(heights);



//reduce

let totalHeight = characters.reduce(function(accumulator, character) {
    return accumulator + character.height; 
}, 0);

console.log(totalHeight);

//filter 


let lesheight = characters.filter(function(character) {
    return character.height < 200;
});


let maleCharacters = characters.filter(function(character) {
    return character.gender === "male";
});

console.log(lesheight);
console.log(maleCharacters);



//sort

let sortByMass = characters.slice().sort(function(a, b) {
    return a.mass - b.mass; 
});

const sortByHeight = characters.slice().sort(function(a, b) {
    return a.height - b.height; 
});

console.log( sortByMass);
console.log(sortByHeight);


// every 


let massMoreThan40 = characters.every(function(character) {
    return character.mass > 40; 
});


const shorterThan200 = characters.every(function(character) {
    return character.height < 200; 
});

console.log(massMoreThan40);
console.log( shorterThan200);

// some 
let blueEyes = characters.some(function(character) {
    return character.eyeColor === "blue"; 
});


let tallerThan210 = characters.some(function(character) {
    return character.height > 210; 
});

console.log(blueEyes);
console.log( tallerThan210);


let students= [ "Ali", "Sara", "Ahmed", "Lana", "Omar", "Noor"]


// start with A or a
let nameStudent = students.filter(function(student) {
    return student.startsWith("A") || student.startsWith("a");
});

console.log( nameStudent);

// length > 4


let count = students.filter(function(student) {
    return student.length > 4; 
})

console.log(count);


// upper case
let upperCase = students.map(function(student) {
    return student.toUpperCase()
})

console.log(upperCase);

// lower case

let lower = students.map(function(student) {
    return student.toLowerCase()
})

console.log(lower);

// start with R

let firsR = students.find(function(student) {
    return student.includes("r"); 
});

console.log(firsR);

// alphabet

let AlphStudents = students.sort();


console.log(AlphStudents);

// check 

let checkName = "Omar"

let exist = students.find(function(student) {
    return student === checkName; 
})
console.log(exist);


// sum of letters

let result = students.join("").length;
console.log(result);

let evenName = students.filter(function(student) {
    return student.length % 2 === 0
})


// even number

let evenNames = students.filter(function(student) {
    return student.length % 2 === 0; 
});

console.log( evenNames);

// Reverse method

let reversNames = students.map(function(student) {
    return student.split('').reverse().join('') 
})

console.log(reversNames);

//
 let containO = students.filter(function(student) {
    return student.toLocaleLowerCase().includes("o"); 
});
console.log(containO);