const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const postRoute = require('./routes/posts');

require('dotenv').config();

const MONGODB_URL = process.env.DB_CONNECTION_URL;
const PORT = process.env.PORT || 5000;

const app = express();

app.use('/posts', postRoute);

// Setting up the Body Parser for the API
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Connect to MongoDB Cluster
mongoose
	.connect(MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => console.log('Database is successfully connected'))
	.catch((err) => console.log(err.message));

// Listen and connect to the server
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
