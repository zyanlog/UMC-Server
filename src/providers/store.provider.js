import { BaseError } from '../../config/error.js';
import { status } from '../../config/response.status.js';
import { previewReviewResponseDTO } from '../dtos/store.dto.js';
import { getPreviewReview } from '../models/store.dao.js';

export const getReview = async (storeId, query) => {
    const {reviewId, size = 3} = query;
    return previewReviewResponseDTO(await getPreviewReview(reviewId, size, storeId));
}