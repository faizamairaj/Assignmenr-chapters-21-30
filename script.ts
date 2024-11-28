//<<<<<<<<<<<<<<<<<<<<<<<<<< String Methods >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//QUESTION NO 01
// const firstName = prompt("What is your first name?");
// const lastName = prompt("What is your last name?");
// const fullName = (`Hello ${firstName} ${lastName}`);
// console.log(fullName);


//QUESTION NO 02
// const favouriteMobileModal = prompt("What is your favourite mobile phone modal ?");
// const calculateLength = favouriteMobileModal.length;
// console.log(`My favourite phone is: ${favouriteMobileModal} \n Length of string:  ${calculateLength}`);


//QUESTION NO 03
// const word = "Pakistani";
// const findIndex = word.indexOf('n');
// document.write(`String: ${word} <br> Index of 'n': ${findIndex}`);


//QUESTION NO 04
// const word = "Hello World";
// const findLastIndexOfL = word.lastIndexOf('l');
// document.write(`String: ${word} <br> Last index of 'l': ${findLastIndexOfL}`);


//QUESTION NO 05
// const word = "Pakistani";
// const findThirdIndex = word.charAt(3);
// document.write(`String: ${word} <br> Character at index 3 : ${findThirdIndex}`);


//QUESTION NO 06
// const firstName = prompt("What is your first name?");
// const lastName = prompt("What is your last name?");
// const fullName = ("Hello " + firstName + " " + lastName);
// console.log(fullName);


//QUESTION NO 07
// const city = "Hyderabad";
// const replaceCity = city.replace("Hyder","Islam");
// document.write(`City: ${city} <br> After replacement: ${replaceCity}`)

//QUESTION NO 08
// const message = "Ali and Sami are best friends. They play cricket and football together";
// const removeAllOccurrences = message.replaceAll("and","&");
// document.write(`Message: ${message} <br> Remove And: ${removeAllOccurrences}`)


//QUESTION NO 09
// const valueString = "472";
// const changeString = Number(valueString);
// document.write(`Value: ${value} <br>`)
// document.write(`Type: ${typeof(changeString)}`);


// const valueNumber = 472;
// const changeNumber = valueNumber.toString();
// document.write(`Value: ${valueNumber} <br>`)
// document.write(`Type: ${typeof(changeNumber)}`);


//QUESTION NO 10
// const userInput = prompt("Enter the word you want to capitalize?");
// const convertCapitalLetter = userInput.toUpperCase();
// document.write(`User Input: ${userInput} <br> Uppercase: ${convertCapitalLetter}`);


//QUESTION NO 11
// const userInput = prompt("Enter the sentence you want to title case?");
// const convertTitleCase = userInput.split(" ") 
// .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "); 
// document.write(`User input: ${userInput} <br> Title case: ${convertTitleCase}`);


//QUESTION NO 12
// const num = 35.36 ;
// const numToString = num.toString();
// const removeDecimal = numToString.replace(".","")
// document.write(`Number: ${num} <br> Result: ${removeDecimal}`)


//QUESTION NO 13
// const username = prompt("What is your name ?");
// const invalidCharacters = [33,44,46,64];

// for (let i=0; i<username.length; i++){
//   if(invalidCharacters.includes(username.charCodeAt(i))){
//     alert("Please enter a valid username");
//   }   
// }


//QUESTION NO 14
// const items = ["cake","applepie","cookie","chips","patties"];
// const userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");
// const caseSensitive = userInput.toLowerCase();
// if(items.includes(caseSensitive)){
//     alert(`${caseSensitive} is available at index ${items.indexOf(caseSensitive)} in our bakery`)
// }else{
//     alert(`We are sorry ${caseSensitive} is not available in our bakery`)
// }


//QUESTION NO 15
// ASCII Code Ranges:
// A-Z (uppercase letters): The ASCII codes range from 65 to 90.
// a-z (lowercase letters): The ASCII codes range from 97 to 122.
// 0-9 (digits): The ASCII codes range from 48 to 57.

