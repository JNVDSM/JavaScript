// calculate the sum of two numbers
function sum(a,b){
    return a+b
}
console.log(sum(5,6))

// find the maximum number in an array
function maxArray(array){
    let max=array[0]
    for(let i=0;i<array.length;i++){
        if (array[i]>=max){
            max=array[i]
        }
    }
    return max;
}
console.log(maxArray([1,2,3,2,34,4,543,4,3,445]))

// check if a given string is a palindrome
function palindrome(string){
    let reverse=''
    for(let i=string.length-1;i>=0;i--){
        reverse+=string[i];
    }
    if (reverse==string){
        console.log("Palindrome")
    }else{
        console.log("Not a palindrome")
    }
}
palindrome("Jhansi")
palindrome("madam")

// reverse a given string
function reverse(string){
    let reverse='';
    for(let i=string.length-1;i>=0;i--){
        reverse+=string[i]
    }
    return reverse
}
console.log(reverse("Jhansi"))

// takes an array of numbers and returns a new array with only the even numbers
function newArray(array){
    finalArray=[]
    for(let i=0;i<array.length;i++){
        if (array[i]%2===0){
            finalArray.push(array[i])
        }
    }return finalArray
}
let result=newArray([1,2,3,6,6,4,7,34,56,34,54,4])
console.log(JSON.stringify(result))

// calculate the factorial of a given number
function factorial(number){
    let fact=1;
    for(let i=number;i>1;i--){
        fact=fact*i
    }
    return fact
}
console.log(factorial(6))

// check if a given number is prime
function prime(number){
    if(number<2){
        console.log("Not a prime number")
        return
        
    }
    for(let i=2;i<number;i++){
        if (number%i===0){
            console.log("It is not a prime number")
            return
        }
    }
    console.log("It is a prime number")
}
prime(-11)

// Fibonacci sequence up to a given number of terms
function fibonacci(number){
    let sum1=0;
    let sum2=1;
    let sum3;
    let result=[sum1,sum2]
    for(let i=2;i<number;i++){
        sum3=sum1+sum2
        result[i]=sum3
        sum1=sum2;
        sum2=sum3
    }
    return result
}
console.log(JSON.stringify(fibonacci(11)))

// Fibonacci sequence addition up to a given number of terms
function fibonacci(number){
    let sum1=0;
    let sum2=1;
    let sum3;
    let total=sum1+sum2
    for(let i=2;i<number;i++){
        sum3=sum1+sum2
        total=total+sum3
        sum1=sum2;
        sum2=sum3
    }
    return total
}
console.log(JSON.stringify(fibonacci(11)))

// print the vowels in a string
function vowels(string){
    let result=[]
    for(let i=0;i<string.length;i++){
        if ('aeiouAEIOU'.includes(string[i])){
            result.push(string[i])
        }
    }
    return result
}
console.log(JSON.stringify(vowels("Mannidi Jhansi Naga Venkata Durga Sambhavi")))

//Count the number of vowels in a string
function vowels(string){
    let count=0
    for(let i=0;i<string.length;i++){
        if ('aeiouAEIOU'.includes(string[i])){
            count++
        }
    }
    return count
}
console.log(vowels("Mannidi Jhansi Naga Venkata Durga Sambhavi"))

// Find the second largest number in an array
function secondLargest(array){
    let firstMax=-Infinity;
    let secondMax=-Infinity;
    for(let i=0; i<array.length;i++){
        if (array[i]>firstMax){
            secondMax=firstMax
            firstMax=array[i]
        }else if (firstMax>array[i] && array[i]>secondMax){
            secondMax=array[i]
        }
    }
    console.log(secondMax)
}
secondLargest([1,2,3,4,5,3,-289,4,3,34,767,-324,23])

// Remove duplicate elements from an array
function duplicate(array){
    let result=[]
    for(let i=0;i<array.length;i++){
        if (result.includes(array[i])){
            continue
        }else{
            result.push(array[i])
        }
    }return result;
}
console.log(duplicate([1,2,3,4,2,3,4,5,3,4,5,5,1]))
