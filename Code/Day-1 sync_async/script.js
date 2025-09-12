//! Ex 1 (synchronous)

// console.log("start");
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// console.log("middle");
// console.log("end");

//! Ex 1 (asynchronous)

// setTimeout(() => {
//     console.log("Inside Timeout");
// }, 0);

//todo:  0 is saying that How much minimum time to wait.
//todo:  maxm time depends on how lengthy the code is.

// console.log("Start");

// for (let i = 0; i < 2000; i++) {
//     console.log(i);
// }

//! Ex 2

// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 2000)

// setTimeout(() => {
//     console.log(3);
// }, 1000)

// console.log(4);


//! Ex 3

// setTimeout(() => {
//     console.log("timeout 1");
// });

// for (let i = 0; i < 2000; i++) {
//     console.log("");
// }

// console.log("start");


// ============================================
// JAVASCRIPT PROMISES & ASYNC/AWAIT EXAMPLES
// ============================================

// ==========================================
// EXAMPLE 1: Basic Fetch with Promises
// ==========================================

// Basic fetch API usage with promise chaining
let promise = fetch("https://jsonplaceholder.typicode.com/posts");

promise
    .then((response) => {
        console.log("Response object:", response);

        // Convert response to JSON (returns another promise)
        let jsonData = response.json();
        console.log("JSON Promise:", jsonData);

        // Handle the JSON promise
        jsonData
            .then((data) => {
                console.log("Actual data:", data);
            })
            .catch((err) => {
                console.log("JSON parsing error:", err);
            });

        console.log("Inside then block");
    })
    .catch((err) => {
        console.log("Fetch error:", err);
        console.log("Inside catch block");
    });

// ==========================================
// EXAMPLE 2: Creating Custom Promises
// ==========================================

// Creating a custom promise
let customPromise = new Promise((resolve, reject) => {
    let a = 11;

    if (a === 11) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

// Consuming the custom promise
customPromise
    .then((data) => {
        console.log("Success:", data);
    })
    .catch((err) => {
        console.log("Error:", err);
    });

// ==========================================
// EXAMPLE 3: Better Promise Chaining
// ==========================================

// More organized promise chaining
let fetchOutput = fetch("https://jsonplaceholder.typicode.com/posts");

fetchOutput
    .then((response) => {
        console.log("Response received:", response);

        // Return the JSON promise to chain it properly
        let jsonPromise = response.json(); // Returns a promise
        console.log("JSON Promise created:", jsonPromise);

        return jsonPromise; // Better approach: return for proper chaining
    })
    .then((actualData) => {
        console.log("Final data:", actualData);
    })
    .catch((err) => {
        console.log("Error occurred:", err);
        console.log("Promise chain failed");
    });

// Alternative approach for Example 3 (nested promises)
/*
let output = fetch("https://jsonplaceholder.typicode.com/posts");

output.then((data) => {
    console.log("Response:", data);
    let jsonPromise = data.json(); // Returns a promise
    console.log("JSON Promise:", jsonPromise);

    jsonPromise
        .then((value) => {
            console.log("Parsed JSON:", value);
        })
        .catch((err) => {
            console.log("JSON error:", err);
        });
    
    console.log("Promise is resolved");
}).catch((err) => {
    console.log("Fetch error:", err);
    console.log("Promise is rejected");
});
*/

// ==========================================
// ASYNC/AWAIT EXAMPLES
// ==========================================

//! Key Points:
// - async is used in function declaration
// - await is inside the function body
// - async function always returns a promise
// - await suspends execution until promise resolves

// ==========================================
// EXAMPLE 4: Basic Async/Await
// ==========================================

async function getTodos() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        console.log("Response:", response);

        let jsonData = await response.json();
        console.log("JSON Data:", jsonData);

        return jsonData; // Optional return
    } catch (error) {
        console.log("Error in getTodos:", error);
    }
}

// Calling async function
// getTodos();
// console.log("This runs immediately after function call");

// Getting return value from async function
// let result = getTodos();
// console.log("Result (Promise):", result); // This will be a Promise

// ==========================================
// EXAMPLE 5: Execution Order with Async
// ==========================================

console.log("1 - First line (synchronous)");

async function asyncExample() {
    console.log("2 - Inside async function (synchronous part)");

    let response = await fetch("https://jsonplaceholder.typicode.com/posts");

    console.log("3 - After await (asynchronous part)");
    return response;
}

asyncExample();
console.log("4 - After async function call (synchronous)");

// Expected output order: 1, 2, 4, 3
// Explanation:
// - Line 1: Executes immediately
// - Line 2: Executes when function is called
// - Line 4: Executes immediately (doesn't wait for async)
// - Line 3: Executes after fetch completes

// ==========================================
// EXAMPLE 6: Promise vs Async/Await Comparison
// ==========================================

// Using Promises (traditional way)
function fetchDataWithPromises() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => {
            console.log("Data with Promises:", data);
            return data;
        })
        .catch(error => {
            console.log("Promise Error:", error);
        });
}

// Using Async/Await (modern way)
async function fetchDataWithAsync() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await response.json();
        console.log("Data with Async/Await:", data);
        return data;
    } catch (error) {
        console.log("Async Error:", error);
    }
}

// ==========================================
// EXAMPLE 7: Multiple Async Operations
// ==========================================

async function multipleAsyncOperations() {
    try {
        console.log("Starting multiple async operations...");

        // Sequential execution (one after another)
        let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
        let postsData = await posts.json();
        console.log("Posts fetched:", postsData.length);

        let users = await fetch("https://jsonplaceholder.typicode.com/users");
        let usersData = await users.json();
        console.log("Users fetched:", usersData.length);

        return {
            posts: postsData,
            users: usersData
        };

    } catch (error) {
        console.log("Error in multiple operations:", error);
    }
}

// ==========================================
// EXAMPLE 8: Parallel Async Operations
// ==========================================

async function parallelAsyncOperations() {
    try {
        console.log("Starting parallel async operations...");

        // Parallel execution (simultaneous)
        let [postsResponse, usersResponse] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/posts"),
            fetch("https://jsonplaceholder.typicode.com/users")
        ]);

        let [postsData, usersData] = await Promise.all([
            postsResponse.json(),
            usersResponse.json()
        ]);

        console.log("Parallel - Posts:", postsData.length, "Users:", usersData.length);
        return {
            posts: postsData,
            users: usersData
        };

    } catch (error) {
        console.log("Error in parallel operations:", error);
    }
}

// ==========================================
// TESTING THE FUNCTIONS
// ==========================================

// Uncomment to test different examples:

// Basic examples
// getTodos();
// fetchDataWithPromises();
// fetchDataWithAsync();

// Advanced examples
// multipleAsyncOperations();
// parallelAsyncOperations();

// ==========================================
// BEST PRACTICES SUMMARY
// ==========================================

/*
1. Use async/await for better readability
2. Always wrap await in try-catch blocks
3. Use Promise.all() for parallel operations
4. Remember that async functions return promises
5. Handle errors properly in both promises and async/await
6. Understand execution order with async operations
*/