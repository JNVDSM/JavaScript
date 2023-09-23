
      
<button onClick="alert(' Hello world..')">Click Here</button>
    
        function change(){
            document.body.style.backgroundColor="yellow"
        }
        let name=document.getElementById('jhansi')
        name.onclick=change;
        function change(){
            document.body.style.backgroundcolor='blue'
        }

        
        //there are three types of variable declarations 1)var 2) let 3) const, and also declare directly
        var xyz=7
        document.write(xyz)
        let xy=4
        document.write(xy)
        const y=1
        document.write(y)
        names="jhansi"
        document.write(names)
        
/* we can print the data in three different types
  1) document.write()
  2) alert()
  3) document.getElementById('give the id name').innerHTML='What you want to print the information' */
    // document.write("It prints the information")
    // alert('it is also prints the data in the form of popups')
    // document.getElementById('name').innerHTML="the innerhtml is used to print the code and change the code"

//---------------------STRING METHODS----------------------------
name='jhansi'
document.write(name[1])

name='jhansi'
document.write(name.length)

email='jhansi485@sasi.ac.in'
document.write(email.indexOf('a'))

let first='jhansi'
last='mannidi'
middle='naga venkata durga sambhavi'
let full_name=first+' '+middle+' '+last
document.write(full_name+'<br>')
b=full_name.toUpperCase()
document.write(full_name ,'<br>',b)
//We Want 10 letters in the string but it has only 6 charachters so we replace * in the remaining 4 places at starting
let string='jhansi'
let strings=string.padStart(10,'*')
document.write(strings)

console.log(string.charAt(0).toUpperCase()+string.slice(1))

name='jhansi'
name2=name.charCodeAt(1) 
document.write(name)

text='asddffg'
text2=text.split('_')
document.write(text2)

x='100'
y='10'
document.write(x/y)

//0x infront of the every element that changes to hexa decimal
t=0x11
document.write(t)

let x1=999
let y1=BigInt('999')
document.write(x1+'<br>'+y1)

//to add the 0's after the decimal places(toFixed()) is used
var a=9.876
document.write(a.toFixed(0))
document.write(a.toFixed(2))
document.write(a.toFixed(10))

//it acts as round ,it prints the value based upon the number we give into the paranthesis
var b=9.8766
document.write(b.toPrecision(3))


a=Number(new Date("05-09-2023"))
document.write(a)


let name=parseChar(prompt("Enter the name"))
var text=name.matchAll("a")
document.write(text)
//slice is used to print the letters start with 5th letter and end with n because it prints onlu the letters present in between the 5 annd 10
name='Jhansi Mannidi'
document.write(name.slice(5,10))
document.write('<br>')

//substr is used to print the letters in string ,here 5 is the starting value and 10 value means it prints the 10 letters 
name='Jhansi Mannidi'
document.write(name.substr(5,10))


// to replace the letters 
name='jhansi'
document.write(name.replace('jhansi','jaaanu'))
 
// here we can replace  only one letter in the string , the result in the given word is "maknidi"
name='mannidi'
document.write(name.replace('n', 'k'))

console.log(10/2)
console.log(10%2)

document.write(10/2,'<br>')
document.write(10%2)

document.write(10*2,'<br>')
document.write(10**2)

//== checks the value but === checks the value and data type
 

number =10
 document.write(number+1)
document.write(++number)


name='jhansi'
name2='mannidi'
result=(`${name}${name2} is a beautiful girl `)
document.write(result)

let names=['jhansi','naga','venkata','durga','sambhavi']
document.write(names)

//the space is created in between the elements
names=['jhansi','naga','venkata','durga','sambhavi']
document.write(names.join(' '))


name=['jhansi','mannidi']
result=name.include('browser')
document.write(result)

//JavaScript is the case sensitive
let name='ravi'
document.write(name=='Ravi')

// we can use the keyword "prompt" , it gives the check box at the top
      var  a=prompt("Please enter the number")
       alert("The given number is"+a)
       document.write("The given number is"+a)
       

       var x=prompt("Enter the number")
        
        if(x<0){
           alert("The given number is less then 0")
           document.write("You entered the value: "+x)
        }
        
        else{
            alert("you entered a large number ")
            document.write("You entered the value: "+x)
        } 
// //there are two type convertions are there 1) implicit type convertion  2) explicit type convertion
document.write(2+"5") // In this case the + is not work because it works as concadenation
document.write(2-"5")
document.write("<br>")
// //we want to print only the the wanted data so we can use the keyword parse
let BC=parseInt("45777.667788990000jhansi485") //parseInt can print only the integers infront of the char ,it leaves the integers after the char
document.write(BC) 
 document.write('<br>')
 let b=parseFloat("45777.667788990000jhansi485") //parseFloat can print upto float values are ended infront of the char ,it leaves the integers after the char
document.write(b) 
let ba=parseChar("45777.667788990000jhansi485") //parseChar can print uthe characters format only ,it leaves the integers after the char
document.write(ba)
let ban=parseChar("jbixskhbgx33")
document.write(ban)
