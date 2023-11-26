import express from "express";
import asyncHandler from 'express-async-handler';
import { userSignin, userMissionAdd, reviewPreview, missionPreview } from "../controllers/user.controller.js";

export const userRouter = express.Router({mergeParams: true});

userRouter.post('/signin', asyncHandler(userSignin));
userRouter.post('/mission', asyncHandler(userMissionAdd));
userRouter.get('/reviews', asyncHandler(reviewPreview));
userRouter.get('/mission', asyncHandler(missionPreview));

/**
 * @swagger
 * paths:
 *  /{userId}/reviews:
 *      get:
 *          tags:
 *              - User
 *          summary: 내가 작성한 리뷰 목록
 *          parameters:
 *          - name: userId
 *            in: path
 *            schema:
 *              type: integer
 *            required: true
 *          - name: reviewId
 *            in: query
 *            required: false
 *            schema:
 *            properties:
 *              reviewId:
 *                  type: integer
 *          - name: paging
 *            in: query
 *            required: true
 *            schema:
 *              properties:
 *                  size:
 *                      type: integer 
 */

/**
 * @swagger
 * paths:
 *  /{userId}/missions:
 *      get:
 *          tags:
 *              - User
 *          summary: 내가 진행중인 미션 목록
 */