import { createServer } from "http";
import dKatalisMiniProject from "./src";

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Server is running...");
});

// Running the server on localhost:3000
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  dKatalisMiniProject();
});
