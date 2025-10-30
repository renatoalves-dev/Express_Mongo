const express = require('express'); 
const  exphbs = require("express-handlebars");
const app = express(); 
const PORT = 3000; // Define the port number for the server
const conn = require('./backend/database/conn');
const User = require('./backend/models/User');

// Config JSON Response
app.use(express.json());
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.engine('handlebars', exphbs.engine())
app.use(express.urlencoded({extended: true}))

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.render('index'); 
});


app.post('/users/create', async (req, res) => {

  const nome = req.body.nome;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;


  console.log(req.body);

  if(newsletter === 'on'){

    newsletter = true;
  }


 await User.create({nome, occupation, newsletter});
  res.redirect('/');
});







// conn.sync().then(()  => {

//   app.listen(5000);

// })
// Start the server and listen for incoming requests on the specified port
app.listen(PORT, () => {
  console.log(`Express app listening at http://localhost:${PORT}`);
});