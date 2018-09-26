module.exports = app => {
    app.get('/', (req, res) => {
        res.send('Hola usuario 3000');
    });
}