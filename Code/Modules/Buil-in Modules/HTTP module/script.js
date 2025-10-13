import http from 'http';

// console.log(http);

//? use createServer();

let server = http.createServer((req, res) => {

  // res.write("Hello from server");
  // res.end();
  // res.end(`message from sever`);

  // res.write(`Message - 1`);
  // res.write("Message - 2");
  // res.end();
  // res.write("Crashed"); // this line will crash the server because res.end() will end the cycle
  //! routing

  // let endpoint = req.url;
  // if (endpoint === '/about') res.end(`this is about page`);
  // else
  //   res.end(`something else`);

  //! homepage
  if (req.url === '/')
    //? for --> localhost:9000 or localhost:9000/
    res.end(`this is homepage/landing page`);

  else if (req.url === '/getProfile') {
    //? for --> localhost:9000/me
    // db call
    // updation 
    res.end('this is about page'); // later json response will send using this format
    /*
    let jsonresponse = {
      success: true,
      statusCode: 201,
      message: 'user regiestered successfully',
      data: {} // optional
    } */
  } else if (req.url === '/download')
    //? for --> localhost:9000/download
    res.end(`this is download page`);

  else {
    //? for --> localhost:9000/xyz
    res.end(`Page not found`)
  }

});

server.listen(9000, (err) => {
  if (err)
    console.log(err);
  console.log(`Server running at port 9000`);
});

// res.writeHead(statusCode, {})