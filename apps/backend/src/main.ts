// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import * as express from 'express';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import routes from './app/routes/app-routes';
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbURL = process.env.DB_URL;

mongoose.connect(dbURL);

routes(app);

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
