import express from "express";
import { App } from "../src/App";
import ReactDOMServer from "react-dom/server";
import React from "react";

// const PORT = process.env.PORT || 9000;
const app = express();

app.get("/", (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);
  console.log(app);
  const html = `
  <!DOCTYPE html>
  <html lang="ja">
  <head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>webpack / React / TypeScript</title>
  </head>
  <body>
      <div id="root">${app}</div>
  </body>
    <script src="index.js"></script>
  </html>
`;

  return res.send(html);
});

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });
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
