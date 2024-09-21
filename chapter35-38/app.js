// Number 1:

function displayCurrentDateTime() {
    const now = new Date(5,2,2024);
    const currentDateTime = now.toLocaleString();
    document.write(`Current date and time: ${currentDateTime}`);
  }


// // Number 2:

function greetUser(John, Doe) {
    const fullName = `${John} ${Doe}`;
    alert(`Hello, ${JohnDoe}!`);
  }
  
  
// Number 3:


function addTwoNumbers() {
    const num1 = parseFloat(prompt("Enter the first number: "));
    const num2 = parseFloat(prompt("Enter the second number: "));
    const sum = num1 + num2;
    alert(`The sum is: ${sum}`);
  }
  
// Number 5:
function square(x) {
    return x * x;
  }
  
// Number 6:

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
}

  
// Number 7:



function countFromStartToEnd(start, end) {
  for (let i = start; i <= end; i++) {
    document.write(i + "<br>");
    // or use console.log(i);
  }
}
// Call the function
countFromStartToEnd(1, 10);


// Number 8:

function calculateHypotenuse(base, height) {
  function square(x) {
    return x * x;
  }

  function sqrt(x) {
    return Math.sqrt(x);
  }

  return sqrt(square(base) + square(height));
}

// Example usage:
let base = 3;
let height = 4;
let hypotenuse = calculateHypotenuse(base, height);

console.log(`Hypotenuse: ${hypotenuse}`);
document.write(`Hypotenuse: ${hypotenuse}`);

// Number 9:


// Arguments as Values:

function calculateArea(width, height) {
  return width * height;
}

// Call the function with values
var area = calculateArea(5, 10);
console.log(`Area: ${area}`);
document.write(`Area: ${area}`);


// Arguments as Variables:



function calculateArea(width, height) {
  return width * height;
}

// Define variables
var rectangleWidth = 5;
var rectangleHeight = 10;

// Call the function with variables
var area = calculateArea(rectangleWidth, rectangleHeight);
console.log(`Area: ${area}`);
document.write(`Area: ${area}`);



// Number 10:


function isPalindrome(str) {
  str = str.toLowerCase();
  return str === str.split('').reverse().join('');
}

// Test the function
console.log(isPalindrome("madam"));  // true
console.log(isPalindrome("hello"));  // false
document.write("madam: " + isPalindrome("madam") + "<br>");
document.write("hello: " + isPalindrome("hello"));


// Number 11:

function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

// Test the function
let inputString = 'the quick brown fox';
let outputString = capitalizeWords(inputString);

console.log(outputString);  // 'The Quick Brown Fox'
document.write(outputString);


// Number 12:

function findLongestWord(str) {
  var words = str.split(' ');
  var longestWord = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

// Test the function
var inPut = 'Web Development Tutorial';
var output = findLongestWord(inPut);

console.log(output);  // 'Development'
document.write(output);


// Number 13:



function countLetterOccurrences(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  }
  return count;
}

// Test the function
var inputstring = '(link unavailable)';
var inputLetter = 'o';
var occurrences = countLetterOccurrences(inputString, inputLetter);

console.log(`The letter '${inputLetter}' occurs ${occurrences} times.`);
document.write(`The letter '${inputLetter}' occurs ${occurrences} times.`);




// Number 14:

// Function to calculate circumference
function calcCircumference(radius) {
  var pi = 3.14159;
  var circumference = 2 * pi * radius;
  console.log(`The circumference is ${circumference.toFixed(2)}`);
  document.write(`Circumference of circle = ${circumference.toFixed(2)}<br>`);
}

// Function to calculate area
function calcArea(radius) {
   pi = 3.14159;
  var area = pi * radius * radius;
  console.log(`The area is ${area.toFixed(2)}`);
  document.write(`Area of circle = ${area.toFixed(2)}`);
}

// Test the functions
var radius = 5;
calcCircumference(radius);
calcArea(radius);
