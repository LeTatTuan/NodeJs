const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const { dirname } = require('path');
const { query } = require('express');
const app = express();
const port = 3000;
const route = require('./routes/index');

//static files
app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set(
    'view engine',

    'hbs',
);
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
