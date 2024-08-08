import express from 'express';
import { t, updateUser } from '../controllers/user.controller.js'; 
import { verifyToken } from '../utils/verifyUser.js';

const router=express.Router();

router.get('/test',t);
router.post('/update/:id',verifyToken,updateUser);


export default router;


