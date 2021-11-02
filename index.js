const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
const cartRouter = require('./routes/cart');


dotenv.config();

const PORT = process.env.PORT || 5000;


const app = express();

app.use(express.json());

app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter);
app.use('/api/v1/products',productRouter);
app.use('/api/v1/carts', cartRouter);


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to MONGODB'))
    .catch((err) => console.log(err))



app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
})