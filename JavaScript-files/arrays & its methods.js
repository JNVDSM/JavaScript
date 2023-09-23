//the below code is used to replace the elements in the array
var array1=['jhansi','naga','venkata','durga','sambhavi']
array1[0]='mannidi'
document.write(array1)

//the given code is used to add the element in the array without deleting any element in the array
var array1=['jhansi','naga','venkata','durga','sambhavi']
array1.splice(4,0,'mannidi')
document.write(array1)

 
var naam2=new array('jhansi','naga','venkata','durga','sambhavi')
document.write(naam2[1])//no result

//to add an element in the array at last
var array0=["red","green","yellow","pink","blue"]
array0.push("white")
document.write(array0)
console.log(array0)

var array=["red","green","yellow","pink","blue"]
let a= array.push("white")
document.write(a)
document.write(array)

// remove the last element in the array
var array0=["red","green","yellow","pink","blue"]
document.write(array0.pop())
document.write("<br>")
document.write(array0)

//add the element in the array at first
var arrays=['jhansi','madhuri','sravanthi','sravani']
arrays.unshift('sandhya')
document.write(arrays)

//remove the element at first in the array
var numbers=['485',678,567,739]
numbers.shift()
document.write(numbers)

//to find the index of the element in the array
var number=['485','678','789',987,'263']
document.write(number.indexOf(987))//it gives an actual index result

//to find the index without the element is present it gives -1 value
var arrays=['jhansi','madhuri','sravanthi','sravani']
document.write(arrays.slice(0,3))


//if you want specific lenth data in the array we use slice 
var arrays=['jhansi','madhuri','sravanthi','sravani']
document.write(arrays.slice(0,3))
