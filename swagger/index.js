import { userRouter } from '../src/routes/user.route.js';
import asyncHandler from 'express-async-handler';

app.use('/user', asyncHandler(userRouter));