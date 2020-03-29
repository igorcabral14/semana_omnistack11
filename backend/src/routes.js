const express = require('express');
const ONGController = require('./controllers/ONGController'); //Importação dos arquivo de cadastro de ONG
const IncidentController = require('./controllers/IncidentController'); //Importação de arquivo de cadastro de casos
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

//Listagem de ongs cadastradas
routes.get('/ongs', ONGController.index);
//Cadastrar as ONGS
routes.post('/ongs', ONGController.create);

//Cadastrat incidentes
routes.post('/incidents', IncidentController.create);
//Listar todos os incidentes ocorridos
routes.get('/incidents', IncidentController.index);
//Deleção de casos. Agora precisamos ir à uma rota mais afundo, tendo em vista que é uma exata
routes.delete('/incidents/:id', IncidentController.delete); 

//Listagem de casos específicos 
routes.get('/profile', ProfileController.index);

//Verificação de validade da sessão
routes.post('/sessions', SessionController.create);

module.exports = routes;