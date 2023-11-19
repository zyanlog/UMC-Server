export const insertMissionSql = "INSERT INTO mission (store_id, price, reward, deadline) VALUES (?, ?, ?, ?);";

export const getMissionID = "SELECT * FROM mission WHERE mission_id = ?";