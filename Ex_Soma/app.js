const express = require("express");
const routes = require("./routes/routes");

const app = express();
const port = 40000;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log("Servidor calculadora rodando na porta", port);
});