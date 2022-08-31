// console.log("Hello sir!");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=], initial-scale=1.0">
      <title>pseudo selectors and more designing</title>
      <style>
      body{
          background-color: black;
      }
          .container {
              font-family: cursive;
              border: 4px solid grey;
              color: khaki;
              background-color: lightcoral;
              padding: 34px;
              margin: 34px;
              width: 548px;
              border-radius: 9px;
              margin: 45px auto;
              
          }
          a{
              text-decoration: none;
          }
          a:hover{
              color: rgb(240, 205, 10);
              background-color: teal;
          }
          a:visited{
              background-color: violet;
          }
          a:active{
              background-color: darkblue;
          }
          .btn{
              font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
              cursor: pointer;
              background-color: rgb(89, 190, 221);
              border-radius: 5px;
              font-size: 18px;
              border: 2px solid black;
              padding: 2px;
              
          }
          .btn:hover{
              color: yellow;
              background-color: darkblue;
          }
      </style>
  </head>
  
  <body>
      <div class="container" id="style">
          <h2>pseudo selectors and more designing</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatum, sequi animi   magnam earum esse
          repellendus itaque eligendi, eos fugiat illum ratione quasi laboriosam iure adipisci. Eligendi eveniet porro
          aperiam nostrum, dolorum nisi reprehenderit?</p>
          <a href="https://facebook.com" class="btn">readmore</a>
          <button class="btn">contact us</button>
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});