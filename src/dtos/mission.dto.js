// add response DTO
export const addMissionResponseDTO = (mission) => {
    return {"store_id": mission[0].store_id, "price": mission[0].price, "reward": mission[0].reward};
}