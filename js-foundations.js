  // Javascript Foundations Assessments

// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three" or, print the number and "is not divisble by three".
// function divByThree (num){
//     if (num % 3 === 0){
//       return "is divisible by three"
//     } else {
//   return "is not divisible by three"
//     }
// }
// console.log(divByThree(6))
// 2. Write an object called helloMe. Include your first_name, last_name and at least two other properties of you. Write a function that returns a description of you.
const helloMe = {
  first_name: "Michael",
  last_name: "Acio",
  height: "5,8",
  weight: 170,
  getDescription: function() {return this.first_name + " "+this.last_name + "-"+this.height + "-"+this.weight}
}
console.log(helloMe.getDescription());
// const helloBravo = {
//   first_name: "Leonardo",
//   last_name: "Turtle",
//   height: "6,8",
//   weight: 250
// }
// function description (obj){
//   return obj
// }
// console.log(description(helloMe));
// console.log(description(helloBravo));
// 3. Create an array of 5 grocery items. Write a function that returns the first, middle, and last item as a string.
// var groceryItems = ["bananas", "bread", "cheese", "milk", "carrots"]
// function returnItems (arr){
//   var newArr = []
//   for (i = 0; i < arr.length; i++){
//     if (i % 2 === 0){
//       newArr.push(arr[i])
//       }
//   }return newArr.join(",")
// }
// console.log(returnItems(groceryItems));
// 4. Write a function called alphabetSoup that takes an argument of "str" and return a string with the letters in alphabetical order (ie. learn becomes aelnr). Assume numbers and punctuation symbols will not be included in the parameter.
// var str = "learn"
// var str2 = "academy"
// function alphabetSoup (str){
//   return newArr = str.split("").sort().join("")
//   // return newArr.sort().join("")
// }
// console.log(alphabetSoup(str));
// console.log(alphabetSoup(str2));

// 5. Given the arrays below, write a function animalNums that uses a for loop to print one value from each array concatenated together.

// var nums = [9, 5, 88, 2, 5, 42, 57]
//
// var nouns = ["ducks", "elephants", "pangolin", "rhinoceros", "giraffes", "penguins", "llamas"]
// // output should be: "9 ducks", etc
// function animalsNums (arr1, arr2){
//   var newArr = []
//   for (i=0; i < arr1.length; i++){
//     var comboArr = arr1[i] +" " + arr2[i]
//       newArr.push(comboArr)
//   }
//   return newArr
// }
// console.log(animalsNums(nums,nouns));
// //6. Create an array of 5 numbers. Write a function that loops through the array and returns a new array of the numbers multiplied by 5.
// var numbers = [1,2,3,4,5]
// multifive = (arr) => {
//   return arr.map(value => value * 5)
// }
// console.log(multfive(numbers));
