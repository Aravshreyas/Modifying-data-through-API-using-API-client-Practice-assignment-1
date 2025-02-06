const express = require('express');
const { addItem, getMenuItem } = require('../controller/menuController');

const router = express.Router();

router.post('/', addItem);
router.get('/', getMenuItem);

module.exports = router;