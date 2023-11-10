import express from 'express';

import { GetEvenement } from '../controllers/evenement.js';
  
const router = express.Router();

router
  .route('/get/')
  .get(GetEvenement);
  
export default router;