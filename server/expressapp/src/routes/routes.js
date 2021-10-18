const {Router} = require('express');
const {getStations, createStation, getStationById, deleteStation, updateStation} = require('../controllers/index.controller.js');

const router = Router();

//routes
router.get('/cities', getStations);
router.get('/cities/:id', getStationById);
router.post('/cities', createStation);
router.delete('/cities/:id', deleteStation);
router.put('/cities/:id', updateStation);

module.exports = router;