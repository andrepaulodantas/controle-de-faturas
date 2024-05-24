import express from 'express';
import { login, createUser, getUser, updateUser, deleteUser } from '../controllers/authController';

const router = express.Router();

router.post('/login', login);
router.post('/create', createUser);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
