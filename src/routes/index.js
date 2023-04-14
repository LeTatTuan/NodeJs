const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

module.exports = route;
// tao controller
// tao duong dan
// su dung duong dan trong index.js : duong dan chinh