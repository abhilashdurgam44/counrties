import express from 'express';
import bodyParser from 'body-parser';
import db from './db.js';
import CountryRoutes from './routes/country.js'

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});
app.use('/',CountryRoutes)

app.listen(3000, () => {
  console.log('Express server initialized');
});
