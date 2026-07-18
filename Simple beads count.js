/*
Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement a function returning the number of red beads.
If there are less than 2 blue beads return 0.
*/

//PREP
/*
P: integer: number of blue beads
R: integer: number of red beads (2 between every 2 beads zero if less than 2 blue beads)
E: 2 blue beads shoudl return 2 red beads, 3 blue beads should return 4 red beads
P: countRedBeads (blueBeads)
    if (blueBeads < 2)
      return 0
    else
      return blueBeads + blueBeads - 2;
*/


function countRedBeads(n) {
  return ((n < 2) ? (0) : (n + (n - 2)));
}
