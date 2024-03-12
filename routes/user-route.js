import express from 'express';
const router = express.Router();
import { allUser } from '../controllers/user-controller';

router.get('/', allUser)
export default router;