const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRouter = require('./routes/auth');

dotenv.config();

const PORT = process.env.PORT || 5000;


const app = express();

app.use(express.json());

app.use('/api/v1/users',userRouter);

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to MONGODB'))
    .catch((err) => console.log(err))



app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
})