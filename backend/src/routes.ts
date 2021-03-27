import{Router} from 'express';
import multer from 'multer';

import OrphanagesController from './controllers/OrphanagesController';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

// MVC - MODEL , VIEWS, CONTROLLERS

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images') ,OrphanagesController.create);
    // console.log(request.query);
    // console.log(request.params);
    // console.log(request.body);
    

    // return response.send('Hello World'); //envio de string

export default routes;