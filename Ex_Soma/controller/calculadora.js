const somar = (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);

  res.json({
    operacao: "somar",
    num1: num1,
    num2: num2,
    resultado: num1 + num2
  });
};

const subtrair = (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);

  res.json({
    operacao: "subtrair",
    num1: num1,
    num2: num2,
    resultado: num1 - num2
  });
};

const multiplicar = (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);

  res.json({
    operacao: "multiplicar",
    num1: num1,
    num2: num2,
    resultado: num1 * num2
  });
};

const dividir = (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);

  if (num2 === 0) {
    return res.json({
      operacao: "dividir",
      erro: "Não é permitido dividir por zero"
    });
  }

  res.json({
    operacao: "dividir",
    num1: num1,
    num2: num2,
    resultado: num1 / num2
  });
};

module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir
};