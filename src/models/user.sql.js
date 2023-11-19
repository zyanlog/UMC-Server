export const insertMissionSql = "INSERT INTO member_mission (member_id, store_id, status) VALUES (?, ?, ?);";

export const getMissionID = "SELECT * FROM member_mission WHERE mission_id = ?";

export const confirmMission = "SELECT EXISTS(SELECT 1 FROM member_mission WHERE member_id = ? and store_id = ?) as isExistMission";
