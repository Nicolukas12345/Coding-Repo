/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
Arguments (Haskell)

    First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
    Second argument: the original string to be converted.

Arguments (Other languages)

    First argument (required): the original string to be converted.
    Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.

Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

//PREP
/*
P: 2 strings a sentence and group of words for exceptoiin
R: string
E: input "a clash of KINGS" "a an the of" output: "A Clash of Kings"
P: titleCase()
    title <- title.split(" ")
    buffer
    minorWords <- minorWords.split(" ")
    buffer <- 0
    buffer <- title[0].split("")
    title[0] <- buffer[0].toUpperCase() + buffer.splice(1).toLowerCase()
    FOR i <- 1 TO title.length
      IF NOT minorWords.find((elemenet) === title[i]) THEN
        buffer <- 0
        buffer <- title[i].split("")
        title[i] <- buffer[0].toUpperCase() + buffer.splice(1).toLowerCase()
    RETURN title
*/

function titleCase(title, minorWords) {
    title = title.split(" ");
    let buffer;
    minorWords = (minorWords ?? "").toLowerCase().split(" ");
    buffer = 0;
    buffer = String(title[0]).split("");
    title[0] = (buffer[0] ?? "").toUpperCase() + buffer.splice(1).join("").toLowerCase();
    for (let i = 1; i < title.length; i++){
      if (!minorWords.find((element) => element === title[i].toLowerCase())){
        buffer = 0;
        buffer = String(title[i]).split("");
        title[i] = buffer[0].toUpperCase() + buffer.splice(1).join("").toLowerCase();
      }else {
        title[i] = title[i].toLowerCase();
      }
    }
    return title.join(" ");
}
