import { response } from '../../config/response.js';
import { status } from '../../config/response.status.js';
import { joinUser } from '../services/user.service.js';
import { addMission } from "../services/user.service.js";

export const userSignin = async (req, res, next) => {
    console.log('회원가입을 요청하였습니다!');
    console.log('body:', req.body);

    res.send(response(status.SUCCESS, await joinUser(req.body)));
}
  
export const userMissionAdd = async (req, res, next) => {

    console.log("body:", req.body);

    res.send(response(status.SUCCESS, await addMission(req.body)));
}