const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');

/* GET ALL CATEGORIES */
router.get('/', function (req, res) {
    let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1;
    database.table('categories as c')
        .withFields([
            'c.title',
            'c.id',
        ])
        .sort({id: .1})
        .getAll()
        .then(cats => {
            if (cats.length > 0) {
                res.status(200).json({
                    count: cats.length,
                    categories: cats
                });
            } else {
                res.json({message: "No categories found"});
            }
        })
        .catch(err => console.log(err));
});


module.exports = router;