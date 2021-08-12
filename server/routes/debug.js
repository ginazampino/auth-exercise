/*

    Export Routes
    -------------

    Send debug routes for use by the
    Express application.

*/

module.exports = (app) => {
    app.get('/debug/fail', (req, res) => {
        res.send('Debug: failed')
    });

    app.get('/debug/pass', (req, res) => {
        res.send('Debug: passed')
    });
}; 