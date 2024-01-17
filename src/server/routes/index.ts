import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import {CidadeControllers} from '../controllers/cidades';

const router = Router();


router.get('/', (_, res) => {
  return res.send('Ola Dev!');
});

router.get('/cidades',CidadeControllers.getAllValidation,CidadeControllers.getAll);
router.post('/cidades',CidadeControllers.createValidation,CidadeControllers.create);
router.get('/cidades/:id',CidadeControllers.getByidValidation,CidadeControllers.getByid);
router.put('/cidades/:id',CidadeControllers.UpadateByidValidation,CidadeControllers.updateById);
router.delete('/cidades/:id',CidadeControllers.deleteByidValidation,CidadeControllers.deleteByid);



export { router };  
