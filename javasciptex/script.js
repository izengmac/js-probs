const fileexetnsion =  (file) =>{
    return file.slice(file.lastIndexOf('.'));

} 
    
console.log(fileexetnsion('index.html'))

//write a js program to replace every character in a given string with the character following it in the alphabet 

//repalce character with character 
//string = sring 
//with character that follows it in the alphabet 
//alpahebet 

//"foo".replace(/(f)/, "$2");
// "$2oo"; the regex doesn't have the second group
//replace with character + 1 step
//


//cerating a date in the format od date/month/year
 
const dataformat = (date = new Date()) => {
    const days = date.getDate()
    const months = date.getMonth()
    const years = date.getFullYear()
    return `${days}/${months}/${years}`
}
console.log(dataformat())

//write a js program to create a new string adding "New!" in front of a giveb string.if the given string befgins  with "New!" already then return the original string 

//create a new stirng just `'New! '${sring }`
//if the first string is new then dont add 
//if not add
//string.startWith("New!")

const addNew = (str) => {
    return str.startsWith("New!") ? str : `New! ${str}`
}
console.log(addNew("bus"))
//write a js program to create a new stringhe first 3 characters and the last three characters of a string and adding them together
// .The string lenth must be 3 or more if not the original string is returned 
//take the last three thre characters str.slice(-3)
//take the first three chaaracters  str.slice(3)
// finalstr = "${first3} + ${last3}"
//if fibnal lrn(final) 

const Newsting = (str) => {
    const first3 = str.slice(0, 3);
    const last3 = str.slice(-3);
    const finalstr = first3 + last3
    return finalstr.length > 3 ? finalstr : str
}
console.log(Newsting("myhouseisboringandcool"))
console.log(Newsting("m"))

//write a js progran to extract the first half of a string of even lenghth
//the string is even 
//which is the remainder is zero 
//collwct the hals of the string 
//13 % 5 the output is the remainder 

const ExtracthALF = (str) => {
    return str.length % 2 === 0 ? str.slice(0 , str.length/2) : str
}

//
console.log(ExtracthALF("myivh"))
console.log(ExtracthALF("myiv"))

//write a js program to concatenate two strngs expert their first characters 

const ConcStrings = (string1 , string2) => {
    return string1.slice(1) + string2.slice(1)
}

console.log(ConcStrings("mylove", "justended"))
console.log(ConcStrings("myqueen", "myfirstlove"))

//Given two vlaues , write a js program to find out which one is nearest to 100
//given two values 
//compare the values 
//which one is close to 100
//close to ten means the difference is small 
//use the operator to cretuen a value 

const  CompareValues = (value1 , value2 ) => {
    return 100 - value1 > 100 - value2 ? "value2 is close to 100" : "value1 is close to 100"
}

console.log(CompareValues(50,60))
console.log(CompareValues(0.4 ,0.2))

//write a js program to check a given string conatins 2 to 4 occurences of a specified character 
//string 2 or 4 
//specified character 
//we want to query the sring  str.incluedes 
//count how many times the character appears 
//on every occurence we want to count use map and run a count + 1 
// split the string ""
//if the character is the special charcater we want to do the count 
//we can use the filter method

const CountOuccurences = (str, a ) => {
    
    modifiedstr = str.split("")
    const newcount =  modifiedstr.map((x ) => {
        const intialcunt = 0 
        return x === a ? intialcunt + 1 : intialcunt + 1
    })
    console.log(modifiedstr)
    console.log(newcount)
}

console.log(CountOuccurences("meandmyfreindaa"))

//write a js program to find the numver of even digit in a an array of integers
//the remainder of the number is 0 
//if the remainder is zero then filter 
// then claculate the lenghth
 const NumberEven = (arr) => {
    return arr.filter((num) => num % 2 === 0 ).length;

 }

 console.log(NumberEven([2,4,6,8,10]))
 console.log(NumberEven([1,3,5,7]))

 //write a js program to find the number of even values up to a given number 
 //the remainder of the number is 0
 //if the remainder is 0 filter into a list
 //if the number of array is 5 stop 
 //return the first 5 of the array 
 //for 

 const NumberEvens = (arrs) => {
    const arrlist = arrs.filter((num) => num % 2 === 0 );
    return arrlist.length
 }

 const Arraylist = (num) => {
    const arrlist = []
    for(let i = 1; i <= num ;i += 1){
        arrlist.push(i)
    }
    return arrlist;
 }

 console.log(NumberEvens(Arraylist(6)))
 console.log(NumberEven(Arraylist(9)))

 //write a js program program to check whether a given array of intefers is sorted is ascending order

 //its increasing on the next value 
 //use for loop
 //we have an array with the numbers
 //we take the array 
 //we go through it 
 //check if the next number is greaterv than the last 
 //the difference of the array charactaers
 //we can checlk the last and first numbers of the array 
//how to return the lat array and first array 

const IfAscending = (array1) =>{
  const FirstValue = (array1.find((element) => element <= 0 ? element : element ));
  console.log(FirstValue)
  const LastValue = array1.findLast((element) => element)
  return (FirstValue > LastValue) ? "the arrays is descending " : "the array is ascending"
  
}

