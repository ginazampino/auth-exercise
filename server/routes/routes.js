module.exports.install = (app) => {
    require('./default')(app);
    require('./authentication')(app);
}