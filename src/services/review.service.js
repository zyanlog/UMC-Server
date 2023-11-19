import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { addReviewResponseDTO } from "../dtos/review.dto.js"
import { addReview, getReview } from "../models/review.dao";

export const createReview = async (body) => {

    const createReviewData = await addReview({
        'user_id' : 1,
        'store_id' : body.store_id,
        'body' : body.body,
        'score' : body.score,
        'image' : body.image
    });

    if (createReviewData == -1) {
        throw new BaseError(status.STORE_NOT_FOUND);
    } else {
        return addReviewResponseDTO(await getReview(createReviewData));
    }
}