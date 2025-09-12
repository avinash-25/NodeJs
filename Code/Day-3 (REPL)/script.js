setTimeout(() => {
    console.log("Inside timedout - 1");
}, 2000)

setTimeout(() => {
    console.log("Inside timedout - 2");
}, 5000)

Promise.resolve().then(() => {
    console.log("Promise");
})

console.log("Hello world");