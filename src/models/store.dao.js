import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import {  } from "./store.sql.js";

export const getPreviewReview = async (cursorId, size, storeId) => {
    try {
        const conn = await pool.getConnection();

        if(cursorId == "undefined" || typeof cursorId == "undefined" || cursorId == null) {
            const [reviews] = await pool.query(getReviewByReviewIdAtFirst, [parseInt(storeId), parseInt(size)]);
            conn.release();
            return reviews;
        } else {
            const [reviews] = await pool.query(getReviewByReviewId, [parseInt(storeId), parseInt(cursorId), parseInt(size)]);
            conn.release();
            return reviews;
        }
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}