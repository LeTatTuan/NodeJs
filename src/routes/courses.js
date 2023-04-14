const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/:slug', courseController.show);

// tạo tuyến đường cho nó, tuyến đường gốc để cuối
module.exports = router;
