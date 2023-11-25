import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";
import { addMission } from "../services/mission.service.js";

export const addMission = async (req, res, next) => {
    console.log("body:", req.body);

    res.send(response(status.SUCCESS, await addMission(req.body)));
}