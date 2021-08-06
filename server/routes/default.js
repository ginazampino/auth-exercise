// Add path from Node:
const path = require('path');

// Import Sequelize models:
const { Users, Profiles } = require('../database/sequelize');

module.exports = (app) => {
    // Send index.html to the root URL:
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../client/index.html'));
    });
}