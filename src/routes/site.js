const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');




router.use('/search', siteController.search);
router.use('/', siteController.index);

// tạo tuyến đường cho nó, tuyến đường gốc để cuối 
module.exports = router;
