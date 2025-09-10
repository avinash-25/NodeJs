## NodeJs

### sync

- Synchronous means each task at a time, js will execute a single task then it will move to the nest task.
- It is also called as blocking code and js engine has to wait for the remaining lines of code to execute.
- In this code will execute top to bottom.

### async

- async means task will be executed at last after all the sync statements, once the callstack is empty. event loop will only push the callback or promices only when call stack is empty.
- microtask queue has higher priority than callback queue.
-
- Code will wait in in web API until it time expires.
- Then the callback function will be moved to the callback queue then after event loop will constattly check the callstact to empty.
- When callstack will become empty then that callcak function will moved to the callstack then that executes.

- Microtask queue have more priority than callback quque..




- js engine is part of browser.
- in the browser only **callstack** is said to be v8 engine all other are part of browser like web api, event loop etc.



### promice

- it is a object.
- it represents eventual completion of an async task.
- pending, fulfilled,


// akshay sahni
// namste developers


