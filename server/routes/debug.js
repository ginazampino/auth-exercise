module.exports = (app) => {
    app.get('/debug/user/email', (req, res) => {
        res.send(req.user.emails[0].value)
    })
};