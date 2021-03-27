import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';

import './database/connection';
import routes from './routes';

import errorHandler from './errors/handler';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..','uploads')));
app.use(errorHandler);

// ROTA = CONJUNTO

// RECURSO = USUARIO

// METODO HTTP = GET, POST, PUT, DELETE
//  GET = BUSCAR UMA INFORMAÇÃO(LISTA,ITEM)
//  POST = CRIANDO UMA NFORMAÇÃO
//  PUT = EDITANDO UMA INFORMAÇÃO
//  DELETE= DELETANDO UMA INFORMAÇÃO

// PARAMETROS
// Query Params: http://localhost:3333/users?search=eduardo
// Route Params: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users/1 (dados de um recurso)



app.listen(3333);

// REQUISIÇÃO  --->   RESPOSTA
// localhost:3333

// Driver nativo, Query Builder, ORM(Object Relational Mapping)
//