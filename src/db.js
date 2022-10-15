import { createPool } from "mysql2/promise";
export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'Maria_2305',
    port: 3306,
    database: 'crud'

})