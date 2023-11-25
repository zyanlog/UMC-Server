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

export const previewReviewResponseDTO = (data) => {

    const reviews = [];

    for (let i = 0; i < data.length; i++) {
        reviews.push({
            "user_name": data[i].user_name,
            "rate": data[i].rate,
            "review_body": data[i].review_content,
            "create_date": formatDate(data[i].created_at)
        })
    }
    return {"reviewData": reviews, "cursorId": data[data.length - 1].review_id};
}

const formatDate = (date) => {
    return new Intl.DateTimeFormat('kr').format(new Date(date)).replaceAll(" ", "").slice(0, -1);
}