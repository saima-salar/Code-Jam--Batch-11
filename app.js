//Question 1

let fruits=["Apple","Banana","Peach","Mango","Orange","Papaya"];

console.log(fruits.reverse());



//Question 2


let myArray=[1,2,3,4,5,-1,-2,-3,-4,-5];
console.log(myArray);
let newArray=myArray.slice(0,5);
console.log(newArray);




// question 3 //


function countVowels(str) {
    str = str.toLowerCase();
    const vowels = 'aeiou';
    let count = 0;
    
    for (let char of str) {
        
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}


console.log(countVowels("Hello")); 
console.log(countVowels("Testing"));



//Question 4







//Question 5


function int(){
    let num1 = prompt("enter the first number")
    let num2 = prompt("enter the second number")

if(num1 > 50 && num2 < 59){
    console.log(int);
}
}




//Question 6




let arr = [1, 2, 3, 4];
let mapped_arr = arr.map(x => x + 1);
console.log(mapped_arr);




//Question 7


function getLastCharacter(str,n){
    let newString=str.substring(str.length-n);
    return newString
    
    } 
let str ="Hello world"
let n=5;



//Question.8


 function angle_Type(angle) {
    if(angle < 90) {
      return "Acute angle."; 
    }
    if(angle === 90) {
      return "Right angle."; 
    }
    if(angle < 180) {
      return "Obtuse angle."; 
    }
    return "Straight angle.";  
  }
  

  console.log(angle_Type(47));   
  console.log(angle_Type(90));  
  console.log(angle_Type(145));  
  console.log(angle_Type(180));



//Question.9

function round(){
    let value=prompt("Enter a number which you want to round up")

    newValue = Math.ceil(value);

    console, log(newValue);
}
round()

// 10. Write a JavaScript program to find the index of an array item in a for loop


let colors=["Red","Green","Blue","Pink","Yellow"];
for(let i=0; i<colors.length;i++){

    console.log(i);
}


