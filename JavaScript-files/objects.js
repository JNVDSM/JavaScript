/*There area 4 methods in the object
1)access object values
2)add new properties of object
3)Using new operator with constructer
4)object.create method*/


let obj={
    Name:'Jhansi',
    Section:'B',
    Branch:'ECE',
    Regdno:'20K61A0485'
}
console.log(obj)
obj.year=2024//to add new element in the object
obj['age']=22//to add new element in the object
console.log(obj)
console.log(obj.Section)
console.log(obj['Regdno'])
obj.year=2025
console.log(obj)


//Using new operator in the object
let obj2=new Object()
obj2.name='JavaScript'
obj2.age=22
console.log(obj2)

//Using 'new' operator with constructer function
function object_creation(n,a,s){
    this.name=n;
    this.age=a;
    this.section=s
}
let creation1=new object_creation('jhansi',20,'B')
console.log(creation1)
let creation2=new object_creation('jhansi_mannidi',19,'B')
creation2.place='kadiyadda'
creation2['mobile']=7893151303
console.log(creation2)
console.log(creation2.mobile)

//Object.create method
let obj1=new user('jhasi',22)
console.log(obj1)
let obj3=Object.create(creation1)
obj3.name='jhansi'
obj3.age=23
console.log(obj3)


let obj4=Object.create(creation1,{
    name:{ value:'jhansi' },
    age:{value:26}
})
console.log(obj4)

function customer(n,a,m,p){
    this.name=n,
    this.age=a,
    this.mobile=m,
    this.place=p,
    this.login=function (){
        console.log('Hello'+this.name)
    }


}
new_customer= new customer('jhansi',20,7893151303,'kadiyadda')
console.log(new_customer)
new_customer.login()

function student(n,r,c,s,y){
    this.name=n,
    this.regd_no=r,
    this.class=c,
    this.section=s,
    this.year=y,
    this.login=function (){
        console.log('hello'+this.name)
    }
}
details=new student('jhansi','20k61a0485','B.tech','B',4)
console.log(details)
details.login()

function user(a,b,c){
    this.name=a,
    this.regd=b,
    this.roll_no=c
}
let user1=new user('jhansi',485,7893151303)
let user2=new user('jaan',789,1234567898)
for(key in user1){
    console.log(key,user1[key])
}

console.log(Object.keys(user1))
console.log(Object.values(user1))
console.log(Object.entries(user1))
console.table([1,2,3,4,5,'pqr'])