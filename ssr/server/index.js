// const hoge = require("../src/App.tsx")
// const express = require("express");
// const app = express();
// const port = 9000;

// app.get("/", (req, res) => {
//   const app = ReactDOMServer.renderToString(hoge())
//   const html = `
//   <html lang="ja">
//   <head>
//       <script src="main.js" async defer></script>
//   </head>
//   <body>
//       <div id="root">${app}</div>
//   </body>
//   </html>
// `;
// res.send(html);
//   // res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

import express from "express";



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("Hello, World");
});

app.listen(9000, () => console.log("Hello!"));





// コンパイルできたやつ、もしもの時に戻す用
// import express from "express";



// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.json("Hello, World");
// });

// app.listen(9000, () => console.log("Hello!"));
