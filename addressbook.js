function Contacts(first,last){
 this.firstName=first;
 this.lastName=last;

}
Contacts.prototype.fullname=function(){
    return this.firstName+ " "+ this.lastName;
};

var person1=new Contacts("Joseph","Gakumo");
var person2=new Contacts("Teresiah","Wairimu");
console.log(person2.fullname());