
// Multiplies a number by itself to calculate its square.

// function square(num) {
//     return num * num;
//   }
//   console.log(square(5)); // Output: 25

// Takes a number (num), multiplies it by itself (num * num), and returns the result.



// 2. Check If a Number is Even or Odd

// function isEven(num) {
//     return num % 2 === 0 ? "Even" : "Odd";
//   }
//   console.log(isEven(7)); // Output: Odd
//   console.log(isEven(8)); // Output: Even



  
// Uses the modulo operator (%) to check the remainder of num / 2.
//  If the remainder is 0, it returns "Even"; otherwise, it returns "Odd".

// 3. Reverse a String

// function reverseString(str) {
//     return str.split('').reverse().join('');
//   }
//   console.log(reverseString("hello")); // Output: olleh
  
//  1. // split(''): Converts the string into an array of characters.
//  2.// reverse(): Reverses the array.
//  3.// join(''): Converts the reversed array back into a string.


// 4. Count Vowels in a String

// function countVowels(str) {
//     const vowels = "aeiouAEIOU";
//     return str.split('').filter(char => vowels.includes(char)).length;
//   }
//   console.log(countVowels("JavaScript")); // Output: 3


// 1. split(''): Breaks the string into an array of characters.
// 2. filter(): Filters out only the characters that are vowels.
// 3.length: Counts the number of filtered characters.

// 5. Generate a Random Number Between Two Values

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//   console.log(getRandomNumber(1, 10)); // Output: Random number between 1 and 10

// const btn = document.querySelector("button");
// btn.addEventListener("click", function() {
//   const randomNumber = getRandomNumber(1, 10);
//   console.log(randomNumber);
// });
// function getRandomNumber(min, max){
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomNumber(30,40));

// 1.Math.random(): Generates a random decimal between 0 and 1.
// 2.Multiplies this decimal by (max - min + 1) to stretch the range.
// 3.Adds min to shift the range and Math.floor() rounds down to the nearest whole number.

// 6. Toggle Text on a Button

{/* <button onclick="toggleText(this)">Click Me</button>
<script>
function toggleText(button) {
  button.innerText = button.innerText === "Click Me" ? "Clicked!" : "Click Me";
}
</script> */}

// 1.// button.innerText: Accesses the button's text.
// 2.// Checks the current text using a conditional statement and changes it to the opposite value.

// 7. Sum of an Array
// function sumArray(arr) {
//     return arr.reduce((sum, num) => sum + num, 0);
//   }
//   console.log(sumArray([1, 2, 3, 4])); // Output: 10

// 1.reduce(): Iterates through the array, adding each value to an accumulator (sum).
// 2.Starts the accumulator at 0.
  
// 8. Find the Largest Number in an Array

// function findLargest(arr) {
//     return Math.max(...arr);
//   }
//   console.log(findLargest([3, 9, 1, 7])); // Output: 9

// 1.Uses the spread operator (...) to pass the array elements to Math.max().

// 9. Check If a String is a Palindrome

// function isPalindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
//   }
//   console.log(isPalindrome("madam")); // Output: true
//   console.log(isPalindrome("hello")); // Output: false

// 1// Reverses the string.
// 2// Compares the original and reversed strings for equality.

// 10. Change Background Color on Button Click

// <button onclick="changeBackgroundColor()">Change Background</button>
// <script>
// function changeBackgroundColor() {
//   document.body.style.backgroundColor = 
//     '#' + Math.floor(Math.random() * 16777215).toString(16);
// }
// </script>

// 1.Generates a random hexadecimal color code using Math.random().
// 2.Applies the color to the body element’s backgroundColor.

  
// if(NaN === NaN){
//   console.log("both are equal");
// } else {
//   console.log("both are not equal");
// }

// && operatror
// var x = 5;
// var y = 10;

// console.log(x > 10 && y > 0);


// OR || operator

// var x = 5;
// var y = 10;
// console.log(x > 10 || y > 0);



// NOT ! Operator
  
// var isfalse = false;
// console.log(!isfalse);

   

