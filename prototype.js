function Person(first,last,age,color){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.color=color;

    //adding a property
    // this.nationality="EnglishMen"
}
//adding a property using prototype
    // Person.prototype.nationality="English"
    Person.prototype.name=function(){
        return this.firstName+ " "+ this.lastName;
    }
var father=new Person("John","Ngeno",23,"dark");
var mother=new Person("Mary","Wambui",49,"brown");
console.log(father.name() );


function Drinks(color,flavore,taste){
 this.drinkTaste=taste;
 this.drinkColor=color;
 this.drinkFlavore=flavore;
}
var coc=new Drinks("dark","sweet","sweeter");
var fanta= new Drinks("orange","lemon","sweet");
Drinks.prototype.name=function(){
    return this.drinkColor+ " " +this.drinkFlavore + " " +this.drinkTaste;
}
console.log(fanta.name());