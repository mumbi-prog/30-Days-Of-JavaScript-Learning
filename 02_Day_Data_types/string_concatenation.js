// Declaring different variables of different data types
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
// Concatenating using addition operator
let fullName = firstName + space + lastName // concatenation, merging two string together.
console.log(fullName)

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country // ES5
console.log(personInfoOne)
// Concatenation: Template Literals(Template Strings)
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\n I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \n In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\" It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \t I hope you are enjoying too."

console.log(paragraph)

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')


let string = 'JavaScript'
console.log(string.substr(4,4))    // Scri

let myString = 'JavaScript'
console.log(myString.substring(3,8))    // aScri

let countrys = 'Finlandbedan'
console.log(countrys.substr(3, 4))   // land


let string1 = '   30 Days Of JavaScript   '

console.log(string1)
console.log(string1.trim(' '))

let firstName1 = '      Asabeneh    '

console.log(firstName1)
console.log(firstName1.trim())  // still removes spaces at the beginning and the end of the string