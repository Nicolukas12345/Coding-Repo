/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

//PREP 
/*
P: string, name
R: string, greetName
E: input Nicolas
   output: Hello Nicolas!
P: greeting (name)
       greetName = name[0].upper + name.slice(1)
       return "Hello " + greetName + " !"
*/

var greet = function(name) {
    return `Hello ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;
};
