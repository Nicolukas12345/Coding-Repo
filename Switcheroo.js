//P
/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
: string "bca"
E: input: "aabacbaa" output: "bbabcabb"
P: switchAB (string)
    switchKey = {"a":"b", "b":"a"}
    return string.split("").map((element) => switchKey[element]).join("")

*/
function switcheroo(x){
  let switchKey = {"a":"b", "b":"a", "c":"c"};
  return x.split("").map((element) => switchKey[element]).join("");
}


