import { BaseError } from '../../config/error.js';
import { status } from '../../config/response.status.js';
import { previewReviewResponseDTO } from '../dtos/user.dto.js';
import { getPreviewReview } from '../models/user.dao.js';

export const getReview = async (storeId, query) => {
    const {reviewId, size = 3} = query;
    return previewReviewResponseDTO(await getPreviewReview(reviewId, size, userId));
}