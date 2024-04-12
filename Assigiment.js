  // NEW ASSIGMENT
// 1 Given length and breadth of a rectangle, return the area of the rectangle.
const printrectanglearea = (length, width)=>{
    return length*width;
}
let ans=printrectanglearea(10,40)
console.log(`The Area of the Rectangle is ${ans}`)


// 2 Take a number and print the square of the number.

const Squareofnum=(num)=>{
    return num *num;
}
let result=Squareofnum(5)
console.log(`Square of the Number is : ${result}`)

// 3 Take two numbers and only print the integer part when a is divided by b.
const printonlyintegernum=(num1,num2)=>{
    return Math.floor(num1/num2)
}

let finalresualt=printonlyintegernum(24,5)
console.log(`the integer part is ${finalresualt}`)

// 4 Take a number and print out the last digit of the number.
const lastdigitnum=(Number)=>{
    return (Number%10)
}
let answer=lastdigitnum(897)
console.log(`The last digit is that : ${answer}`)

// 5 Take a number and find the cube of that number.</
const findCubeofnumber=(Num)=>{
    return(Num*Num*Num)
}
result1=findCubeofnumber(3)
console.log(`the Cube of the number id that: ${result1}`)

//  6 ake a 3 digit number and print the reverse of that number. Ex - 235 = 532

const Printreversenumber = (digit) => {
    let rev = 0;
    while (digit > 0) {
        let lastDigit = digit % 10;
        rev = rev * 10 + lastDigit;
        digit = Math.floor(digit / 10);
    }
    return rev;
}
let ans2 = Printreversenumber(234);
console.log(` the number is reverse is that : ${ans2}`); 

// 7 Take a number and print out the first digit of the number. Ex - 145 = 1, 789 = 7

const Printfirstdigit = (Number5) => {
    let ans5 = Number5;
    while (ans5 >= 10) {
        ans5 = Math.floor(ans5 / 10);
    }
    return ans5;
};
let answeris = Printfirstdigit(568);
console.log(`The first digit of the Number is that : ${answeris}`);


// 8 Take a number and return the sum of the first and last digit. Ex - 10 = 1+0 = 1, 452 = 4+2=7
const sumoffirstandlastdigit = (Number6) => {
    let ans6 = Number6;
    let lastDigit = ans6 % 10;
    while (ans6 >= 10) {
        ans6 = Math.floor(ans6 / 10);
    }
    let firstDigit = ans6;
    let sum = firstDigit + lastDigit;
    return sum;
}
let answer6is = sumoffirstandlastdigit(823);
console.log(`The sum of the first and last digit is that : ${answer6is}`); 

//  9 Take salary of five employees and print the average salary of all the employees.

const Avrageprint=(salary)=>{
    let s=0
    let i=0
    while (i<salary.length) {
        s+=salary[i]
        i++
    }
    return (s/salary.length)
}
let sal=[20,30,40,50]
console.log(Avrageprint(sal))

// 10 Take two numbers and swap them. Ex - a = 10, b=5; =&gt; a=5, b=10;
const printswap = (a, b) => {
    let c = a; 
    a = b;    
    b = c;     
    return [a, b];
}
let anst = printswap(10, 20);
console.log(anst); 
