import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { signinResponseDTO } from "../dtos/mission.dto"
import { addUser, getUser, getUserPreferToUserID, setPrefer } from "../models/mission.dao";

export const addMission = async (body) => {
    const addMissionData = await addMission({
        'store_id' : body.store_id,
        'price' : body.price,
        'reward' : body.reward,
        'deadline' : body.deadline
    });
    
    return addMissionResponseDTO(await getMission(addMissionData));
}