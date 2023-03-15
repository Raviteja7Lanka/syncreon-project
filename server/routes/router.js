const express = require('express');
const Controller = require('../controllers/controller')
const router = express.Router()

router.get('/loadingTransaction', Controller.loadingTransaction);
router.post('/upload', Controller.uploadToDb);
router.get('/getAllOrders', Controller.getAllOrders);
router.put('/update', Controller.updateOrder);

module.exports = router;