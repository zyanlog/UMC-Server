export const insertReviewSql = "INSERT INTO review (member_id, store_id, body, score, image) VALUES (?, ?, ?, ?, ?);";

export const getReviewID = "SELECT * FROM review WHERE review_id = ?";

export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM user WHERE store_id = ?) as isNotFoundStore";