const Place = require('../models/Place')

exports.placesAdd = (req, res) => {
  res.render('new-places')
}

exports.addNewPlace = async (req, res) => {
  //obtener info del for
  const { name, description, lat, lng} = req.body
  //crear el lugar
  const location = {
    type: 'Point',
    coordinates: [lng, lat]
  }
  //crear registro
  await Place.create({
    name, 
    description,
    location
  })
  //redirigir
  res.redirect('/')
}

exports.detailPlaceView = async (req, res) => {
  const place = await Place.findById(req.params.placesId)
  res.render('place-detail', place)
}

exports.viewRouter = (req, res) => {
  res.render('router-path')
}