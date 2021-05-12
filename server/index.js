const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const PORT = 5000;

//middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
});
