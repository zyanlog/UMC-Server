import express from 'express';
import { reviewAdd } from '../controllers/review.controller.js';

export const reviewRouter = express.Router();

reviewRouter.post('/add', reviewAdd);