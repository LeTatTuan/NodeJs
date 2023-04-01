class SiteController
{
    index(req, res)
    {
        res.render('home');
    }

    //[GET]/news/:slug // search
    search(req, res)
    {
        res.render('search');
    }

    // tạo pthuc trong đây
    
}

module.exports = new SiteController;

//const newController = require('./NewsController');