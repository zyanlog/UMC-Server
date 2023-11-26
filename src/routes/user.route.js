import express from "express";
import asyncHandler from 'express-async-handler';
import { userSignin, userMissionAdd, reviewPreview, missionPreview } from "../controllers/user.controller.js";

export const userRouter = express.Router({mergeParams: true});

userRouter.post('/signin', asyncHandler(userSignin));
userRouter.post('/mission', asyncHandler(userMissionAdd));
userRouter.post('/reviews', asyncHandler(reviewPreview));
userRouter.get('/mission', asyncHandler(missionPreview));