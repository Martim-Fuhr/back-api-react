import { Router } from 'express';
import CommentsController from '../controllers/CommentsController';

const routes = new Router();

routes.get('/comments', CommentsController.index);
routes.get('/comments/:id/', CommentsController.show);
routes.post('/comments', CommentsController.store);
routes.put('/comments/:id/', CommentsController.update);
routes.delete('/comments/:id/', CommentsController.delete);

export default routes;
