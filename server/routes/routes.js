module.exports.install = (app) => {
    require('./auth')(app);
}