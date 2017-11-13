import * as http from "http";

const PORT = 3000;

const app = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hola desde DemoOverflow");
  res.end();
});

app.listen(PORT, () => {
  console.log("Server runing at port ${PORT}");
});
