//Duplicates are not allowed in the sets but in the array it is possible to store the duplicates
//SET means collection of unique values

let s1=new Set()
document.write(typeof s1)
s1.add(10)
s1.add(20)
s1.add(30)
s1.add(30)
s1.add(40)
.add(80)
.add(90)
console.log(s1)

//it splits the word into letters
first='Tadepalligudem'
set2=new Set(first)
console.log(set2)
number=first.delete('a')
console.log(number)

// //if we check the letter whether it is present or not ,so we use has
statement=set2.has('t')
console.log(statement)


//The array contains duplictes but set allows only non duplicate elements
array=[1,2,3,4,3,2,6,7,8]
filter=new Set(array)
console.log(filter)
// for(x of filter){
//     consloe.log(x)
// }
filter.forEach((x,index)=>{
    console.log(x)
})

itr=filter.entries()
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())
console.log(itr.next())

let arr= Array.from(filter)
document.write(arr.toString())