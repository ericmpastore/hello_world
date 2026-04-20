"use strict";

// Test function to show Hello World!
// EPastore, 04/17/2026

function helloWorld()
{
    alert("Hello world!");
}

// Test function to write Hello World! in the document stream
// EPastore, 04/17/2026
function docWrite()
{
    document.write("Hello World!");
    console.log("Hello console!");
}

// Test function to manipulate the DOM
// EPastore, 04/18/2026
function domWrite()
{
    document.getElementById("numericsection").innerHTML = 30;
    document.getElementById("textsection").innerHTML = "Name: John";

    var a;
    a = 10;
    var b,c;
    b = c = 20;

    x = a + 30;

    console.log("Value of a : " + a)
    console.log("Value of b : " + b)
    console.log("Value of c : " + c)
    console.log("Value of x : " + x)

    y = b * c;

    console.log("Value of y : " + y)
}

// Test function for strict mode
// EPastore, 04/19/2026

function strictMode()
{
    var a = 10;
    var b = 40;

    console.log(`The value of a is ${a} and the value of b is ${b}`)

    var privateVar = "Just a string";
    var undefinedStr = "An undefined value";

    console.log(`The private string is ${privateVar}.`);
    console.log(`The undefined string is ${undefinedStr}`);
}

// Test function for variables
// EPastore, 04/19/2026
function varTest()
{
    var price1 = 5;
    var price2 = 10;
    var total = price1 + price2;

    console.log(`Sum of price1 and price2: ${total}`);

    price1 = 21;
    price2 = 14;
    total = price1 + price2;

    console.log(`Updated sum of price1 and price2: ${total}`);

    var price1 = 500;
    var price2 = 310;
    var total = price1 + price2;

    console.log(`Sum of re-declared price1 and price2: ${total}`);

    let dividend = 420;
    let divisor = 20;

    console.log(`The division result is ${dividend/divisor}`)

    dividend = 720;
    divisor = 30;

    console.log(`The updated division result is ${dividend/divisor}`)

    /*
    Let does not allow redeclaration
    let dividend = 420;
    let divisor = 20;

    console.log(`The division result after redeclaration is ${dividend/divisor}`)
    */

    const MY_BDAY = "21.11.1983";
    console.log(`My birthday is: ${MY_BDAY}`);

    // MY_BDAY = "21.11.1985";
    // console.log(`My birthday is: ${MY_BDAY}`);
}

// Test function for variables
// EPastore, 04/19/2026
function numTest()
{
    let num = 123;
    console.log(`The value of integer num is ${num}.`);

    num = 123.123;
    console.log(`The value of floating point num is ${num}.`);

    console.log(`145e4 = ${145e4}`);
    console.log(`145e-4 = ${145e-4}`);
    console.log(`20 * '20' = ${20*'20'}`);
    console.log(`'20' * 20 = ${'20'*20}`);
    console.log(`Infinity is ${Infinity}`);
    console.log(`${Number.POSITIVE_INFINITY}`);

    num = 3.14567;
    console.log(`The number ${num} to 2 places is ${num.toFixed(2)}`)
    console.log(`The number ${num} to 2 places is ${num.toPrecision(2)}`)


}


// helloWorld()
// docWrite()
// domWrite()
// strictMode()
// varTest()
numTest()
