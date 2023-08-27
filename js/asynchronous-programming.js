/*
Synchronous program is run step by step
synchronous function: a function required in these steps
*/

/*
Asynchronous function starts long operations and return immediately, allowing program to do other things.
Notify us when finished
*/

/*
Samples of async programming:
CALLBACKS
callback: function that's passed into another function, expected to be called at the appropriate time
*/

// Example of Callback:
// Gep API using XMLHttpRequest
const xhr = new XMLHttpRequest();

xhr.addEventListener('loadend', () => {
  console.log(`Finished with status: ${xhr.status}`);
}); // calls a callback when finished

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send(); // call the async function and return immediately
console.log(`Started XHR request\n`);

/*
Callbacks are nested and called many times,
so are harder to read and debug.
Therefore we use promises...
*/

/*
 Promises
*/
