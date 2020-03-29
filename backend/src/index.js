const express = require('express');    
const routes = require('./routes');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); //porta alternativa para evitar problemas possíveis  

/**
 * Rota / recursos
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar alguma informação no backend
  * POST: Criar uma nova informação no backend
  * PUT: Alterar uma informação no backend
  * DELETE: Deletar uma informação no backend
  *  
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: parâmetros nomaeados e enviados na rota após o '?', (filtros e paginaçãp...)
   * app.get('/users?name=Igor', (request, response)
   * Route Params: parâmetros utilizados para identificar recursos
   * app.get('/users/:id', (request, response) => {
    const params = request.params;
   * 
   * Request Body: corpo da requisição utilizado para criar o alterar recursos
   * 
   * 
   */

   /**
    * BANCOS DE DADOS
    * 
    * SQL: SQL Server, SQL Oracle, PostgresSQL, SQLite, ...
    * NoSQL: MongoDB, CouchDB, etc...
    * 
    * Usaremos o SQLite 
    * Exemplo de SQL no JavaSript:
    * Query Builder: table('users').select('*').where()
    * 
    */




