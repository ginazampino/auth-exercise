/*

    'Require' Statements
    --------------------

    Add Sequelize to the application
    and import database credentials.

*/

const Sequelize = require('sequelize');
const { mariadb } = require('./mariadb');


/*

    Configure Sequelize
    -------------------
    
    Create and configure Sequelize
    to connect to the database.

*/

const sequelize = new Sequelize(mariadb.database, mariadb.username, mariadb.password, {
    host: mariadb.host,
    dialect: 'mysql',
    operatorsAliases: false,
    port: 3303,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: true
    }
});

/*

    Sequelize Models
    ----------------

    Define sequelize models as they
    appear in the database.

*/

const Users = sequelize.define('users', {

    // Users table:

    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    email: {
        type: Sequelize.DataTypes.STRING,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    }

});

const Profiles = sequelize.define('profiles', {

    // Profiles table:

    username: {
        type: Sequelize.DataTypes.STRING,
        validate: {
            notEmpty: true
        }
    },

    userId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
            model: Users,
            key: Users.id
        }
    }
    
});

Profiles.belongsTo(Users); // FK

/*

    MariaDB Connection
    ------------------

    Establish a connection to
    the database.

*/

let connectionPromise = sequelize
    .authenticate()
    .then(() => {
        console.log('Connection to the Petz Hub database has been established.');
        return sequelize;
    })
    .catch(err => {
        console.error('Unable to establish connection to the Petz Hub database.', err);
    });

/*

    Export Sequelize
    ----------------

    Send Sequelize information for use
    by the Express application.

*/

module.exports = {
    connect: connectionPromise,
    sequelize: sequelize,
    Users,
    Profiles
};