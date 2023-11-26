import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { addMissionResponseDTO } from "../dtos/mission.dto.js"
import { addMission, getMission } from "../models/mission.dao.js";

export const addOneMission = async (body) => {
    const addMissionData = await addMission({
        'store_id' : body.store_id,
        'price' : body.price,
        'reward' : body.reward,
        'deadline' : body.deadline
    });
    
    return addMissionResponseDTO(await getMission(addMissionData));
}