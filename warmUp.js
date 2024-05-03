// Giving the following object:
const person = {
  name: {
    first: "Jane",
    last: "Doe",
  },
  age: 32,
  location: {
    city: "Rockville",
    state: "Maryland",
    zip: 75040,
  },
  occupation: "Front-End Developer",
  likes: ["Hiking", "Swimming"],
};
// Get the following values listed below
// console log the value of age in the object Person
console.log(person.age)
// console log the first and last name in a string like so "Jane Doe"
console.log(`${person.name.first} ${person.name.last}`)
// console log the city, state, and zip in a string like so "Rockville Maryland, 75040"
console.log(`${person.location.city} ${person.location.state}, ${person.location.zip}`)
// console log the likes in seperate lines using an array method
person.likes.forEach((like)=>{
  console.log(like)
})

// console log the likes in a string seperated by "," like so "Hiking, Swimming"
let stringLikes=''
for (let i=0;i<person.likes.length;i++){
  stringLikes+=person.likes[i]+", "
}
stringLikes=stringLikes.slice(0,stringLikes.length-3)
console.log(stringLikes)



// We all know that objects values can be strings, numbers, arrays, and even other objects
// But did you know that objects values can also be functions? Take a look at the updated object below
const personUpdated = {
  name: {
    first: "Jane",
    last: "Doe",
  },
  age: 32,
  location: {
    city: "Rockville",
    state: "Maryland",
    zip: 75040,
  },
  occupation: "Front-End Developer",
  likes: ["Hiking", "Swimming"],
  introduce: function introduce() {
    console.log(
      `Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}! I like to go ${this.likes[0]}.`
    );
  },
};
// With the knowledge of how to retrive infomation from objects, how would you get the console log inside of introduce to run?
// Test your theory and see what happens
personUpdated.introduce()