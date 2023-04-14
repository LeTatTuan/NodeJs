const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
router.get('/', siteController.index);

// tạo tuyến đường cho nó, tuyến đường gốc để cuối
module.exports = router;
