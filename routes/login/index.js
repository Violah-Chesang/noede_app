const express = require('express');

const router = express.Router();

router.use(express.json());



//handling data sent from the ejs page
router.post('/login-form', (req, res) => {
    res.send('submitted successfully!!');
});

module.exports = router;