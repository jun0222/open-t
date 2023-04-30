require("./tracing");
const express = require("express"); // カスタムサーバーを使っている=Expressを使っている
const { createServer } = require("http");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("*", (req, res) => {
    handle(req, res);
  });

  const httpServer = createServer(server);

  httpServer.listen(3052, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3052");
  });
});
