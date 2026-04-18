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

// helloWorld()
// docWrite()
domWrite()
