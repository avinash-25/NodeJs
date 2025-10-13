***Q1. What is the difference betweeb user-defiened modules and built-in modules in NodeJS?***
- In user-defiened modules the code for this written by user itself and it desigened by user for their own persecpective.
- In built-in modules evrytinng(requirment + code ) all are predefiened. we cant update in that, we can only use according to our need for ex : fs module for file system, http module for client server management etc.

***Q2. Write a simple script using the fs modules synchronous method readFileSync to send file and log its contents***

***Q3. Build a simple server using the https module that:***
     - Accepts Get/users --> Returns a mock JSON user list.
     - Accepts GET/download --> Display a download page

***Q4. Modify the HTTP server to serve a 404 Not Found responses if the URL path is not /.***

***Q5. Create a nodeJS scripts that uses the built-in fs module to***

```js
//hardcoded values
const a = 10;
const b = 5;
```

perform arithmetic operation (add, subtract, multiply, divide) on two hardcoded values (e.g., 10 and 5)
Write the results of all four operations to a file named results.txt synchronousley.
Handle division by zero errors (even though inputs are hardcoded).

```js
Format of the file content as :
Addition : 15
Substraction : 5
Multiplication : 50
Division: 2
```
If division by zero occurs, write Division error: Divide by zero