// var age = 20;
// var hadCNIC = true;
// console.log(age >= 19 && hadCNIC  );

//  condition Ternary Operator
//  var age = 15;
//  var result = age >= 18 ? "You are old enough to vote" : "You are not old enough to vote";
//  console.log(result);



console.log("5" -3);
console.log(2 < 1 < 5);
console.log("20" + 10  + 10);

// if Statment

// var age = prompt("Enter your age");

// if(age >= 18){
//    document.write("You are old enough to vote");
// }else if(age == 17){
//   console.log("yes ");
// }else{
//     console.log("no");
// }

// var age = 18;

// if(age >= 18){
//   console.log("You are old enough to vote");
// } else if(age < 18 && age > 18) {
//   console.log("You are old enough to vote");
// } else{
//   console.log("not")
// }

// interview question

// let userAge = prompt("Enter your age");
// if(userAge >= 18){
//   console.log("You are old enough to vote");
// } else if(userAge < 18 && userAge > 18) {
//   console.log("You are old enough to vote");
// } else{
//   console.log("You are not old enough to vote");
// } 




// we can also use an else if cluase check additinioal condations:

// var tem = 18;
// if(tem > 30){
//   console.log("lets go to home");
// } else if(tem > 20 && tem < 30) {
//   console.log("hello")
// }else{
//   console.log("hy sardi")
// }




// let userAge =  prompt("Enter your Age");
// let isCitizen = true;
// let isRegister =  true;

// if(userAge >= 18){
//    if(isCitizen){
//      if(isRegister){
//       console.log("You are eligible to vote")
//      }else{
//       console.log("Your are not eligible due to Registration status.")
//      }
//    }else{
//     console.log("You are not eligible due to citizenship status")
//    }
// }else{
//   console.log("You are not eligible to Vote due to not Younger")
// }
 
// var num = prompt("Enter a number");

// if(num % 2 == 0 ){
//   console.log("num is even");
// }else{
//   console.log("this  is odd")
// }

// var num = "6";
// if(num % 2 === 0){
//   console.log("NUm is even");
// }else{
//   console.log("NUm is odd")
// }

// var day = prompt("Enter the day");

// switch(day){
//   case "Friday":
//     console.log("chutti");
//       break;
//     case "saturday":
//       console.log("kaam krna h");
//       break;
//       case "sunday":
//         console.log("party");
// }

// var day = "Friday";

// switch(day){
//   case "Friday":
//     console.log("Chutti");
//     break;

//     case "saturday":
//     console.log("kaam krna h");
//       break
//     case "c hello":
//       console.log("first")
// }

// var areOfShapes = prompt("Enter the shape name")

// var a = 5;
// var b = 10;
// var result;

// switch(areOfShapes){
//   case "square":
//     result = a * a;
//     console.log(result);
//     break;

//     case "rectangle":
//     result = a * b;
//     console.log(result);
//     break;

//     case "circle":
//     var r = 2;
//     result = 3.142 * (r * r);
//     console.log(result);
//     break;

//     default:
//       console.log("NO shape matches");
// }

  

// loops 

//while loop
// var num = 1;

// while(num <= 100){
//   console.log(num)
//   num++;
// }
  var num = 1;
 for(num = 1; num <= 100; num++){
  console.log(num);
 }
  // var num = 1;
  // while(num <= 10){
  //   document.write("<br></br>")
  //   // document.write("26 * " + num + " = " + 26 * num)
  //   document.write(`26 * ${num} = ${26 * num}`);
  //   num++;
  // }

  // let userInput;
  // let usernum;
  // do{
  //   userInput = prompt("Enter a number");
  //   usernum = parseFloat(userInput);
  // }while(isNaN(usernum) || userInput <= 0)
  //   console.log("You entered a valid number");
// do while loop

// var num = 1;
// do{
//   console.log(num)
//   num++;
// }while(num <= 100)

  // for loop
  
  // for(var i = 0; i < 100; i++){
  //   console.log(i)
  // }