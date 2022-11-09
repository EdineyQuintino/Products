require('dotenv').config();
const express = require('express');

const userRoutes = require('./routes/user');
const produtcsRoutes = require('./routes/products');
const categoriesRoutes = require('./routes/categories');

const app = express();

const PORT = process.env.PORT || 3334;
app.use(express.json());

app.use(userRoutes);
app.use(produtcsRoutes);
app.use(categoriesRoutes);

app.listen(PORT,()=>{
    console.log('Running on port',PORT);
});