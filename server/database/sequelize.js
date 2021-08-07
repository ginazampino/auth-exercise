// Add Sequelize to the application:
const Sequelize = require('sequelize');

// Import database information for use by Sequelize configuration:
const { mariadb } = require('./database');

// Create and configure Sequelize:
const sequelize = new Sequelize(mariadb.database, mariadb.username, mariadb.password, {
    host: mariadb.host,
    dialect: 'mysql',
    operatorsAliases: false,
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

// Define Sequelize models as they appear in the database:
const Users = sequelize.define('users', {
    email: {
        type: Sequelize.DataTypes.STRING,
        validate: {
            isEmail: true,
            allowNull: false,
            notEmpty: true,
            unique: true
        }
    }
});

const Profiles = sequelize.define('profiles', {
    username: {
        type: Sequelize.DataTypes.STRING,
        validate: {
            allowNull: false,
            notEmpty: true,
            unique: true
        }
    }
});

// Establish a connection to the database:
let connectionPromise = sequelize
    .authenticate()
    .then(() => {
        console.log('Connection to the Petz Hub database has been established.');
        return sequelize;
    })
    .catch(err => {
        console.error('Unable to establish connection to the Petz Hub database.', err);
    });

// Export Sequelize for import by the application:
module.exports = {
    connect: connectionPromise,
    sequelize: sequelize,
    Users,
    Profiles
};