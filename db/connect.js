import mysql from 'mysql2';

class Connect {
    static pool = null;

    static async getConnection() {
        if (Connect.pool === null) {
            Connect.pool = mysql.createPool({
                host     : process.env.dbHost,
                user     : process.env.dbUser,
                password : process.env.dbPassword,
                database : process.env.dbName,
            });
        }
        return Connect.pool.promise();
    }
}

export default Connect;
