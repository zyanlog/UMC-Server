export const getReviewByReviewId = 
"SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at "
+ "FROM review r JOIN user u on r.user_id = u.user_id "
+ "WHERE r.store_id = ? AND r.review_id < ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"

export const getReviewByReviewIdAtFirst = 
"SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at "
+ "FROM review r JOIN user u on r.user_id = u.user_id "
+ "WHERE r.store_id = ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"

export const getMissionByMissionId = 
"SELECT s.store_name, m.reward, m.deadline, m.mission_spec, m.mission_id "
+ "FROM store s JOIN mission m on s.store_id = m.store_id "
+ "WHERE s.store_id = ? AND m.mission_id < ? "
+ "ORDER BY m.mission_id DESC LIMIT ? ;"

export const getMissionByMissionIdAtFirst = 
"SELECT s.store_name, m.reward, m.deadline, m.mission_spec, m.mission_id "
+ "FROM store s JOIN mission m on s.store_id = m.store_id "
+ "WHERE s.store_id = ? "
+ "ORDER BY r.mission_id DESC LIMIT ? ;"