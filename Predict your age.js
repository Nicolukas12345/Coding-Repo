/*
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

    Take a list of ages when each of your great-grandparent died.
    Multiply each number by itself.
    Add them all together.
    Take the square root of the result.
    Divide by two.

Example

predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
*/

//PREP
/*
P:integer; grand1, grand2, gran3, grand4, grand5, grand6, grand7, grand8;
R:integer return result 
E: 65, 60, 75, 55, 60, 63, 64, 45) === 86
P: ageDie (grand1, grand2, gran3, grand4, grand5, grand6, grand7, grand8)
       array = age1,age2,age3,age4,age5,age6,age7,age8
       result = 0
       loop 
           result + element^2
       return (sqauereoot (result) / 2)
*/

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let array = [age1,age2,age3,age4,age5,age6,age7,age8];
    let result = 0;
    for (let i = 0; i < array.length; i++){
        result += array[i]**2;
    }
    return Math.floor((Math.sqrt(result)/2));
}
