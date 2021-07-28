var dog={
    name:"bark simba",
    age:5,
};
console.log(dog.name);

var moringaStudent={
    fName:"Joseph",
    lName:"Gakumo",
    age:10,
    color:"HandsomeBrack",
    Hobbies:["watching","dancing","singing","accessing"],
    myFunction:function(){
        console.log("papapapapappappappappapappappapappappappa");
    },
    humanYears:function(){return this.age*7},
   
};
console.log(moringaStudent.Hobbies);
console.log(moringaStudent['myFunction']());
console.log(moringaStudent.Hobbies.push("Coding"));
console.log(moringaStudent.Hobbies);
console.log(moringaStudent.age+20);
console.log(moringaStudent.humanYears());



var flower={
    name:"Rose",
    color:"red",
    height:20,
    plant:"flower",

};
flower["height"]=450;//charging height of flower
flower["color"]="purple";
flower.color;
flower.pollination="Bee";//adding a list to an object
flower.creature="Human";
flower.grow="function(){return this.height+20}";
console.log(flower.height);


let person={
    name:"jones",
    age:40,
    city:"NewKenya",
}
let text="";
for(let x in person){
    text+=person[x] + " ";
    console.log(text);
};

// converting object to an array
const myArry=Object.values(person);
console.log(myArry);
const myA=Object.values(flower);
console.log(myA);
let myALenght=myA.length;
console.log(myALenght);

let numbers=[20,4,30,29,40,30];
function myFunction(){
numbers.forEach(function(number){
    if(number>=30){
        console.log(number);
        const numberArry=Object.values(number)
        let size=numberArry.length;
        console.log(size);

    }
});
} 
myFunction()
