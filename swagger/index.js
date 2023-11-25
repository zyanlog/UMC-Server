import express from 'express';
import { tempRouter } from '../src/routes/temp.route.js';
import { userRouter } from '../src/routes/user.route.js';
import { reviewRouter } from '../src/routes/review.route.js'
import { missionRouter } from '../src/routes/mission.route.js';
import { response } from '../config/response.js';
import { status } from "../config/response.status.js";
import { specs } from '../config/swagger.config.js';
import SwaggerUi from 'swagger-ui-express';

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: false}));
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));

app.use('/temp', tempRouter);
app.use('/user', userRouter);
app.use('/review', reviewRouter);
app.use('/mission', missionRouter);

app.use((req, res, next) => {
    const err = new BaseError(status.NOT_FOUND);
    next(err);
})

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.data.status).send(response(err.data));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});