const isAscendings = (arr) => {
    for(let i = 0 ; i < arr.length ; i += 1 ){
        return arr[i+1]
        if(arr[i+1] < arr[i]) return false;
    }
    return "its ascending you developer"
}
console.log(IfAscending([2,3,4,5,6,7,8,9,1]))
console.log(isAscendings([2,3,4,5,6,7,8,9,11]))

//write a js program to get the largest even number from an array of integers 
//we need the highest return i + 1 id its greater than  i 
//but we need to have   even number 
//the remainder is zero 

const LargestInteger = (arr) => {
       //return an array of even number 
       const Arreven = arr.filter((element) => element % 2 === 0)
       console.log(Arreven)
       console.log(...arr)
       //return the largest even number 
        for(let i = 0 ; i < Arreven.length ; i += 1){
         return  Arreven.findLast((element) => element > Arreven[i])      
       }
      
       
}
 console.log(LargestInteger([1,2,3,4,5,6,7,8,9,10]))
//Math.max(...arr)
//returns an object

//write a js program to replace the first digit in a string (should contain at leats didgit ) with $ char
//replace with $ 
//the first char 
//string return new string 
const ReplaceFirst = (str) => {
    const sllice = (`${str.slice(0,3)}`)
    console.log(sllice + "$$$")
    return str.replace(`${str.charAt(0,4)}`, '$$$$')
}
console.log(ReplaceFirst("1226886"))

//given a year , report if it is a leap year 
//what is a leap year 366 days 
//its year with an even number 
//so remainder is zero
//the year must divisible by 4
//if century by 400

const Leapyear = (year) => {
    
    if(year % 4 === 0 || year % 400 === 0 ){
        return "this is/was a leap year"
    }else{
        return "this year is not a leap year"
    }
}

console.log(Leapyear(2024))

//WRITE A JS PROGRAM  to compare two objects to determine if the first one contains the same properties as the secons one (which nay also have additional properties)
//object can have a string or value 
//the obj1.prop = obj2.prop
//iterate through the object 
//done

//write a js program to convert a comma-seperated values (csv) string to a 2d array. a new line indicates a new row in the array
//const str = `The quick brown fox
const str = `The ,quick ,brown fox
jumps, over ,the
lazy, d,og`;

const words = str.split('\n').map(row => row.split(','));
console.log(words);
// Expected output: "fox"
//write a js program to compare two bjects to determine if the first one contains the same properties as the secondf one (which may also have additional properties )
//we need to comapre two objects 
//we use the every method 
//we have two objects 
//which have the key value pair 
//we need to check if each key passed is eqaul to the key in the next object
//how we get the keys from the object we use the objecy.keys
//does each method return the key same as the key we passed as parameter if not yes or true 

const obj1 = {a: 1, b:2 , c:3 };
const obj2 = {a: 1, b:2 , c:3 };
const obj3 = {a: 1, c:2 , d:3 };

const CompareObjects = (a,b) => {
    return Object.keys(a).every((key) => b[key])
}

console.log(CompareObjects(obj1,obj2))

//write a js program to generate a randoom hexadecimal color color code 
//what is a hexidecimal it contains a #plus 6 other digit 
//hase a base 16 or hex and it means the number is not more than 16 
//so when tahta happens we go to 15 
//so we ned to generafte 6  digit randomly that conatins 1 to 15 
// but something intresting is when we get to 10 we convert the number to a letr
//how to generate a random number from 1 to 15 we use Math.floor(Math.random() * 16 )
//we take the value and check if its greater than 9 and convert to string 
// we do that 6 times get and add #

const getRandomNumber = () => {
     let  randomnum =  Math.floor(Math.random() * 16).toString(16)
     return randomnum 
}

const GenrateHEX = () => {
     const hexnums = "#" + Array
     .from({length: 6})
     .map((getRandomNumber)).join('');
     return hexnums
}


console.log(GenrateHEX(getRandomNumber()))
// write a js function that returnd true if the provided predicate function returns true for alll elements in a colletion ,flase otherwise 
//we have a funtion iinside a function
//so the fisst function retrursn true if the par retuns true
//write any funtion inside 
//and return true anyways 
arr = [3,4]
const parfunction = (arr) => {
    const text = ""
    for(let i = 0 ; i < arr.length ; i ++ ){
        if(arr[i+1] > 2) {
            return  true
        }else{
            return false
        }
    }
   
}

const CheckAll = (arr, fn) => {
    if(!fn(arr)){
         return false
    }
    return true

}
console.log(CheckAll(arr,parfunction))

//we can use the every funstion which simpolie things
//it goes through and checks if the element passes the test implemended by the provided function 

const CheckUsingevry = (arr ) => arr.every((x) => x > 2)

console.log(CheckUsingevry(arr))

