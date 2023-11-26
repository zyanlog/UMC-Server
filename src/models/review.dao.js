import { pool } from "../../config/db.config.js";
import { BaseError } from "../../config/error.js";
import { status } from "../../config/response.status.js";
import { confirmStore, insertReviewSql, getReviewID } from "./review.sql.js";

// Review 데이터 삽입
export const addReview = async (data) => {
    try{
        const conn = await pool.getConnection();

        const [confirm] = await pool.query(confirmStore, store_id);

        if(confirm[0].isNotFoundStore){
            conn.release();
            return -1;
        }

        const result = await pool.query(insertReviewSql, [data.user_id, data.store_id, data.body, data.score, data.image]);

        conn.release();

        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 리뷰 정보 얻기
export const getReview = async (ReviewId) => {
    try {
        const conn = await pool.getConnection();

        const [review] = await pool.query(getReviewID, ReviewId);

        console.log(review);

        if(review.length == 0){
            return -1;
        }

        conn.release();

        return review;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}