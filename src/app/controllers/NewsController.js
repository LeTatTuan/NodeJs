class NewsController
{
    index(req, res)
    {
        res.render('news');
    }

    //[GET]/news/:slug
    show(req, res)
    {
        res.send('NEWS DETAIL');
    }

    // tạo pthuc trong đây
    
}

module.exports = new NewsController;

//const newController = require('./NewsController');