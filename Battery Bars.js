/*
Your phone shows its battery as a row of 5 bars. Each full bar represents 20% of charge. A bar only lights up when its whole 20% is reached.

Write a function battery_bars(percent) that returns the battery as a string: # for a lit bar, . for an empty one, all wrapped in square brackets.
Examples

battery_bars(100)  # => "[#####]"
battery_bars(70)   # => "[###..]"
battery_bars(20)   # => "[#....]"
battery_bars(19)   # => "[.....]"
battery_bars(0)    # => "[.....]"
*/

//PREP
/*
P: integer
R: string
E: input: 100 output: "[####]"
P:
batteryBars(percent)
  format = "[....]"
  FOR index = 0 TO percent / 20
    format.replace(".", "#")
  RETURJ fortmat
*/

function batteryBars(percent) {
  let format = ("[.....]");
  for (let i = 1; i <= (percent / 20); i++){
    format = format.replace(".", "#");
  }
  return format;
}
