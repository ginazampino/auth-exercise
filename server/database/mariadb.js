/*

    Export Credentials 
    ------------------

    Send information required by Sequelize
    to connect to the database.

*/

module.exports = {
    mariadb: {
        database: 'petzhub',
        host: 'localhost',
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    }
};