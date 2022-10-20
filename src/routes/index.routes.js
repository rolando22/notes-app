const { Router } = require('express');

const router = Router();
const indexCtrl = require('../controllers/index.controller');

router.get('/', indexCtrl.renderIndex);
router.get('/about', indexCtrl.renderAbout);

module.exports = router;
