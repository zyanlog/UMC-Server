import express from 'express';
import { userMissionAdd } from '../controllers/user.controller.js';

export const userRouter = express.Router();

userRouter.post('/mission', userMissionAdd);