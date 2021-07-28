// business logic

function Contact(first,last,phone){
    this.firstName=first;
    this.lastName=last;
    this.telephoneNumber=phone;
}
Contact.prototype.fullname=function(){
    return this.firstName + " "+ this.lastName;
}

// jquery to get data 

// interface logic
$(document).ready(()=>{
    $("#new-contact").submit((event)=>{
        event.preventDefault();
        
        var inputtedFirstName=$("#new-first-name").val();
        var inputtedLastName=$("#new-last-name").val();
        var inputtedTelephoneNumber=parseInt($("new-phone-number").val());
        
        // to create new object 
        var newContactCreated=new Contact(inputtedFirstName, inputtedLastName, inputtedTelephoneNumber);

        // to  display the number user logic
        $("#display").append("<li><span class='contact'>"+newContactCreated.fullname() + "</span></li>");
        // $("#display").append("<li><span class='contact'>"+newContactCreated.lastName + "</span></li>");
        $("#display").append("<li><span class='contact'>"+newContactCreated.telephoneNumber + "</span></li>");

        $("#new-first-name").val("");
        $("#new-last-name").val("");
        $("#new-phone-number").val("");

        // show details of contact
        $("#display").last().click(()=>{
            $("#show-contact").show();
            $("#show-contact h2").text(newContactCreated.firstName);
            $(".first-name").text(newContactCreated.firstName);
            $(".last-name").text(newContactCreated.lastName);
            $(".telephone-number").parseInt((newContactCreated.telephoneNumber));
        });

    });
});