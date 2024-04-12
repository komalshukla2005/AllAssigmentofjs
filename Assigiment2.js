// 1. Write a program that checks if a given number is even or odd.
const checkOddEven=(number)=>{
    if(number%2==0){
        console.log("The number is even ")
    }else{
        console.log("the number is ode")
    }
}
checkOddEven(40)

// 2. Create a function that takes two numbers as parameters and returns the larger one.
const largerNumber=(num1,num2)=>{
    if(num1>num2){
        return num1
    }else{
        return num2
    }
}
let a=largerNumber(12,45)
console.log("The number is grater  " + a)

// 3. Write a function that determines if a given year is a leap year.
const leapYear=(year)=>{
    if(year%100!=0 && year%400==0 || year%4==0){
        return `The Year is Leap Year`;
    }else{
        return `The Year is not  Leap Year`;
    }
}
 let leapAnswer=leapYear(2003)
 console.log(leapAnswer)

// 4. Implement a program that checks whether a given character is a vowel or consonant.
const checkVowelRrConsonant=(v)=>{
    if(v=='a'||v=='e'||v=='i'||v=='o'||v=='u' || v=='A' || v=='O'|| v=='I' || v=='U'|| v=='E'){
        console.log("the character is a vowel")
    }else{
        console.log("the character is not a vowel")
    }
}
checkVowelRrConsonant('p')

// 5. Create a function that takes three numbers as input and returns the largest among them.
const largestThreeNumber=(num1, num2,num3)=>{
    if (num1 > num2 & num1 >num3){
        return `The grater is ${num1}`
    }else if (num2 > num1 & num2 > num3){
        return `The grater is ${num2}`
    }else{
        return `the grater is ${num3}`
    }
}
let Result1 =largestThreeNumber(1232,304,56)
console.log(Result1)
 
// 6. Write a program that checks if a given number is positive, negative, or zero.
const checkNumber=(number)=>{
    if(number>0){
        return`the number is positive ${number}`
    }else if(number<0){
        return`the number is Negative ${number}`
    }else{
        return`the number is Zero ${number}`
    }
}
let answer=checkNumber(0)
console.log(answer)

// 9. Write a function that checks whether a person is eligible to vote based on their age.
const checkAge=(Age)=>{
    if(Age>=18){
        return`You are eligible for  vote your age is ${Age}`
    }else{
        return`You are not eligible for vote your age is ${Age}`
    }
}
let res=checkAge(15)
console.log(res)
// 8. Create a program that determines if a given string is a palindrome.
    // let reverse=str.split('').reverse().join('')
    // if(str==reverse){
    //     return `the string is a palindrome`
    // }else{
    //     return `the string is not a palindrome`
    // }
const checkPalindrome = (str) => {
    let reversed = '';
    for (let j = str.length - 1; j >= 0; j--) {
        reversed += str[j];
    }
    if (str === reversed) {
        return 'The string is a palindrome';
    } else {
        return 'The string is not a palindrome';
    }
};
let result = checkPalindrome('madam');
console.log(result);

// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.
const checkTriangle=(a1, b2, a3)=>{
    if(a1==b2 && a1!=a3 || a1==a3 && a1!=b2 ){
        return `the Triangle is Isosceles `
    }else if(a1== b2 && a1==c1){
        return`The Triangle is Equal Triangle`
    }else{
        return`the Triangle is Scalene Triangle`
    }
}
let Answer=checkTriangle(20,2,20)
console.log(Answer)

// 7. Implement a function that calculates the grade of a student based on their score.
const checkGrade=(Grade)=>{
    if(Grade>=90){
        return`The grade is A`
    }else if(Grade<90 && Grade>=80){
        return`The grade is B`
    }else if(Grade<=80 && Grade>=70){
        return`The grade is C`
    }else if (Grade<=70 && Grade>=60){
        return`The grade is D`
    }
    else if (Grade<=60 && Grade>=50){
        return`The grade is E`
    }
    else if (Grade<=50 && Grade>=40){
        return`The grade is F`
    }else{
        return `No Grade found`
    }
}
let myResult=checkGrade(66)
console.log(myResult)