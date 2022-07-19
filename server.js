
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// PORT call for default port, if not specified use 3001
const PORT = process.env.PORT || 3001;

//Express app for data parsing.
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Router directions
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// ensuring server starts with console log confriming.
app.listen(PORT, function() {
    console.log(`Listening on ${PORT}`);
});
