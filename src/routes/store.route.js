import express from "express";
import asyncHandler from 'express-async-handler';
import { reviewPreview } from "../controllers/store.controller.js";

export const storeRouter = express.Router({mergeParams: true});

storeRouter.post('/reviews', asyncHandler(reviewPreview));