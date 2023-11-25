import express from 'express';
import { reviewAdd } from '../controllers/review.controller.js';
import asyncHandler from 'express-async-handler';

export const reviewRouter = express.Router();

reviewRouter.post('/add', asyncHandler(reviewAdd));