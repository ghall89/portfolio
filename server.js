require('dotenv').config();

const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const uikit = require('uikit');

const app = express();
const PORT = process.env.PORT || 3001;

const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

app.listen(PORT, () =>
	console.log(`🔌 Connected and listening on port ${PORT}!`)
);
