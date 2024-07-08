function checkCharacterType(char) {

    let asciiCode = char.charCodeAt(0);

    if (asciiCode >= 48 && asciiCode <= 57) {
        return "The character is a number.";
    }
    else if (asciiCode >= 65 && asciiCode <= 90) {
        return "The character is an uppercase letter.";
    }
    else if (asciiCode >= 97 && asciiCode <= 122) {
        return "The character is a lowercase letter.";
    } else {
        return "The character is not a number, uppercase letter, or lowercase letter.";
    }
}

let inputChar = prompt("Enter a character:");

if (inputChar.length !== 1) {
    console.log("Please enter a single character.");
} else {
    let result = checkCharacterType(inputChar);
    alert(result);
}

let integer1 = +prompt('Enter your first integer')
let integer2 = +prompt('Enter your second integer')

if (integer1 > integer2) {
    alert('integer1 ' + 'is greater than ' + 'integer2')
}
else if (integer1 < integer2) {
    alert('Integer1 ' + 'is lesser than ' + 'integer2')
} else {
    alert('Both are equals')
}

let number1 = prompt('Enter any number \n i will tell you whether it is positive or negative')

if (number1 < 0) {
    alert('it is negative')
}
else if (number1 > 0) {
    alert('it is positive')
}
else {
    alert('íts zero')
}

let character = prompt('Enter any character (i.e. string of length 1)')
let vowel = ['a', 'e', 'i', 'o', 'u']

let flag = 'no'

for (i = 0; i < vowel.length; i++) {
    if (vowel[i] == character) {
        flag = 'yes'
        break
    }
}
if (flag == 'yes') {
    alert(true)
}
else {
    alert(false)
}





let correct_password = '123456'

let password = prompt('Enter the following password : ' + correct_password)
if (password == '') {
    alert('Please enter your password')
}
else if (password == correct_password) {
    alert('“Correct! The password you entered matches the original password”')
}
else {
    alert('Incorrect password')
}

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}
console.log(greeting + '<br> <br>');

let time = prompt('Enter time in your clock in 24 hours format like : 2200')

if (time >= '0000' && time < 1200) {
    alert('Good Morning!')
}
else if (time >= 1200 && time < 1700) {
    alert('Good afternoon!')
}
else if (time >= 1700 && time < 2100) {
    alert('Good evening!')
}
else if (time >= 2100 && time <= 2359) {
    alert('Good night!')
}
else {
    alert('Please enter time in your clock in 24 hours')
}