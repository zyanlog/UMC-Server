export const addMissionResponseDTO = (mission) => {
    return {"member_id": mission[0].member_id, "store_id": mission[0].store_id, "status": mission[0].status};
}