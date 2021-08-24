const { response, request } = require("express");
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
    response.send("Hello Word!");
});

app.post("/", (request, response) => {
    response.send("Método POST");
});

app.put("/", (request, response) => {
    response.send("Método PUT");
});

app.delete("/", (request, response) => {
    response.send("Método DELETE");
});

app.listen(PORT, () => console.log("O servidor está rodando..."));
