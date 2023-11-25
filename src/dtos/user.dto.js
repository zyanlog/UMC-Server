// sign in response DTO
export const signinResponseDTO = (user, prefer) => {
    const preferFood = [];
    for (let i = 0; i < prefer[0].length; i++) {
        preferFood.push(prefer[0][i].f_category_name);
    }
    return {"email": user[0].email, "name": user[0].user_name, "preferCategory": preferFood};
}

export const addMissionResponseDTO = (mission) => {
    return {"member_id": mission[0].member_id, "store_id": mission[0].store_id, "status": mission[0].status};
}