"use strict"

const personProtyopes = {
    greeting: function(){
        return `Hello Mrs ${this.firstName} ${this.lastName}`;
    },
    getMarried : function(newLastName) {
        this.lastName = newLastName;
    }
}
let prsn1 = Object.create(personProtyopes);
prsn1.firstName = "Pranab";
prsn1.lastName = "Acharya";
prsn1.age = 25;

prsn1.getMarried("Panda");

console.log(prsn1);
console.log(prsn1.greeting());

const prsn2 = Object.create(personProtyopes, {
    firstName : {value : "Nibedita"},
    lastName : {value : "Acharya" },
    age : {value : 28},
});

console.log(prsn2.greeting());