import express from 'express';
import { t } from '../controllers/user.controller.js'; 

const router=express.Router();

router.get('/test',t);


export default router;


