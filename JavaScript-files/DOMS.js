/* 
1) document.getElementById('name present in the div')
2)document.getELementByClassName('')
3)document.getElementByTagName('h2')//tagname
4)document.querySelector("#id" or '.classname' or 'tagname')//it prints the first division
5)document.querySelectorAll('.classname' or 'id')
*/
var names=['jhansi','jayasri','amruthavalli','spandhana','swapna']
names.sort()
document.write(names)

var numbers1=[1,24,5,2,52,56,76,4,6,100,4,69]
numbers1.sort()
document.write(numbers1+'<br>')
document.write(numbers1[1]+'<br>')//it is not working

//To print the second largest element in the array
var numbers=[1,24,5,2,52,56,76,4,6,-100,4,69]
numbers.sort((a,b)=>a-b)
document.write(numbers+'<br>')
document.write(numbers[1])

//We can change the color in JavaScript
var x=document.getElementById('first')
x.style.color='pink'
x.style.border='black 1px solid'
x.style.background='yellow'
x.setAttribute('src','image .jpg')//it can replace the image

//------MODEL WINDOWS-----------
//custom model boxes
var a=prompt('are you sure to delte the message')
document.write(a)

//it returns the true false statements
var a=confirm('are you sure to delte the message')
document.write(a)

//--------------EVENT----------------
//Doing action in webpage is nothing but an event
/*
-----mouse events     -----keyboard events   -----focus events
->click                ->key down             ->focus
->double click         ->key up               ->blur
->mouseover            ->key press            ->focusin
->mouseout                                    ->focusout
->mouse move

-----form events
->submit
->reset
->change */

//-----------
function name(name1,name2){
    for(i=0;i<name1.length;i++){
        if(name1.charAt(i)==name2){
            name2=name2+1
        }
    }return name2
}name3=name('saikiran','s')
document.write(name3)


var name=parseChar(prompt("Enter your name"))
for(x of name){
    if(name.charAt(x)==name){
        name=name+1
    }return name
}document.write(name,name.length)


var num=parseInt(prompt('enter a anumber'))
var range=parseInt(prompt('enter the range'))
for(i=1;i<=range;i++){
    result=i*num
    document.write(result)
}

array=[1,2,3,4,6,5,10,15,12]
array.sort()
document.write(array)
let s1= new Set()
s1.add(10)
 document.write(s1)

