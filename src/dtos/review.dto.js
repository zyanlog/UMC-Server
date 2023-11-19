// add response DTO
export const addReviewResponseDTO = (review) => {
    return {"review_id" : review[0].id, "store_id" : review[0].store_id, "member_id" : review[0].member_id};
}