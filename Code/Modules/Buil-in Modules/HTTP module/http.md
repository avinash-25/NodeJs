## HTTP

- (HTTP): Hypertext Transfer Protocol.
- In order to communicate with the server, we need to use HTTP protocol. it is used when communication between server and client or server and server.

- **GET** : this is used when we want to fetch the resource.
- **post** : this is used when a new resources sent to server.
- **dalete** : this is used for deleting a resource.
- **put** : this is used for updating a resource.(fully)
- **patch** : this is used for updating a resources.(partially)

### HTTP module.

- It is a builtin module, through which we can create servers.

**createServer()**

- createServer() accepts one parameter, which is callback function and store in the variable. --> **_req and res (objects)_**
- assign the port number using `listen()` --> inside this first one is port number and second one is callback function(not mandatory)
- To close the server, press `ctrl+c` on terminal.
- after every modification, restart the sever
- If the current port is occupied, we will get an error : "address already in use"
- **Built-in-modules** :  for automatically execute the server **_node --watch filename.js_**
- we can only watch one file in once.

1. **res.write()** - is used to display message on the UI.
2. **res.end()** - to end the req-res cycle use end()

- processing : 1xx
- Success : 2XX
- redirections : 3XX
- client error : 4XX
- server error : 5XX



### routing

- handling users multiple requests.
-