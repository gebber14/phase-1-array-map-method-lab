const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

function titleCased() {
  return tutorials.map(element => {
  const words = element.split(" ");
  console.log(words);
  return words.map(element => {
  return element.charAt(0).toUpperCase() + element.substring(1);
}).join(" ");
  }); 
}


// function capitalizeWords(array) {
//   return array.map(element => {

//   const words = element.split(" ");
//   return words.map(element => {
//   return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
// }).join(" ");
//   }); 
// }

//   function capitalizeWords(arr) {
//   return arr.map(element => {
//     return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
//   });
// }
