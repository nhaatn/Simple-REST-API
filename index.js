import express from 'express'; // New way of importing express
import bodyParser from 'body-parser'; // Allows to take in post req bodies

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); // means we will use json data in whole application

app.use('/users', usersRoutes);

// Create route
app.get('/', (req, res) => res.send('Hello from HOME PAGE.')); // GET req to home page

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));