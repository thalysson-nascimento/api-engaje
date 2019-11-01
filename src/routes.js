import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router;

routes.get('/', (req, res) => res.json({ message: 'API Engaje 1.0' }));

routes.get('/users', UserController.store);

export default routes;
