// Create an array with 5 objects containing 3 properties
const people = [
  {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
  },
  {
    name: "Jane Doe",
    age: 25,
    occupation: "Web Developer",
  },
  {
    name: "Peter Parker",
    age: 20,
    occupation: "Student",
  },
  {
    name: "Mary Jane",
    age: 19,
    occupation: "Model",
  },
  {
    name: "Harry Osborn",
    age: 21,
    occupation: "Businessman",
  },
];

const person1 = people[0];
const person2 = people[1];
const person3 = people[2];
const person4 = people[3];
const person5 = people[4];

console.log(`
    My name is ${person1.name}. I am ${person1.age} years old and I am a ${person1.occupation}.
  `);
console.log(`
    My name is ${person2.name}. I am ${person2.age} years old and I am a ${person2.occupation}.
  `);
console.log(`
    My name is ${person3.name}. I am ${person3.age} years old and I am a ${person3.occupation}.
  `);
console.log(`
    My name is ${person4.name}. I am ${person4.age} years old and I am a ${person4.occupation}.
  `);

console.log(`
    My name is ${person5.name}. I am ${person5.age} years old and I am a ${person5.occupation}.
  `);
