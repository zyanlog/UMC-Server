import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { addMission } from "../services/user.service.js";

export const userMissionAdd = async (req, res, next) => {

    console.log("body:", req.body);

    res.send(response(status.SUCCESS, await addMission(req.body)));
}