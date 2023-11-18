import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const pool = mysql.createPool({
    host: process.env.DB_HOST || 'zsdb.cyuneuzt8qcx.ap-northeast-2.rds.amazonaws.com',
    user: process.env.DB_USER || 'root',
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_TABLE || 'zsdb',
    password:process.env.DB_PASSWORD || 'System2000',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});