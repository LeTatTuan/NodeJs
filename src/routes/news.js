const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.show);
router.get('/', newsController.index);

// tạo tuyến đường cho nó, tuyến đường gốc để cuối
module.exports = router;
