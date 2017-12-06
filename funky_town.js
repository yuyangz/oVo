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
var students = ["a", "b", "c", "d", "e"]
var student_osis = [1, 2, 3, 4, 5]
var random_num = function(){
    student_length= student.length;
    rand_num = Math.round(Math.random()*student.length());
    return rand_num;
};

var randomStudent = function(){
    return students[random_num()];

};



