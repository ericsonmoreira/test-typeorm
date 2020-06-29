import { Router, Request, Response } from 'express';
import { getUsers, findUser, saveUser, updateUser, removeUser } from './controllers/UserController';

const routes = Router();

// rota de teste
routes.get('/', (request: Request, response: Response) => {
  return response.json({ response: 'ola mundo' });
});

// Rotas do UserController
routes.get('/users', getUsers);
routes.get('/users/:id', findUser);
routes.post('/users', saveUser);
routes.put('/users/:id', updateUser);
routes.delete('/users/:id', removeUser);

export default routes;