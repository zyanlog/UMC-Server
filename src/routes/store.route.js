import express from "express";
import asyncHandler from 'express-async-handler';
import { reviewPreview, missionPreview } from "../controllers/store.controller.js";

export const storeRouter = express.Router({mergeParams: true});

storeRouter.post('/reviews', asyncHandler(reviewPreview));
storeRouter.get('/missions', asyncHandler(missionPreview));

/**
 * @swagger
 * paths:
 *  /{storeId}/missions:
 *      get:
 *          tags:
 *              - Store
 *          summary: 특정 가게의 미션 목록
 */