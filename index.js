//Question#1
function reverseArray(arr) {
    return arr.slice().reverse();
}

const smallArray = [1, 2, 3, 4, 5];
const reversedSmallArray = reverseArray(smallArray);
console.log("Reversed small array:", reversedSmallArray);

//Question#2
function filterOutNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
}

// Test with an array containing both negative and positive numbers
const mixedArray = [1, -2, 3, -4, 5, -6];
const filteredArray = filterOutNegativeNumbers(mixedArray);
console.log("Filtered array:", filteredArray); // Output: [1, 3, 5]

// Test with an array containing only negative numbers
const negativeArray = [-1, -2, -3, -4, -5];
const filteredNegativeArray = filterOutNegativeNumbers(negativeArray);
console.log("Filtered array with only negatives:", filteredNegativeArray); // Output: []

// Test with an array containing only positive numbers
const positiveArray = [1, 2, 3, 4, 5];
const filteredPositiveArray = filterOutNegativeNumbers(positiveArray);
console.log("Filtered array with only positives:", filteredPositiveArray); // Output: [1, 2, 3, 4, 5]


//Question#3
function countVowels(str) {
    // Define a set of vowels (both lowercase and uppercase)
    const vowels = 'aeiouAEIOU';
    // Initialize a count variable
    let count = 0;
    
    // Loop through each character in the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

// Test with various strings

const testString1 = "Hello, World!";
console.log("Number of vowels in '" + testString1 + "':", countVowels(testString1)); // Output: 3

const testString2 = "Rhythms";
console.log("Number of vowels in '" + testString2 + "':", countVowels(testString2)); // Output: 0

const testString3 = "AEIOUaeiou";
console.log("Number of vowels in '" + testString3 + "':", countVowels(testString3)); // Output: 10


//Question#4

function isPalindrome(str) {
    // Normalize the string by removing non-alphanumeric characters and converting to lowercase
    const normalizedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    // Reverse the normalized string
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    // Compare the normalized string with the reversed string
    return normalizedStr === reversedStr;
}

// Test the function with different strings
console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("mom"));   // true
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("refer")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true


//Question#5


function isInRange(val1, val2) {
    // Check if either value falls within the range 50 to 99 (inclusive)
    return (val1 >= 50 && val1 <= 99) || (val2 >= 50 && val2 <= 99);
}

// Test cases
console.log(isInRange(45, 55)); // true, because 55 is in the range
console.log(isInRange(30, 45)); // false, neither value is in the range
console.log(isInRange(75, 100)); // true, because 75 is in the range
console.log(isInRange(50, 99)); // true, both values are exactly on the boundary
console.log(isInRange(49, 100)); // false, neither value is in the range


//Question#6

function getMinValue(array, mapFunction) {
    // Map each element of the array using the provided mapFunction
    const mappedArray = array.map(mapFunction);
    
    // Find the minimum value in the mapped array
    const minValue = Math.min(...mappedArray);
    
    return minValue;
}

// Example usage
const array = [1, 2, 3, 4, 5];

// Define a function to map each element (e.g., square the value)
const mapFunction = x => x * x;

// Get the minimum value after mapping
const result = getMinValue(array, mapFunction);

console.log(result); // Output: 1, because the mapped array is [1, 4, 9, 16, 25] and the minimum value is 1

//Question#7

function repeatLastThreeChars(originalString) {
    // Check if the string length is at least 3
    if (originalString.length < 3) {
        throw new Error("String length must be 3 or more.");
    }

    // Get the last 3 characters of the string
    const lastThreeChars = originalString.slice(-3);
    
    // Create a string of 4 copies of the last 3 characters
    const updatedString = lastThreeChars.repeat(4);
    
    return updatedString;
}

// Example usage
const originalString = "Hello, World!";
const result = repeatLastThreeChars(originalString);




//Question#8


function classifyAngle(degrees) {
    if (degrees < 0 || degrees > 180) {
        return 'Invalid angle'; // Angle should be between 0 and 180 degrees
    }
    
    if (degrees < 90) {
        return 'Acute angle'; // Angle between 0 and 90 degrees
    } else if (degrees === 90) {
        return 'Right angle'; // Exactly 90 degrees
    } else if (degrees < 180) {
        return 'Obtuse angle'; // Angle between 90 and 180 degrees
    } else if (degrees === 180) {
        return 'Straight angle'; // Exactly 180 degrees
    }
}

// Example usage
console.log(classifyAngle(45));   // Output: Acute angle
console.log(classifyAngle(90));   // Output: Right angle
console.log(classifyAngle(120));  // Output: Obtuse angle
console.log(classifyAngle(180));  // Output: Straight angle
console.log(classifyAngle(200));  // Output: Invalid angle

//Question#9

function smallestRoundNumber(n) {
    // Check if n is already a round number
    if (n % 10 === 0) {
      return n;
    }
    
    // Calculate the smallest round number greater than n
    return Math.ceil(n / 10) * 10;
  }
  
  // Test the function
  let n = 592;
  console.log("The smallest round number not less than " + n + " is: " + smallestRoundNumber(n));
  
  n = 600;
  console.log("The smallest round number not less than " + n + " is: " + smallestRoundNumber(n));
  
  n = 591;
  console.log("The smallest round number not less than " + n + " is: " + smallestRoundNumber(n));


  //Question#10
  function findIndex(arr, item) {
    // Iterate through the array using a for loop
    for (let i = 0; i < arr.length; i++) {
      // Check if the current element is equal to the item
      if (arr[i] === item) {
        return i; // Return the index if the item is found
      }
    }
    return -1; // Return -1 if the item is not found
  }
  
  // Test the function
  let array = [10, 20, 30, 40, 50];
  let itemToFind = 30;
  console.log("The index of " + itemToFind + " is: " + findIndex(array, itemToFind));
  
  itemToFind = 60;
  console.log("The index of " + itemToFind + " is: " + findIndex(array, itemToFind));
  
  