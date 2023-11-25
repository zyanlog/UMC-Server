import { BaseError } from '../../config/error.js';
import { status } from '../../config/response.status.js';
import { signinResponseDTO, addMissionResponseDTO } from '../dtos/user.dto.js';
import { addUser, getUser, getUserPreferToUserID, setPrefer, addMission, getMission } from '../models/user.dao.js';

export const joinUser = async (body) => {
    const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);
    const prefer = body.prefer;

    const joinUserData = await addUser({
        'email' : body.email,
        'name' : body.name,
        'gender' : body.gender,
        'birth' : birth,
        'addr' : body.addr,
        'specAddr' : body.specAddr,
        'phone' : body.phone
    });

    if (joinUserData == -1) {
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    } else {
        for (let i = 0; i < prefer.length; i++) {
            await setPrefer(joinUserData, prefer[i]);
        }
        return signinResponseDTO(await getUser(joinUserData), await getUserPreferToUserID(joinUserData));
    }
}

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