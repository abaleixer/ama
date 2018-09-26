const dbConnection = require('../../config/dbConnection');

module.exports = app => {
 
    // const connection = dbConnection();
     people = ['geddy', 'neil', 'alex'],
    app.get('/home', (req, res) => {
        res.render('home/home', {
            Persona: people
        });

        // connection.query('SELECT * FROM Personas', (err, result) => {
        //     res.render('home/home', {
        //         personas: result
        //     });
        // });
    });



    // app.post('/AddPersona', (req, res) => {
    //     const { title, news } = req.body;
    //     connection.query('INSERT INTO news SET ? ',
    //       {
    //         title,
    //         news
    //       } , (err, result) => {
    //       res.redirect('/news');
    //     });
    //   });
    app.post('/AddPersona', (req, res) => {
        const { title, news } = req.body;
        people.push(title);
    console.log(title,news);

    // prueba auto renderando
    // res.render('home/home', {
    //     Persona: people
    // });
    // res.redirect('/home');
      });
}