export const insertUserSql = "INSERT INTO user (email, user_name, gender, birth, user_address, user_spec_address, user_phone) VALUES (?, ?, ?, ?, ?, ?, ?);";

export const getUserID = "SELECT * FROM user WHERE user_id = ?";

export const connectFoodCategory = "INSERT INTO user_favor_category (f_category_id, user_id) VALUES (?, ?);";

export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM user WHERE email = ?) as isExistEmail";

export const getPreferToUserID =
"SELECT ufc.uf_category_id, ufc.f_category_id, ufc.user_id, fcl.f_category_name "
+ "FROM user_favor_category ufc JOIN food_category_list fcl on ufc.f_category_id = fcl.f_category_id "
+ "WHERE ufc.user_id = ? ORDER BY ufc.f_category_id ASC;";

export const insertMissionSql = "INSERT INTO member_mission (member_id, store_id, status) VALUES (?, ?, ?);";

export const getMissionID = "SELECT * FROM member_mission WHERE mission_id = ?";

export const confirmMission = "SELECT EXISTS(SELECT 1 FROM member_mission WHERE member_id = ? and store_id = ?) as isExistMission";

export const getReviewByReviewId = 
"SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at "
+ "FROM review r JOIN user u on r.user_id = u.user_id "
+ "WHERE u.user_id = ? AND r.review_id < ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"

export const getReviewByReviewIdAtFirst = 
"SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at "
+ "FROM review r JOIN user u on r.user_id = u.user_id "
+ "WHERE u.user_id = ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"

export const getMissionByMissionId = 
"SELECT s.name, m.reward, m.deadline, mm.status, mm.created_at, mm.user_id, mm.id "
+ "FROM member_mission mm JOIN mission m on mm.mission_id = m.mission_id JOIN store s ON mm.store_id = s.store_id "
+ "WHERE mm.user_id = ? AND mm.status = 'progress' AND mm.id < ?  "
+ "ORDER BY mm.id DESC LIMIT ? ;"

export const getMissionByMissionIdAtFirst = 
"SELECT s.name, m.reward, m.deadline, mm.status, mm.created_at, mm.user_id, mm.id "
+ "FROM member_mission mm JOIN mission m on mm.mission_id = m.mission_id "
+ "WHERE mm.user_id = ? AND mm.status = 'progress' "
+ "ORDER BY mm.id DESC LIMIT ? ;"