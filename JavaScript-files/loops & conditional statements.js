// There are four conditional statements are there.... they are
//    1) if-statement
//    2)if-else 
//    3)if-else if -else
//    4)switch    */ 
var num=prompt("Enter a number")
document.write(num)
if(num<0){
 alert("Please enter the positive ")
}
if(num>0){
 alert("Its a Positive number" +" "+ num)
    document.write("You entered the value :" +num)
}
else{
 alert("Its a negative number")
 alert("Please enter a positive number")   
 documnet.write("You entered the value :" +num)            
}
alert("Thank you")


   var amount=prompt("Please enter the amount")
   var balance=527 
   if(balance>amount){
     alert("The transactions is successful")
     document.write("the remaining balance is" + " " + (balance-amount))
   }
   else{
     alert("the balance is insufficient")
     alert("The required balance is"+" "+ balance)
     document.write("the remaining balance is "+ balance)
   }
var score=prompt("Enter the marks")

if(score>90){
var grade='A'
document.write(grade)

}
else if(score>80){
 document.write(grade="B")
}
else if(score>70){
 document.write('Grade-C')
}
else if(score>60){
 document.write("Grade-D")
}
else if(score>50){
 document.write('Grade-E')
}
else{
 alert("The student will be Fail")
 grade='Fail'
}
document.write("<br>")
document.write("The score of the student is"+" "+score+"and the grade is"+" "+grade)
var num1=+prompt('Enter the value1')
var num2= +prompt("Enter the value2")
var operations=prompt('Enter the opertion which you want to perform')
switch(operations){
 case "+":
     alert("The sum of two values are:"+(num1+num2))
     document.write("The sum of two values are:"+(num1+num2))
     break;
 case "-":
     alert("The sum of two values are:"+(num1-num2))
     document.write("The sum of two values are:"+(num1-num2))
     break;
 case "*":
     alert("The sum of two values are:"+(num1*num2))
     document.write("The sum of two values are:"+(num1*num2))
     break;
 case "/":
     alert("The sum of two values are:"+(num1/num2))
     document.write("The sum of two values are:"+(num1/num2))
     break;
 default:
     alert("Enter the valid operation")
}
//---------------------------LOOPS---------------------------///
/*There are 5 types of loops are there
1) For loop
2) while loop
3)Do-while loop
4)For-in loop
5)For-of loop */
//SUM OF THE NUMBERS
sum=0
for(i=0;i<=20;i++){
sum=sum+i
}
document.write(sum)


var val=parseInt(prompt("Enter a number"))
while(val!=0){
document.write(val)
document.write("<br>")
val=parseInt(prompt("Enter the number"))
}

//Print the numbers from 0 to 1000
var value=0
while(value<1001){
 document.write(value)
 document.write("<br>")
 value=value+1

}
//Print the sentence for n number of times
var valuee=0
while(valuee<10){
 document.write('Hello world <br>')
 valuee++
}
while(true){
 document.write("Hello world")

} wc
do{ 
 example=prompt("Enter the number")
 document.write("The number is:"+ example)
 document.write("<br>")
}
while(example<0)
//For-in loop is used to point out the position of the element
//for-in is the index based iteration and it works for the iterables
//for-of won't provide the indexes and it only works on the iterables
var fruits=['apple','mango','banana','grapes','kiwi']
for (x in fruits){
document.write(fruits[x] +"<br>")
}
var fruits=['apple','mango','banana','grapes','kiwi']
for (x in fruits){
 document.write(x+"<br>")
}
var arr=['jhansi','naga','venkata','durga','sambhavi']
for(x of arr){
 document.write(x+"<br>")
}
var arr1=['jhansi','naga','venkata','durga','sambhavi']
for(x of arr1){
 document.write(arr1[x]+"<br>")
}

//For Objects we can used the for in and for of
let obj1={name:"jhansi",
       redg:485,
        branch:"ECE-B",
         Section_B:"Yes"}
for(x in obj1){
 document.write(x+"<br>")
}
let obj2={name:"jhansi",
       redg:485,
        branch:"ECE-B",
         Section_B:"Yes"}
for(x in obj2){
 document.write(obj2[x]+"<br>")
}
let obj3={name:"jhansi",
        redg:485,
         branch:"ECE-B",
         Section_B:"Yes"}
for(x of obj3){
  document.write(x+"<br>")
}
let obj4={name:"jhansi",
       redg:485,
        branch:"ECE-B",
          Section_B:"Yes"}
for(x of obj4){
  document.write(obj4[x]+"<br>")
}
let object5={
 first:"Rank",
 Second:"Rank",
 Third:"Rank"
}
for(var [key] of 
 Object.entries(object5)){
 document.write(key+"<br>")
}
let object={
 first:"Rank",
 Second:"Rank",
 Third:"Rank"
}
for(var [key] of 
 Object.entries(object)){
 document.write(object[key]+"<br>")
}

var obj=['one','two','three','four','five']
for (x in obj){
 document.write(x+':'+obj[x])
 document.write("<br>")
}

var colours=['red','green','blue','yellow']
for ( i=0;i<=colours.length;i++){
 document.write(i+':'+colours[i]+'<br>')
}

//Two types to declare the arrays
var naam1=['jhansi','naga','venkata','durga','sambhavi']
document.write(naam1[1])