// const userInput = prompt("Enter your password");
// if (userInput.length < 6) {
//     alert("Password must be at least 6 characters long.");
// } else if (!isNaN(userInput.charAt(0))) {
//     alert("Password must not start with a number.");
// } else if (!/[a-zA-Z]/.test(userInput) || !/[0-9]/.test(userInput)) {
//     alert("Password must contain both letters and numbers.");
// } else {
//     alert("Password is valid!");
// }

 
//QUESTION NO 16
// const university = "University of Karachi";
// const stringIntoArray = (university.split(""));
// console.log(stringIntoArray);
// document.write(stringIntoArray);


//QUESTION NO 17
// const userInput = prompt("Enter a message");
// const lastCharOFUserInput = userInput.charAt(userInput.length - 1);
// alert(`User input: ${userInput} \n Last Character of input: ${lastCharOFUserInput}`)


//QUESTION NO 18
// const sentence = "The quick brown fox jumps over the lazy dog";
// const sentenceInLowercase = sentence.toLowerCase();
// const words = sentenceInLowercase.split(" ");

// let count = 0;
// for(let i=0; i<words.length; i++){
//     if(words[i]==="the"){
//         count++
//     }
// }
// document.write(`Text: ${sentence} <br> There are ${count} occurrences of word 'the'`

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//



// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Math Method>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//QUESTION NO 01
// const positiveNumber = prompt("Enter a positive number (can include decimals):");
// const number = parseFloat(positiveNumber);

// if (isNaN(number) || number <= 0 || Number.isInteger(number)) {
//   alert("Please enter a valid positive number.");
// } else {
//   const roundOff = Math.round(number);
//   const floorValue = Math.floor(number);
//   const ceilValue = Math.ceil(number);
//   document.write(`Number: ${number} <br> RoundOff: ${roundOff} <br> Floor Value: ${floorValue} <br> Ceil Value: ${ceilValue} `);
// }


//QUESTION NO 02
// const negativeNumber = prompt("Enter a positive number (can include decimals):");

// const number = parseFloat(negativeNumber);

// if (isNaN(number) || number >= 0 || Number.isInteger(number)) {
//     alert("Please enter a valid negative floating-point number.");
// } else {
//   const roundOff = Math.round(number);
//   const floorValue = Math.floor(number);
//   const ceilValue = Math.ceil(number);
//   document.write(`Number: ${number} <br> RoundOff: ${roundOff} <br> Floor Value: ${floorValue} <br> Ceil Value: ${ceilValue} `);
// }


//QUESTION NO 03
// const userInput = Number(prompt("Enter a number")) ;
// const absoluteValue = Math.abs(userInput);
// document.write(`The absolute value of ${userInput} is ${absoluteValue}`)


//QUESTION NO 04
// const randomNumber = Math.floor(Math.random()*6 + 1)
// document.write(`Random dice value: ${randomNumber}`)


//QUESTION NO 05
// const options = ["head","tail"]
// const randomIndex = Math.floor(Math.random()*options.length);
// const IndexAdjust = randomIndex+1;
// const randomCoin = options[randomIndex]
// document.write(`${IndexAdjust} <br> random coin value:${randomCoin}`)


//QUESTION NO 06
// const randomNumber= Math.floor(Math.random()*100 +1);
// document.write(`Random no between 1 and 100: ${randomNumber}`)


//QUESTION NO 07
// const userWeight =parseFloat(prompt("Enter your weight in kilograms"));
// document.write(`The weight of user is ${userWeight} in kilograms`)


//QUESTION NO 08
// const secretNumber = Math.floor(Math.random() * 10) + 1;
// const userNumber = parseFloat(prompt("Enter a number between 1 and 10"),10);

// if(userNumber === secretNumber){
//     alert(`Congratulations! You Won! \n Secret Number is ${secretNumber}`);
// }else{
//     alert(`Try Again! The Secret Number was ${secretNumber}`);
// }