//if we dont write 'return' in the body of the function the output will not display in the outer function
function func(a,b){ 
    add=a+b
    return add
}
answer=func(3,7)
document.write(answer)

function func(a,b){ 
    add=a+b
   document.write("The result is"+add+"<br>")
}
answer=func(3,7)
func(3,9)
func(7,8)

//to store the function in variable and call the function with variable name it also work
store=function fun_name(a,b,c){
    operation=a*b*c
    return operation
}
store(3,6,7)
document.write(operation)

/////////-------TYPES OF FUNCTIONS-----////
/* 1) Named functions
2) Anonymous Function 
3) Immediately Invoke Expression Function
4) Arrow Functions */


//Named functions means to give the function name 
function named(a,b,c){
    d=a+b+c
    return d
}
named(1,2,3)
document.write(d)

//Anonymous function means we didn't give any function name
let x1=function(a,s,g){
    add=a+s+g
    return add
}
x1(1,2,3)
document.write(add)

//Immediate invoke expression function means we call the function after the paranthesis
(
    x=function(a,b,c){
        d=a+b+c
        return d
    }
    
)
x(1,2,7)
document.write(d)

//ARROW FUNCTIONS 
/* 1) single statement
2) single argument 
3) if no arguments  */
arrow=(a,b)=>{
    a+b 
   return a+b
}
document.write(arrow(2,5))

//single statement in the function body
var single=(num1,num2,num3)=>num1*num2*num3
document.write(single(1,2,3))
 
//single argument
var arg=num1=>{a= num1*num1*num1
b= num1+num1+num1
return a,b
}
arg(11)
document.write(a,"<br>",b)

//second method to print the many values in function
var arg=num1=>{document.write(num1+num1,num1*num1)
}
arg(11)


//No arguments are passed in the function we use () and _ in place of arguments
no_arg=()=>{document.write("Hello World <br>") 
document.write('Good Morning')}
no_arg()

no_arg= _ =>{document.write("Hello World <br>") 
document.write('Good Morning <br>')
return 6+7}
result=no_arg()
document.write(result)
var x=100
function name(){
    let z=100
   x=x+10 
    document.write(x)
}

console.log(z)
name()

document.write(x)



//-----Default parameters in functions-------------
function name(name1,name2){
    document.write(name1,'<br>')
    document.write(name2)
    return name1,name2
}
name('jhansi','jyo')

 
function name(name1,name2,name3){
    document.write(name1,'<br>')
    document.write(name2 ,'<br>')
    document.write(name3)
}
name('jhansi','jyo','ram','Mohan')  


//--Rest Parameter-----
function product(num1,num2){
    document.write(num1*num2)
}
product(3,6)

// pass only one argument it gives NAN , because there are two parameters but pass only one argument
function product(num1,num2){
    document.write(num1*num2)
}
product(3)


//--default parameters
//if we pass only one argument  but predefined the value of the parameter
function product(num1,num2=1){
    document.write(num1*num2)
}
product(3)


//here we pass two parameters but we give more than two arguments it is also sufficient
function product(num1,num2){
    document.write(num1*num2)
}
product(3,2,3,4)

//Rest parameters begins
function rest(num1,num2,...arg){
    document.write(arg+'<br>')
    document.write(arg.length+'<br>')
    document.write(rest[2])
    result=num1*num2
    for(num of arg){
        result=result*num
    }
    return result
}
rest(1,2,3,4,5,6,7,8,9,10)
document.write(result)

//-----------FOR EACH METHOD(in arrays)------------
var salaries=[200,300,400,500,100]
salaries.forEach((salary,index)=>{
    increment=salary/10
    salaries[index]=salary+increment
})
document.write(salaries)

//syntax for forEach is
array=[1,2,3,4,5,6,9]
array.forEach(
    (value,index,total_array)=>{
        document.write('hi',value,index,total_array)
    }
)

//example for forEach
var salaries=[12,23,34,45,6,78,99]
salaries.forEach((value,index,c)=>{
    document.write('Hello Jhansi'+' ',value+'   '+index+' ',c+'<br>')
})

//second example
let array=[1,2,3,4,5]
array.forEach(function_name)
function function_name(items,index,arr){
    document.write('hello array',items,index,arr)

}

//to print the salary with increment
var salary=[10,20,30,40,50]
salary.forEach((one,index)=>{
    let Increment=one/10
    salary[index]=one+Increment
    return salary
})
document.write(salary)

var salary=[10,20,30,40,50]
salary.forEach(hello)
function hello(one,index){
    increment=one/10
    salary[index]=one+increment
}
document.write(salary)