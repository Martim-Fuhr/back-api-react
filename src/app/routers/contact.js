import { Router } from 'express';
import ContactController from '../controllers/ContactController';

const routes = new Router();

routes.get('/contact', ContactController.index);
routes.get('/contact/:id/', ContactController.show);
routes.post('/contact', ContactController.store);
routes.put('/contact/:id/', ContactController.update);
routes.delete('/contact/:id/', ContactController.delete);

export default routes;
