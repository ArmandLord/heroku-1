const express = require('express');
const router  = express.Router();
const { placesAdd, addNewPlace, detailPlaceView, viewRouter } = require("../controllers/places")
const Place = require('../models/Place')
const { catchErrors } = require('../middlewares/index')

/* GET home page */
router.get('/', async (req, res, next) => {
  const places = await Place.find()
  res.render('index', { places });
});

router.get('/places/add', placesAdd)
router.post('/places/add', catchErrors(addNewPlace))
router.get('/places/router', viewRouter)
router.get('/places/:placesId', catchErrors(detailPlaceView))


module.exports = router;
