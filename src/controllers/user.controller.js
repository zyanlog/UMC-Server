import { response } from '../../config/response.js';
import { status } from '../../config/response.status.js';
import { joinUser, addMission } from '../services/user.service.js';
import { getReview, getMission } from '../services/user.provider.js';

export const userSignin = async (req, res, next) => {
    console.log('회원가입을 요청하였습니다!');
    console.log('body:', req.body);

    res.send(response(status.SUCCESS, await joinUser(req.body)));
}
  
export const userMissionAdd = async (req, res, next) => {

    console.log("body:", req.body);

    res.send(response(status.SUCCESS, await addMission(req.body)));
}

export const reviewPreview = async (req, res, next) => {
    return res.send(response(status.SUCCESS, await getReview(req.params.userId, req.query)));
}

export const missionPreview = async (req, res, next) => {
    return res.send(response(status.SUCCESS, await getMission(req.params.userId, req.query)));
}