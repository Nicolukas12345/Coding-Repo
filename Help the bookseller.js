/*
A bookseller has lots of books classified in 26 categories labeled A, B, C, ..., Z. Each book has a code of at least 3 characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code is followed by a space and by a positive integer, which indicates the quantity of books of this code in stock.
Task

You will receive the bookseller's stocklist and a list of categories. Your task is to find the total number of books in the bookseller's stocklist, with the category codes in the list of categories. Note: the codes are in the same order in both lists.

Return the result as a string described in the example below, or as a list of pairs (Haskell/Clojure/Racket/Prolog).

If any of the input lists is empty, return an empty string, or an empty array/list (Clojure/Racket/Prolog).
Example
*/

//PREP
/*
P: 2 arrays of strings
R: array strings
E: input: "ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60" "A", "B", "C", "W" output: "A: 20", "B: 114", "C":50, "W":0
P: stockList(books, catergories)
    categoryObject = {}
    categories.forEach((element) => categoryObject[element] = 0)
    FOR book IN books
      IF NOT isNaN(cateryObject[book[0][0]]) THEN
        categoryObject[book[0][0]] += book[1]
    result = `(${categories[0]} : ${categoryObject[categories[0]]})`
    FOR index = 1 TO categories.length
      result += `- (${categories[character]} : ${categoryObject[character]})`
    RETURN result
*/
function stockList(books, categories) {
    let categoryObject = {};
    if (books.length === 0 || categories.length === 0) {return ""};
    categories.forEach((element) => categoryObject[element] = 0);
    for (let book of books){
      if (!isNaN(categoryObject[book[0][0]])){
        book = book.split(" ");
        categoryObject[book[0][0]] += Number(book[1]);
      }
    }
    let result = (`(${categories[0]} : ${categoryObject[categories[0]]})`);
    for (let i = 1; i < categories.length; i++){
      result += (` - (${categories[i]} : ${categoryObject[categories[i]]})`);
    }
    return result;
}
