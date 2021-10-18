const { Pool } = require("pg");


const pool = new Pool({
  host: process.env.PG_HOST,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  port: process.env.PG_PORT,
});

const getStations = async(req, res) => {
  const response = await pool.query("SELECT * FROM ciudades");
  res.status(200).json(response.rows);
};

const getStationById = async(req, res) =>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM ciudades WHERE id = $1', [id]);
    res.json(response.rows);
};

const createStation = async(req, res) => {
  const { name, state, province } = req.body;
  const response = await pool.query(
    'INSERT INTO ciudades (name, state, province) VALUES ($1, $2, $3)',
    [name, state, province]
  );
  console.log(response);
  res.json({
      message: 'Station Added Successfully',
      body: {
          station: {name, state, province}
      }
  });
};

const updateStation = async(req, res) => {
    const id = req.params.id;
    const { name, state, province } = req.body;

    const response = await pool.query('UPDATE ciudades SET name = $1, state = $2, province = $3 WHERE id = $4', [ name, state, province, id]);
    console.log(response)
    res.json(`Station ${id} was sucessfully updated`);
};

const deleteStation = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM ciudades WHERE id = $1', [id]);
    console.log(response)
    res.send(`Station ${id} was sucessfully deleted`);
};


module.exports = {
  getStations,
  createStation,
  getStationById,
  deleteStation,
  updateStation
};
