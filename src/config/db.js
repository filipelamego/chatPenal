import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: '10.14.205.9',
  user: 'root',
  password: '123456',
  database: 'sisgep',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
