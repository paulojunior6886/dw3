// arquivo routes/router.js
const express = require("express");
const routerApp = express.Router();
const appAlunos = require("../apps/alunos/controller/ctlAlunos");
const appCursos = require("../apps/cursos/controller/ctlCursos");
const appLogin = require("../apps/login/controller/ctlLogin");

// middleware that is specific to this router
routerApp.use((req, res, next) => {
	next();
});

routerApp.get("/", (req, res) => {
	res.send("Olá mundo!");
});

//Rotas de Alunos
routerApp.get("/getAllAlunos", appAlunos.GetAllAlunos);
routerApp.get("/getAlunoByID/:alunoid", appLogin.AutenticaJWT, appAlunos.GetAlunoByID);
routerApp.get("/getCursosToAlunos", appLogin.AutenticaJWT, appAlunos.GetCursosToAlunos); // Linha adicionada
routerApp.post("/insertAluno", appLogin.AutenticaJWT, appAlunos.InsertAluno);
routerApp.put("/updateAluno/:alunoid", appAlunos.UpdateAluno);
routerApp.delete("/deleteAluno/:alunoid", appAlunos.DeleteAluno);

//Rotas de Cursos
routerApp.get("/getAllCursos", appCursos.GetAllCursos);
routerApp.get("/getCursoByID/:cursoid", appCursos.GetCursoByID);
routerApp.post("/insertCurso", appCursos.InsertCurso);
routerApp.put("/updateCurso/:cursoid", appCursos.UpdateCurso);
routerApp.delete("/deleteCurso/:cursoid", appCursos.DeleteCurso);

// Rota Login
routerApp.post("/Login", appLogin.Login);
routerApp.post("/Logout", appLogin.Logout);

module.exports = routerApp;
