const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const { dirname } = require('path');
const { query } = require('express');
const methodOverride = require('method-override');

const app = express();
const port = 3000;
const route = require('./routes/index');
const db = require('./config/db');

// Connect to DB
db.connect();

//static files
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
     extended: true
}));
app.use(express.json());

//app.use(bacBaoVe);// middleware cho cả app, use bắt tất cả các phương thức
function bacBaoVe(req, res, next)
{
     if(['vethuong', 'vevip'].includes(req.query.ve))
     {
          req.face = 'Gach - Gach - Gach!!!';
          return next();
     }
     res.status(403).json({message: 'access denied'});
}


/*app.get('/middleware',
function (req, res, next)
{
     if(['vethuong', 'vevip'].includes(req.query.ve))
     {
          req.face = 'Gach - Gach - Gach!!!';
          return next();
     }
     res.status(403).json({message: 'access denied'});
},
function(req, res, next)
{
     res.json({
          message: 'Successfully!',
          face: req.face
     });
}
);*/


app.engine('hbs', engine({
     extname: '.hbs', defaultLayout: 'main',
     helpers: {
          sum: (a, b) => a + b,
     }
}));
app.set(
     'view engine',

     'hbs',
);
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
     console.log(`App listening on port http://localhost:${port}`);
});
