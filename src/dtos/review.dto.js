// add response DTO
export const addReviewResponseDTO = (review) => {
    return {"review_id" : review.id, "store_id" : review.store_id, "member_id" : review.member_id};
}