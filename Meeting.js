/*
//PREP
/*
P: string
R: string
E: input: "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill" output: "(CORWILL, ALFRED)(CORWILL, FRED)..."
P:
meeting(s)
  s = s.split(";")
  s = s.map((element) => elemet.toUpperCase());
  FOR name OF s
    name.split(":")
    name.push(name.shift)
    name = (`(${name.join(", ")})`);
  RETURN s.join("")

*/
function meeting(s) {
  s = s.split(";").map((element) => element.toUpperCase());
  for (let i = 0; i < s.length; i++){
    s[i] = s[i].split(":");
    s[i].push(s[i].shift());
    s[i] = (`(${s[i].join(", ")})`);
  }
  return s.sort().join("");
}
