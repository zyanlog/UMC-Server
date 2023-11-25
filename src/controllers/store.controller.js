import { response } from '../../config/response.js';
import { status } from '../../config/response.status.js';
import { getReview, getMission } from '../services/store.provider.js';

export const reviewPreview = async (req, res, next) => {
    return res.send(response(status.SUCCESS, await getReview(req.params.storeId, req.query)));
}

export const missionPreview = async (req, res, next) => {
    return res.send(response(status.SUCCESS, await getMission(req.params.storeId, req.query)));
}