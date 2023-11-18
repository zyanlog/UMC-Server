import { response } from '../../config/response.js';
import { status } from '../../config/response.status.js';
import { createReview } from '../services/review.service.js';

export const reviewAdd = async (req, res, next) => {
    console.log("body:", req.body);

    res.send(response(status.SUCCESS, await createReview(req.body)));
}