module.exports.install = (app) => {
    require('./debug')(app);
    require('./auth')(app);
}