//write a js function that returns a passed leteers in aphabetical order 
// Example string : "webmaster"
// Expected output: "abeemrstw"
//we need to check the order in ascendinf
//we convert to numbers and check the diffrence 
// return positve or negative number 
//return to srting and join 
const string = "dcba"
const ReturnAlp = (str) => {
     
      console.log( str.split("").sort((a,b) => (a-b > 0 ) ? 1 : -1).join(""))
}
console.log(ReturnAlp(string))

//write a js function that accepts string a par and 
//tcounts the number of vowels within the string
//accepts a string 
//counts number of vowels
//we want to check if vowel exists and return it we can use filter 
//we amt to return an arr s we use split 
// [].filter() => []

const vowels = ["a" ,"e", "o" , "i", "u"]
const filtervowel = ( vowels, str) => {
    return str.split("").filter((s) => vowels.indexOf(s) > -1).length
   
    
   
}
console.log(filtervowel(vowels,"wehavetogo"))

//write a js function to convert an amount to coins.
//example input : 46 ad possible coins 25, 10 , 5 , 2, 1 
//Output: 25 , 10 , 10 , 1
//we have to write a that gives the remainder and then stroes the value and each 
//method and it checks the possible coins that we have 
//so fisst if it cant it goes on to the next which is if result is 0 
//we can push the coins to the arr
//and filter the amounts greater than zero 
//40 / 25 = 1 * 15
const coins = [25 , 10 , 5 ,2,1 ]
const CheckCOINS = (amount, coins) => {
    const  arr = [];
    for(i = 0 ; i< coins.length; i++){
        const DIFnum = Math.floor(amount / coins[i])
        for(y = 0 ; y < DIFnum ;  y++ ){
            arr.push(coins[i])
            
            
        }
        amount = amount - DIFnum * coins[i] 
        
    }
    return arr
    
}
console.log(CheckCOINS(46, coins))

//write a js to extract unique characters from a string 
//we havve to define the unique char 
//and if we match the char we reatin that 
//working with the provjided to draw logic to come up with ann answer 
//code the logi 0 or 1 :)
const getUniqueChars = (str) => {
      return str.split("").filter(
        (item, index, arr) => 
                       arr.slice(index + 1).indexOf(item) === -1
      )
}
console.log(getUniqueChars("aaaabbbcccc"))
//we can use the set mehtod 
const getUnoquechars = (str) => {
    console.log(str.split(""))
return [... new Set (str.split(""))];
}
console.log(getUnoquechars("aaaabbbcccc"))

//write a js to find the first not repeated char 
//example string: "abacddbec"
//expected output: "e"
//repaet and return first element 

//JS Array Method Exercise 
const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
    ];

   // Exercises
// 1) What is the average income of all the people in the array?
//we need to fing the sum of all the people in the array and then comeup with the sum 
//use the reduce to return the acc 
//acc and return the division of the sum over the length
const FNaverage = (arr) => {
    return arr.reduce((acc, person) => {
        acc += parseInt(person.salary)
        return acc/arr.length

    }, 0 )
} 
console.log(FNaverage(people))

// 2) Who are the people that are currently older than 30?
//we need to go throught the arr and filter people older than 30
//we need a function that cal the age 

const CalAge = (arr) => {

    return arr.filter((person) =>   new Date().getFullYear() - new Date(person.DOB).getFullYear() > 30 ) 
}
console.log(CalAge(people))


// 3) Get a list of the people's full name (firstName and lastName).
//we need to return a filtered array of fiest name and last name 
//use filter method 
       const FirstAndLastname = (arr) => {
           const arr1 = people.map((person) => `${person.firstName}, ${person.lastName}`)
           

       }
       console.log(FirstAndLastname(people))
// 4) Get a list of people in the array ordered from youngest to oldest.
//we have to use the sort methos here 
const SortAge = (arr) => {
    const arr1 = arr.sort((a,b) => new Date(a.DOB).getFullYear > new Date(b.DOB).getFullYear? 1 : -1)
}
console.log(SortAge(people))
// 5) How many people are there in each department? 
//we need to use the acc 
//what this code does is it takes the acc and the person as params 
//then we want to create a n obj that contains the depart and the corresponding count 
//to do that at each element we need to firsy first spread the acc obj ...acc
//then set a key of the current department to the count [person.department]:
//if the acc of the current department exists it will set the acc + 1 as current acc acc[person.department] + 1
//if it doest it defaults to zero and add zero + 1  0 + 1
//then we do that to the last elemrnt 
//then we initialise the acc with an empty obj
const Departnun = (arr) => {
       return  arr.reduce((acc, person) => ({...acc , [person.department]: (acc[person.department] || 0 ) + 1 }),{})
}

console.log(Departnun(people))


//Array method 02

const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
];

// Exercises

// 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.
//we want to filter order with the 243 id 
//use filter method 
//this returns the order which has customerId or orderId of 234 
//use turnary operator 
const Filter234 = (orders) => {
    return orders.filter((order) => order.customerId === "234" ? order : order.Id  === "234" ? order :false)
}
console.log(Filter234(orders))
// 2) Create a new property on each order with the total price of items ordered.


// 3) Have all the orders been delivered?


// 4) Has the customer with ID '123' made any orders?


// 5) Have any products with an id of 123 been sold?
