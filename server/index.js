const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log("Начало обработки запроса");
 // Установка заголовков CORS
 res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Замените на URL Вашего клиента
 res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
 res.setHeader("Access-Control-Allow-Headers", "Content-Type");

 if (req.method === "OPTIONS") {
   // Обработка предварительных запросов (OPTIONS)
   res.writeHead(204, "No Content");
   res.end();
   return;
 }
  
  if (req.method === "GET") {
    handleGetRequest(req, res);
  } else if (req.method === "POST") {
    handlePostRequest(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

function handleGetRequest(req, res) {
  fs.readFile(path.join(__dirname, "data.json"), "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error reading file");
      return;
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  });
}

function handlePostRequest(req, res) {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    try {
      const data = JSON.parse(body);
      fs.writeFile(path.join(__dirname, "data.json"), JSON.stringify(data), (err) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Error writing to file");
          return;
        }

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Data saved successfully");
      });
    } catch (err) {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("Invalid JSON data");
    }
  });
}

server.listen(3000, "127.0.0.1", () => {
  const { address, port } = server.address();
  console.log(`Сервер запущен ${address}:${port}`);
});