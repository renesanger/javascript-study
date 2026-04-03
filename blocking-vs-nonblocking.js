/* 

  Javascript is single threaded,
  This means that javascript can only do one thing at a time.
  There's one thread, one lane of traffic.

  Blocking vs. Non-blocking
  Blocking: Stop everything and wait
  Non-blocking: start the task, move on, come back once the task is done.

  a callback function allows you to do this
*/

//Here is an example
console.log("1 - Start");

setTimeout(() => {
  console.log("2 - Inside timeout");
}, 2000);

console.log("3 - End");

/*
Output:
1 - Start
3 - End
2 - Inside timeout   ← appears 2 seconds later
*/
