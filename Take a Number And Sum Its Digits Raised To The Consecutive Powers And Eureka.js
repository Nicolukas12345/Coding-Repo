/*
The number 
89
89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
89
=
8
1
+
9
2
89=8 
1
 +9 
2
 

The next number in having this property is 
135
135:

See this property again: 
135
=
1
1
+
3
2
+
5
3
135=1 
1
 +3 
2
 +5 
3
 

Task
We need a function to collect these numbers, that may receive two integers 
a
a, 
b
b that defines the range 
[
a
,
b
]
[a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Examples
Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range 
[
a
,
b
]
[a,b] the function should output an empty list.

90, 100 --> []
Enjoy it!!

Fundamentals
*/

//PREP
/*
P: 2 integers
R: array of integers
E: input: 1, 10 output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
P: eureka(a, b)
    number = ""
    possibleEureka = 0
    eurekaArray = []
    FOR index <- a TO b
      buffer = String(index).split("")
      FOR index2 <- 1 TO buffer.length
        possibleEureka <- possibleEureka + (Number(buffer[index2]) ** index2)
      IF index === possibleEureka THEN
        eurekaArray.push(index)
    RETURN eurekaArray
*/
function sumDigPow(a, b) {
  let number = "";
  let possibleEureka;
  let eurekaArray = [];
  for (let i = a; i <= b; i++){
    number = String(i).split("");
    possibleEureka = 0;
    for (let j = 1; j <= number.length; j++){
      possibleEureka += (Number(number[j-1]) ** j);
    }
    if (i === possibleEureka){
      eurekaArray.push(i);
    }
  }
  return eurekaArray;
}
