import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { addMissionResponseDTO } from "../dtos/user.dto.js"
import { addMission, getMission } from "../models/user.dao,js";

export const addMission = async (body) => {

    const addMissionData = await addMission ({
        'member_id': body.member_id,
        'mission_id': body.mission_id,
        'status': body.status  
    });

    if (addMissionData == -1) {
        throw new BaseError(status.MEMBER_MISSION_ALREADY_EXIST);
    } else {
        return addMissionResponseDTO(await getMission(addMissionData));
    }
}