import express from 'express';
import { HandleAdminLogin, HandleAdminSignup } from '../controllers/AdminControllers.js';

const router = express.Router();


router.post("/admin/signup", HandleAdminSignup)
router.post("/admin/login", HandleAdminLogin)

export default router 