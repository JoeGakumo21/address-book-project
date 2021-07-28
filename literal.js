var dog={
    name:"Ronja",
    color:"Yellow-red",
    age:12,
}
// usin construcot to avoid repetation
// constructor and prototypes
var testGreeting= new String("hello");
testGreeting;
console.log(testGreeting);

 function Dog(name,color,age){
    this.name=name;
    this.color=color;
    this.age=age;
}
Dog.prototype.back=function(){
    console.log("guguguguuuuguguguuu");
}
var Dog1=new Dog("Ronja","red",10);
var Dog2=new Dog("kenya","Puppy",34);
console.log(Dog1.name+"\n" +Dog2.name);


function Rentals(houseNo, design,color,charges,door){
    this.color=color;
    this.charges=charges;
    this.door=door;
    this.houseNo=houseNo;
    this.design=design;

}
var house1=new Rentals(1,"","blue");
var house3=new Rentals(3,"oval","green",12000,"metal");
console.log(house3.charges);

function User(name,age){
    this.name=name;
    this.age=age;
}
var joe=new User("Joseph GAkumo",22);
var joee=new User("Joseph GAkummbvcxcvmo",322);
var joel=new User(" GAkumo",2);
console.log(joe);


