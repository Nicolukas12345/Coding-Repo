/*
As you know, a promise is in one of these states: pending, fulfilled, rejected.

Implement the async function getState that determines a state of a promise.

const p = Promise.resolve();
const state = await getState(p); // === "fulfilled"

const p = Promise.reject();
const state = await getState(p); // === "rejected"

const p = new Promise(() => {});
const state = await getState(p); // === "pending"
*/

//PREP
/*
P: promise with predefined state
R: state of the promise as a string
E: p = Promise.resolve();
   getState(p) returns, "fulfilled"
   p = Promise.reject() 
   getState(p) returns, "rejected"
   p = Promise(() => {})
   getState(p) returns, "pending"
P:
function getState(promise)
  Promise.race([promise, "pending"]).then((val) => val === "pending" ? "pending" : "fulfilled").catch(() => "rejected")
*/

function getState(promise) {
  return Promise.race([promise, "pending"]).then((val) => val === "pending" ? "pending" : "fulfilled").catch(() => "rejected")
}
