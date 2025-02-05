const express = require('express');
const { addItem, getMenuItem } = require('../controller/menuController');

const router = express.Router();

router.post('/add', addItem);
router.get('/details', getMenuItem);

module.exports = router;