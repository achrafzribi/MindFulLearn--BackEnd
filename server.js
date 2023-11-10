import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import EvenementRoutes from './routes/evenement.js';

const app = express();
const port = process.env.PORT || 9090;
const databaseName = 'MindFulLearn';


mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose
  .connect(`mongodb://0.0.0.0:27017/${databaseName}`)
  .then(() => {
    console.log(`Connected to ${databaseName}`);
  })
  .catch(err => {
    console.log(err);
  });

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/evenement', EvenementRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to your Express application');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});