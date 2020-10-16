var num1=Number(prompt("Enter first number"));
var num2=Number(prompt("Enter the second number"));
document.write("You entered the following numbers :  "  + num1 +  "  and  "  + num2 +"<br>");

function myMultiplication(num1,num2){
    var result= num1*num2;
    document.write("The result for the Multiplication function is = " + result + "<br>");
}
function mySubstraction(num1,num2){
    var result= num1-num2;  
    document.write("The result for the Substraction function is = " + result +"<br>");
}
function myAddition(num1,num2){
    var result= num1+num2;
    document.write("The result for the Addition function is = " + result +"<br>");

}
function myDivision(num1,num2){
    var result= num1/num2;
    document.write("The result for the Division function is = " + result +"<br>");

}


myMultiplication(num1,num2);
mySubstraction(num1,num2);
myAddition(num1,num2);
myDivision(num1,num2);
