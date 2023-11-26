import { BaseError } from '../../config/error.js';
import { status } from '../../config/response.status.js';
import { previewReviewResponseDTO, previewMissionResponseDTO } from '../dtos/user.dto.js';
import { getPreviewReview, getPreviewMission } from '../models/user.dao.js';

export const getReview = async (userId, query) => {
    const {reviewId, size = 3} = query;
    return previewReviewResponseDTO(await getPreviewReview(reviewId, size, userId));
}

export const getMission = async (userId, query) => {
    const {missionId, size = 3} = query;
    return previewMissionResponseDTO(await getPreviewMission(missionId, size, userId));
}