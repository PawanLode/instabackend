const express = require('express');
const connection = require('./storage/db');
const authRouter = require('./router/auth');
const cors = require('cors');

require('dotenv').config()
const app = express();
app.use(express.json());
app.use(cors())

app.use('/auth',authRouter);


app.get('/', (req, res) => {
    res.send("home")
})
app.get('/', (req, res) => {
    
})


app.listen(process.env.PORT || 1434, async() => {
   await connection;

})