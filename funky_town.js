//OvO
//Carol Pan and Yuyang Zhang
//SoftDev1 pd7
//HW15 -- Sequential Progression
//2017-12-07


//fibonacci(n)

var fibonacci = function(n){
    if (n < 0)
	return -1;
    else if (n == 0)
	return 0;
    else if (n == 1)
	return 1;
    else
	return fibonacci(n-1) + fibonacci(n-2);
};

console.log("fibonacci(4): " + fibonacci(4));
console.log("fibonacci(10): " + fibonacci(10));
console.log("fibonacci(3.4): " + fibonacci(3.4));
console.log("fibonacci(-1): " + fibonacci(-1));
//gcd(n)

var gcd = function(a,b){
    if (a==b)
	return a;
    else if (a > b)
	return gcd(a-b,b);
    else
	return gcd(a, b-a);
};

console.log("gcd(3,4)" + gcd(3,4));
console.log("gcd(7,21)" + gcd(7,21));
console.log("gcd(1.5,3)" + gcd(1.5, 3));
//console.log(gcd(-3, 9));

//randomStudent()
var students = ["april", "boy", "carl", "dudette", "elaine"]
var student_osis = [1, 2, 3, 4, 5]
var random_num = function(){
    rand_num = Math.floor(Math.random()*students.length);
    return rand_num;
};

var randomStudent = function(){
    return students[random_num()];

};

//12.06.17
/*
var buttonCallback = function(e){
    console.log("\n\nhere comes e...");
    console.log(e);
    console.log("\n\nhere comes 'this'");
    console.log(this);
};

var b = document.getElementById('b');
b.addEventListener('click', buttonCallback);
//buttonCallback passes the code
//buttonCallback() calls the fxn
*/

//button for fibonacci
var fibCallback = function(e){
    console.log("\ncalculating fibonacci term..");
    console.log(fibonacci(10));
};
var fib = document.getElementById('fib');
fib.addEventListener('click', fibCallback);

//button for gcd
var gcdCallback = function(e){
    console.log("\ncalculating greatest common divisor..");
    console.log(gcd(14,21));
};
var gcdB = document.getElementById('gcd');
gcdB.addEventListener('click', gcdCallback);

//button for random student
var randstuCallback = function(e){
    console.log("\npulling up random student..");
    console.log(randomStudent());
};
var randstu = document.getElementById('randStudent');
randstu.addEventListener('click', randstuCallback);
